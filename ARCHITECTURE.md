# Saffron Middle Eastern Restaurant — Landing Page

## What this app does

A single-page marketing site for Saffron Middle Eastern Restaurant (Sampaloc,
Manila, near UST). Visually inspired by wolfgangssteakhouse.net's structure
and elegance (hero, menu highlights, about, gallery, hours/location, contact)
but with Saffron's own identity — warm Middle Eastern palette (saffron gold,
deep terracotta/burgundy, cream), not a reskin of a steakhouse.

Real content (address, hours, menu categories, rating) was sourced from the
restaurant's Facebook page and public listings (Google/Wanderlog/IBTravel),
since Facebook itself blocks unauthenticated scraping. Content is entered
manually and lives in one file, editable without touching layout code.

## Content model ("entities")

This is a static site, not a data-driven app — there's no database. But the
content still has a clear shape, defined once in `src/lib/content.ts`:

- `RestaurantInfo` — name, tagline, description, address, phone, hours[]
- `MenuCategory` — name, items: `MenuItem[]`
- `MenuItem` — name, description, price (optional — some items are
  market/ask-price)
- `GalleryImage` — src, alt
- `Testimonial` (optional) — quote, source (e.g. "Google, 4.6★")

No relationships/joins needed — everything nests under one content object.

## The one real dynamic piece: the contact/reservation form

Per your choice, there's a simple on-page reservation form (name, phone,
date, party size, message) that POSTs to a Next.js API route
(`src/app/api/contact/route.ts`), which sends an email to the restaurant via
Resend. This is the only server-side logic in the app.

Data flow: browser form → `POST /api/contact` (server) → Resend API → email
inbox. No database, no stored submissions — if you want a record of past
inquiries later, that's a real future fork (would need a database).

## Security baseline

- `RESEND_API_KEY` lives in `.env.local` (gitignored), read only inside the
  server-side API route — never sent to the browser, never prefixed
  `NEXT_PUBLIC_`.
- The API route validates and sanitizes all form fields server-side
  (required fields, length limits, basic format checks) — never trusts the
  client blindly, since anyone can POST to that endpoint directly.
- A honeypot field (hidden input real users never fill) is used to cut down
  spam submissions without adding a CAPTCHA dependency.
- No user accounts, no auth, no stored PII beyond the email itself — this
  keeps the attack surface small on purpose.
- `.env.local` and `.env*.local` are gitignored by default via
  `create-next-app`; double-check before first commit.

## Stack

- **Next.js** (App Router) — routing, image optimization, deploys cleanly to
  Vercel.
- **TypeScript** — catches content/prop mistakes before runtime.
- **Tailwind CSS** — utility styling for the custom Middle Eastern palette
  and layout.
- **Framer Motion** — scroll-triggered fades/reveals, the "alive" feel from
  the Wolfgang's reference, applied with restraint.
- **Vercel** — hosting/deployment, free tier is enough for this traffic
  level.

## Folder structure (feature-based)

```
src/
  app/
    page.tsx              -- assembles the sections in order
    layout.tsx             -- root layout, fonts, metadata
    api/
      contact/route.ts     -- POST handler, validates + sends via Resend
  features/
    hero/
      Hero.tsx
    menu/
      Menu.tsx              -- reads MenuCategory[] from content.ts
    about/
      About.tsx
    gallery/
      Gallery.tsx
    hours-location/
      HoursLocation.tsx     -- hours table + embedded map + address
    contact/
      ContactForm.tsx        -- client component, calls /api/contact
  shared/
    components/
      Section.tsx            -- shared section wrapper (spacing, reveal-on-scroll)
      Button.tsx
    lib/
      motion.ts               -- shared Framer Motion variants
  lib/
    content.ts                 -- RestaurantInfo, menu, gallery, testimonials
    resend.ts                  -- Resend client (server-only)
public/
  images/                       -- gallery/menu photos
```

Rule of thumb for new code: page-section-specific UI goes in
`features/<section>/`; anything reused across 2+ sections goes in
`shared/`; infra (email client, content data) goes in `lib/`. All restaurant
content edits happen in one place: `src/lib/content.ts`.
