import { gallery } from "@/lib/content";
import { Section } from "@/shared/components/Section";

/**
 * Placeholder tiles until real dish photography is dropped into
 * public/images/gallery and swapped in here — see ARCHITECTURE.md.
 */
export function Gallery() {
  return (
    <Section id="gallery" eyebrowArabic="معرض الصور" eyebrowEnglish="Gallery" title="A Taste, Before You Taste It">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {gallery.map((tile) => (
          <div
            key={tile.dish}
            className={`group relative aspect-square overflow-hidden bg-gradient-to-br ${tile.gradient} flex items-end p-4`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-25 transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 0, transparent 35%)",
              }}
            />
            <div className="relative text-cream">
              <p className="font-display text-lg leading-tight">{tile.dish}</p>
              <p className="text-xs opacity-80">{tile.note}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
