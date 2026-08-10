# Images — just drop files at these exact paths

No code changes needed. Every image below is auto-detected: the site
checks whether the file exists and swaps it in automatically, falling back
to the current placeholder design until it's there.

| File | Status | Used for | Notes |
|---|---|---|---|
| `logo.png` | ✅ in place | Header wordmark | Background keyed to transparent and trimmed from the original export. |
| `emblem.png` | ✅ in place | Optional decorative flower mark (no wordmark) | Not wired into a component yet — available for a favicon or accent use. |
| `hero.jpg` | Not yet provided | Homepage hero background | Wide/landscape photo, at least 1600px wide. A dark overlay is applied automatically for text contrast. |
| `menu/*.png` | ✅ 5 of 6 in place | Gallery section tiles | See `menu/README.md`. |

Photos can be JPG or PNG — whichever matches the exact filename declared
in `src/lib/content.ts`. Keep photos to roughly 1200–1600px on the long
edge — no need for full camera-resolution originals, it just slows the
site down.
