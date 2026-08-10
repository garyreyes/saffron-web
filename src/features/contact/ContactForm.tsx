"use client";

import { useState, type FormEvent } from "react";
import { restaurant } from "@/lib/content";
import { Section } from "@/shared/components/Section";
import { SubmitButton } from "@/shared/components/Button";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full bg-transparent border-b border-charcoal/25 py-2 focus:border-terracotta outline-none transition-colors placeholder:text-charcoal/40";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" eyebrowArabic="احجز طاولتك" eyebrowEnglish="Reservations" title="Reserve a Table">
      <div className="grid sm:grid-cols-[1fr_1fr] gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field — hidden from real visitors, catches simple bots */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <input name="name" required placeholder="Full name" className={inputClasses} />
            <input name="phone" required placeholder="Phone number" className={inputClasses} />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <input name="date" required placeholder="Preferred date & time" className={inputClasses} />
            <input name="partySize" placeholder="Party size" className={inputClasses} />
          </div>
          <textarea
            name="message"
            rows={3}
            placeholder="Anything else we should know?"
            className={inputClasses + " resize-none"}
          />
          <SubmitButton type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Request Reservation"}
          </SubmitButton>
          {status === "sent" && (
            <p className="text-sm text-sage">Thanks — we&apos;ll confirm your table shortly.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-terracotta">
              Something went wrong. Please call us instead, we&apos;d love to hear from you.
            </p>
          )}
        </form>

        <div className="text-sm space-y-4 self-start">
          <p className="text-charcoal/70">
            Prefer to book by phone or message? Reach us on Facebook and we&apos;ll get back to you
            quickly.
          </p>
          <a
            href={restaurant.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            Message us on Facebook →
          </a>
        </div>
      </div>
    </Section>
  );
}
