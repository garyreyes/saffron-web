# Images — just drop files at these exact paths

No code changes needed. Every image below is auto-detected: the site
checks whether the file exists and swaps it in automatically, falling back
to the current placeholder design until it's there.

| File | Status | Used for | Notes |
|---|---|---|---|
| `logo.png` | ✅ in place | Header wordmark | Background keyed to transparent and trimmed from the original export. |
| `emblem.png` | ✅ in place | Faint decorative flower watermark in the Reservations section | |
| `hero.jpg` | ❌ needed | Homepage hero background | The single highest-impact photo on the site — this is the first thing a visitor sees. Wide/landscape, at least 1600px wide. A dark overlay is applied automatically for text contrast. |
| `about.jpg` | ❌ needed | About section photo (dining room / kitchen / chef) | Portrait-ish or square works best — see the section's aspect ratio. Falls back to a plain gradient block until provided. |
| `menu/*.png` | ✅ 5 of 6 in place | Gallery section tiles | See `menu/README.md`. |

Photos can be JPG or PNG — whichever matches the exact filename declared
in `src/lib/content.ts`. Keep photos to roughly 1200–1600px on the long
edge — no need for full camera-resolution originals, it just slows the
site down.
