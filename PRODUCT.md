# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people near Sampaloc, Manila (heavily UST-adjacent — students, staff,
neighborhood locals) deciding where to eat or order from, who land on the
page to check the menu, confirm hours/location, and either reserve a table
for dine-in or jump to delivery. Secondary: first-time visitors researching
Middle Eastern food in Manila who found the restaurant via search or social
and want to evaluate it before visiting.

## Product Purpose

A marketing landing page for Saffron Middle Eastern Restaurant (a single,
real, operating restaurant — not a concept or demo). Success is a visitor
either reserving/walking in for dine-in or continuing to delivery ordering.
It is not a booking system or e-commerce site — no checkout or online
ordering happens on this site itself.

## Positioning

Authentic Arabic/Middle Eastern cooking (shawarma, kabsa, kofta, mezze,
baklava) served neighborhood-close to UST in Sampaloc, Manila — real
4.6★/121-review reputation, not a chain or a generic "Mediterranean fusion"
concept.

## Operating Context

- Single physical location: 1015 Asturias St, Sampaloc, Manila (near UST).
- Two ways a visitor converts: dine-in (via the on-page reservation form,
  phone, or Facebook Messenger) or delivery (routed out to the restaurant's
  existing foodpanda listing: https://www.foodpanda.ph/restaurant/s7tz/saffron-middle-eastern-restaurant-ust).
- No in-house delivery/ordering system — delivery is always an outbound
  link to foodpanda, never built natively on this site.

## Capabilities and Constraints

- No multi-location support needed — one restaurant, one address, ever.
- No confirmed halal certification, allergen policy, or price-tier claim —
  do not fabricate these; menu already flags vegan items where confirmed.
- Menu prices are not confirmed from a reliable source — the site
  currently says "ask your server" rather than inventing numbers.
- Reservation form sends email via Resend; no reservation database/backend
  exists (see ARCHITECTURE.md).

## Brand Commitments

The restaurant has a **real, pre-existing brand identity** used in its own
Facebook/Instagram promo materials — this is binding, not a style the site
invented:

- **Logo:** a floral/lotus emblem above a serif script wordmark reading
  "Saffron", with "MIDDLE EASTERN RESTAURANT" in small tracked-out caps
  beneath it.
- **Promo aesthetic:** saffron-gold/yellow display type over dark
  charcoal/gray photo backgrounds, food photography-led compositions, a
  thin vertical accent rule next to headlines.
- Future visual work should align the site to this real identity rather
  than continuing as a fully independent interpretation. The site's
  current custom "saffron thread" motif and bilingual Arabic/English
  section labels were a reasonable placeholder direction pre-brand-review,
  not a locked decision — expect this to be revisited once the real logo
  asset is in hand.

## Evidence on Hand

- Real menu/hours/address/rating in `src/lib/content.ts`, sourced from
  public listings (Google/Wanderlog/IBTravel) since Facebook blocks
  unauthenticated scraping.
- Real dish photography and the real logo were shown in chat (Chicken
  Warda, Chicken Shawarma, Chicken Kabsa, Beef Kofta Kebab, Baklava, plus
  the logo mark) — not yet saved as files in the repo; pasted chat images
  have no accessible file path, so the user needs to export/send them as
  actual image files before they can be placed in `public/images/`.
- Gallery section currently uses styled placeholder tiles pending those
  real photos.

## Product Principles

1. Product truth over polish — never invent prices, certifications, or
   claims the restaurant hasn't confirmed.
2. Two clear conversion paths, always visible: reserve/dine-in and
   delivery — neither should bury the other.
3. The real brand (logo, promo look) is the design authority going
   forward, not a from-scratch invented identity.
4. This is one neighborhood restaurant, not a chain — keep copy and
   design grounded in that scale (no "locations," no franchise language).
