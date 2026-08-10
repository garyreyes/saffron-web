import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

const MAX_LENGTHS = { name: 100, phone: 30, partySize: 10, date: 40, message: 1000 } as const;

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX_LENGTHS.name);
  const phone = clean(body.phone, MAX_LENGTHS.phone);
  const partySize = clean(body.partySize, MAX_LENGTHS.partySize);
  const date = clean(body.date, MAX_LENGTHS.date);
  const message = clean(body.message, MAX_LENGTHS.message);

  if (!name || !phone || !date) {
    return NextResponse.json(
      { error: "Name, phone, and preferred date are required." },
      { status: 400 }
    );
  }

  const inbox = process.env.RESTAURANT_INBOX_EMAIL;
  if (!inbox) {
    return NextResponse.json(
      { error: "Reservation inbox is not configured." },
      { status: 500 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Saffron Reservations <onboarding@resend.dev>",
    to: inbox,
    subject: `Reservation request from ${name}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Party size: ${partySize || "not specified"}`,
      `Preferred date: ${date}`,
      "",
      message || "(no additional message)",
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send reservation request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
