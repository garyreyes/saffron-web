# CLAUDE.md

Read [ARCHITECTURE.md](ARCHITECTURE.md) first — it has the content model, folder
structure, and the "where does new code go" rule of thumb. This file is
project-specific safety rules only.

## Irreversible / high-blast-radius actions — always confirm with the user first

- **Never commit `.env.local` or any file containing `RESEND_API_KEY`.**
  It's gitignored on purpose (`.gitignore` excludes `.env*` except
  `.env.example`) — don't add exceptions for it.
- **Never send a real reservation email as a test.** The `/api/contact`
  route sends through Resend to `RESTAURANT_INBOX_EMAIL` — don't hit it
  repeatedly against the real restaurant inbox while testing; use a
  throwaway address or the Resend sandbox restriction (delivers only to
  the Resend account's own signup email until a domain is verified).
- **Never force-push to `main` or rewrite shared history.**
- **Changing `RESTAURANT_INBOX_EMAIL` or the `from` address in
  `src/app/api/contact/route.ts`** changes where real customer
  reservation requests go — confirm with the user before changing either.
- **Domain verification in Resend** (adding DNS records) affects a
  production domain — confirm before starting that flow.

## Content is data, not layout

All real restaurant facts (menu, hours, address, description) live in
`src/lib/content.ts`. Don't hardcode restaurant facts inside component
files — edit `content.ts` so there's one source of truth. If a fact looks
wrong or outdated, flag it rather than guessing — it was sourced from
public listings, not an official API, since Facebook blocks
unauthenticated scraping.

## Gates (enforced automatically — don't bypass)

- Pre-commit hook (`.husky/pre-commit`) runs `lint` + `typecheck` before
  every commit.
- CI (`.github/workflows/ci.yml`) runs `lint`, `typecheck`, and `build` on
  every PR and push to `main`.
- Don't use `git commit --no-verify` to skip the hook, and don't disable
  the CI workflow, without explicit user instruction.

## No test suite yet

This is a static marketing site with one API route. There's no unit test
framework installed — `lint` + `typecheck` + `build` are the gates. If
real business logic grows (e.g. server-side validation beyond the current
field checks, pricing logic, a booking/availability system), that's the
point to add a test runner — don't add one preemptively.
