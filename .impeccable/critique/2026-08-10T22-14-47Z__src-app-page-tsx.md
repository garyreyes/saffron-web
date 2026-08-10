---
target: homepage (src/app/page.tsx)
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-10T22-14-47Z
slug: src-app-page-tsx
---
Method: dual-agent (A: general-purpose design-review agent · B: general-purpose detector/browser-evidence agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Form has sending/sent/error states, but success message is easy to miss; no field-level validation before submit |
| 2 | Match Between System and Real World | 3 | Natural language, logical section order — but the delivery path is far outside where real-world expectation would put it |
| 3 | User Control and Freedom | 3 | Nothing traps users, but mobile nav removes direct jump-links to any section except Reserve |
| 4 | Consistency and Standards | 2 | 1 of 6 gallery tiles and the entire About image are still placeholders — page reads part-finished |
| 5 | Error Prevention | 2 | Reservation date/party-size are unconstrained free text; only HTML `required` guards the form |
| 6 | Recognition Rather Than Recall | 3 | Text nav labels are good, but mobile collapses to only "Reserve" |
| 7 | Flexibility and Efficiency | n/a | Persuade landing page — no power-user path expected |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained palette and type system, undercut by visible placeholder/real-photo mismatch |
| 9 | Error Recovery | 3 | Generic but real fallback ("call us instead") on error |
| 10 | Help and Documentation | n/a | Not needed for a single-page marketing site |
| **Total** | | **22/32** | **Acceptable (69%)** |

## Design Specificity Verdict

**Grounded, not generic — with one real gap.** Verified against the actual brand assets: the emblem is a saffron-crocus flower (purple petals, red stigmas, yellow-gold anthers), and the site's plum/terracotta/saffron-gold palette maps directly onto those three colors — a genuinely product-specific decision, not a template default. The bilingual Arabic/English labels, RTL hero name, Amiri display serif, dotted menu-price leader, and "saffron thread" divider are specific to this restaurant and wouldn't survive a find-and-replace onto an unrelated business.

The real gap: `public/images/hero.jpg` doesn't exist, so the hero — the highest-impact section on a Persuade surface whose job is appetite appeal — renders as a flat dark field with a near-invisible diamond pattern instead of any food photography, on a restaurant site whose own brand principles call for "food photography-led compositions."

**Deterministic scan**: CLI scan of `src/` (static analysis): clean, 0 findings. Live browser/DOM detector on the rendered page found 5 distinct rule hits:
- `repeating-stripes-gradient` — the Hero's decorative diamond-pattern background. **This converges directly with the LLM review's hero/food-photography finding** — same underlying gap (a generic pattern standing in for real imagery), caught independently by both assessments.
- `image-hover-transform` ×5 — an identical `group-hover:scale-110` zoom effect on all 5 real Gallery photos (`Gallery.tsx`). Not raised by the design review; a legitimate craft note under this project's own motion guidance ("one authored moment, not scattered identical effects" — five identical hover zooms is exactly the pattern that guidance warns against).
- `em-dash-overuse` — 8 em-dashes in rendered body text. Source-verified as real: the About description, testimonial quote, contact success message, and menu note each use one, but the single largest contributor is structural — the shared `Section` component's eyebrow-label divider ("—") renders identically on every one of the 5 sections that use it. Minor, but worth knowing it's one repeated component pattern, not 8 independent copy choices.
- `call-caps-body` (34 chars) and `overused-font` (Inter, 67% of text): **both false positives on inspection.** The 34-char flag traces to the testimonial `<cite>` attribution in `About.tsx`, styled with the exact same `text-xs tracking-[0.2em] uppercase` treatment used consistently as a small-label convention in 5 other places across the site (Hours, Location, Good to Know, etc.) — this is the established system, not a one-off slip. The font-distribution flag reflects an intentional two-tier type system (Amiri display used sparingly for headings, Inter as the dominant body/UI face) — exactly the "characterful display face used with restraint + complementary dominant body face" pairing this kind of project should use; a majority-Inter body is the expected, correct outcome of that decision, not a defect.

No user-visible overlay tab was left open for direct inspection — the browser pass ran headless via automation rather than a presented `[Human]` tab, so these findings are relayed from the captured console output below rather than something to look at live right now.

## Overall Impression

The palette and typographic system are authored specifically for this restaurant — verified against the real logo/emblem, not assumed. What holds it back from "Good" is that the site doesn't yet fully deliver on its own stated product principles: PRODUCT.md calls for two equally-visible conversion paths (dine-in and delivery) and a food-photography-led brand feel, and right now neither is true at the page's highest-leverage moments — delivery is invisible until the very last section, and the hero (the single highest-impact screen on the page) shows no food at all. The single biggest opportunity is making the first screen and the top-level navigation actually reflect the two goals the product itself says matter most.

## What's Working

1. **The palette is authored, not assumed.** Plum/terracotta/saffron-gold traces directly to the actual emblem's flower colors — verified against the real asset file, not just a comment claiming so.
2. **The menu's tabbed category switcher** is well-executed: clean crossfade, clear active state, RTL Arabic paired with English, and an honest "ask your server for today's rates" instead of inventing prices per PRODUCT.md's own constraint.
3. **The real Gallery photos are the restaurant's own designed promo posters** (dish name + logo baked in), not generic stock or AI-generated food — exactly the kind of product-specific asset that makes a marketing page feel authored by the actual business.

## Priority Issues

**[P1] Delivery — one of two stated core conversion goals — is invisible until the very bottom of the page**
- **Why it matters**: PRODUCT.md states as a hard product principle: "Two clear conversion paths, always visible: reserve/dine-in and delivery — neither should bury the other." The foodpanda link exists only inside the Contact section, absent from the header nav and the hero CTAs. A visitor who came specifically for delivery has to scroll past Menu, About, and Gallery before finding it.
- **Fix**: Add a third, visually distinct CTA for delivery — a header nav link or a hero secondary action ("Order Delivery →") — so both conversion paths are reachable within the first screen.
- **Suggested command**: `/impeccable clarify`

**[P1] The hero has no food photography — the first screen shows zero product**
- **Why it matters**: `assets.hero` doesn't exist, so the hero falls back to a flat field with a near-invisible pattern (independently flagged by the detector as `repeating-stripes-gradient`). For a restaurant site whose sole job is to make a hungry decision easier, the highest-value screen currently shows nothing but type — and PRODUCT.md explicitly names "food photography-led compositions" as part of the real brand identity.
- **Fix**: Source and drop in a real hero food/interior photo at `public/images/hero.jpg` — the code already handles this conditionally, so this is a content gap, not a code change.
- **Suggested command**: `/impeccable polish`

**[P2] Placeholder/real-asset mismatch undercuts the page's credibility**
- **Why it matters**: 5 of 6 Gallery tiles are real photos; the 6th ("Fresh Pita & Toum") is still a gradient placeholder. The entire About section image is a hardcoded gradient with no path to ever becoming a real photo — unlike every other asset slot on the site, it isn't conditional on a real file landing. A visitor who notices one polished section next to one unfinished one reads the whole site as a work-in-progress.
- **Fix**: Source the missing pita/toum and About photos, or give the About image the same conditional real-photo pattern used everywhere else (`publicImageExists`).
- **Suggested command**: `/impeccable polish`

**[P2] Reservation form has weak error prevention for a high-stakes action**
- **Why it matters**: The date field is free-text with no format constraint, and party size accepts any string. This is the site's one conversion action that generates real staff work — malformed input means more back-and-forth, and more chance a customer's intended date gets misread.
- **Fix**: Use a native `<input type="date">` + a bounded party-size input, or at minimum a format hint and basic pattern validation.
- **Suggested command**: `/impeccable harden`

**[P3] Mobile header nav drops all wayfinding except Reserve**
- **Why it matters**: Below the `md` breakpoint the nav hides entirely except a single "Reserve" link — Menu, About, Gallery, and Hours become unreachable except by scrolling. Given the primary audience is UST-adjacent students likely on phones, this removes the fastest path to "is it open right now" or "what's on the menu."
- **Fix**: Add a lightweight mobile nav (hamburger/sheet), or at minimum keep "Menu" and "Hours" visible alongside "Reserve."
- **Suggested command**: `/impeccable layout`

## Persona Red Flags

**Jordan (Confused First-Timer)**: Wants a sense of cost before committing, but every menu item says "ask your server," and the only price signal ("$$") is buried in "Good to Know," several scrolls past the menu. Jordan also can't tell from the hero or nav that delivery is an option — "foodpanda" doesn't appear until the very bottom. High risk of leaving without discovering delivery exists.

**Riley (Deliberate Stress Tester)**: The reservation date field takes any string with no pattern validation — "yesterday," emoji, or nothing meaningful all submit successfully. Riley would immediately notice the Gallery's 5-real-photos-plus-1-placeholder inconsistency and flag it as an unfinished feature shipped live. A refresh mid-form-fill loses everything typed, with no draft recovery.

**Casey (Distracted Mobile User)**: Loses the header nav down to a single "Reserve" link — no way to jump straight to Hours or Gallery without scrolling through Menu and About first. If Casey's intent was delivery, the foodpanda button is the very last actionable element on the page — a lot of one-handed scrolling for a quick decision.

## Minor Observations

- Arabic-script spans (`dir="rtl"`) have no `lang="ar"` attribute (only `<html lang="en">` at the root) — screen readers will attempt English phonetic rules on Arabic script.
- Menu category tab labels at reduced opacity on cream are likely under 4.5:1 contrast for inactive tabs — worth a contrast check.
- The "Good to Know" price/services block sits in Hours & Location rather than near the Menu, where a cost-evaluating visitor would look first.
- Contact form success/error messages are plain text below the button with no visual emphasis — easy to miss if the button is near the bottom of the viewport.
- `restaurant.services` lists "In-store pickup," which isn't referenced anywhere else on the page — worth confirming this is accurate rather than an inherited default from the listing source.
- Detector-sourced, not independently raised by the design review: the Gallery's identical hover-zoom effect repeated across all 5 photos, and the em-dash pattern's largest source being the shared Section eyebrow divider rather than varied copy — both minor, both worth a look during a future `/impeccable delight` or `/impeccable typeset` pass.

## Questions to Consider

1. If delivery and dine-in are genuinely equal-weight conversion goals per PRODUCT.md, what would it look like to treat delivery as a first-class third CTA instead of a footnote in the contact section?
2. PRODUCT.md describes the real promo materials as "dark charcoal/gray," but the current dark sections use near-black plum/purple (grounded in the emblem's flower colors). Is that a deliberate reinterpretation for the web, or should it pull closer to the literal promo-post tone?
3. Now that real photos exist for 5 of 6 dishes and the logo/emblem are both in `public/images/`, what's actually blocking the hero and About images — a missing asset, or a decision not yet made about which photo to use?
