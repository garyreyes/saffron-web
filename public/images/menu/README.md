# Gallery photos — exact filenames

Drop a file at each path below and it replaces that gallery tile's color
placeholder automatically (see `src/lib/content.ts`'s `gallery` array —
that's also where you'd rename a dish or add/remove a tile).

| File | Dish | Status |
|---|---|---|
| `chicken-kabsa.png` | Chicken Kabsa | ✅ in place |
| `chicken-shawarma.png` | Chicken Shawarma | ✅ in place |
| `chicken-warda.png` | Chicken Warda | ✅ in place |
| `beef-kofta-kebab.png` | Beef Kofta Kebab | ✅ in place |
| `baklava.png` | Baklava | ✅ in place |
| `fresh-pita-toum.jpg` | Fresh Pita & Toum | not yet provided |

The five already in place are Saffron's own designed promo posters (dish
name and logo baked into the image), so the gallery tile shows the image
alone — no extra caption is drawn on top of those, since the poster
already has its own typography. A plain product photo (no text) works
fine too; the tile just won't have a name/caption overlay in that case
either, so keep dish names readable in the photo itself, or ask to have
captions re-enabled for a specific tile.
