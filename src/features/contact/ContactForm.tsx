"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { assets, restaurant } from "@/lib/content";
import { Section } from "@/shared/components/Section";
import { LinkButton, SubmitButton } from "@/shared/components/Button";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full bg-transparent border-b border-plum/25 py-2 focus:border-terracotta outline-none transition-colors placeholder:text-plum/40";

type ContactFormProps = {
  hasEmblem: boolean;
};

export function ContactForm({ hasEmblem }: ContactFormProps) {
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
            <p className="text-sm text-purple-deep">Thanks — we&apos;ll confirm your table shortly.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-terracotta">
              Something went wrong. Please call us instead, we&apos;d love to hear from you.
            </p>
          )}
        </form>

        <div className="relative text-sm">
          <h3 className="text-xs tracking-[0.2em] uppercase text-terracotta mb-4">Other Ways to Reach Us</h3>
          <p className="text-plum/70 mb-4">
            Prefer to book by phone or message? Reach us on Facebook and we&apos;ll get back to you
            quickly.
          </p>
          <div className="space-y-2 mb-8">
            <a
              href={restaurant.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-terracotta hover:underline"
            >
              Message us on Facebook →
            </a>
            <a href={`mailto:${restaurant.email}`} className="block text-terracotta hover:underline">
              {restaurant.email}
            </a>
          </div>

          <h3 className="text-xs tracking-[0.2em] uppercase text-terracotta mb-4">Prefer Delivery?</h3>
          <p className="text-plum/70 mb-4">Order Saffron for delivery or pickup through foodpanda.</p>
          <LinkButton href={restaurant.foodpanda} target="_blank" rel="noopener noreferrer" variant="outline-dark">
            Order on foodpanda
          </LinkButton>

          <h3 className="text-xs tracking-[0.2em] uppercase text-terracotta mb-4 mt-8">Hours</h3>
          <ul className="space-y-1 text-plum/80">
            {restaurant.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.hours}
              </li>
            ))}
          </ul>

          {hasEmblem && (
            <Image
              src={assets.emblem}
              alt=""
              aria-hidden="true"
              width={200}
              height={168}
              className="pointer-events-none select-none absolute -right-2 bottom-0 w-32 sm:w-40 h-auto opacity-[0.12] mix-blend-luminosity"
            />
          )}
        </div>
      </div>
    </Section>
  );
}
