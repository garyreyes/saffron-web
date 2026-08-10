import Image from "next/image";
import { gallery } from "@/lib/content";
import { publicImageExists } from "@/lib/images";
import { Section } from "@/shared/components/Section";

/**
 * Renders the real photo the moment it exists at the path declared in
 * content.ts (see public/images/README.md); falls back to a styled
 * placeholder tile until then. No code changes needed after dropping a file.
 *
 * Real photos here are Saffron's own designed promo posters (dish name and
 * logo already baked in), so a photo tile shows the image alone — adding
 * our own caption on top would duplicate their own typography. The aspect
 * ratio matches those posters so nothing gets cropped into their headline.
 */
export function Gallery() {
  return (
    <Section id="gallery" eyebrowArabic="معرض الصور" eyebrowEnglish="Gallery" title="A Taste, Before You Taste It">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {gallery.map((tile) => {
          const hasPhoto = publicImageExists(tile.image);
          return (
            <div
              key={tile.dish}
              className={`group relative aspect-[857/965] overflow-hidden ${
                hasPhoto ? "" : `flex items-end p-4 bg-gradient-to-br ${tile.gradient}`
              }`}
            >
              {hasPhoto ? (
                <Image
                  src={tile.image}
                  alt={`${tile.dish} — Saffron Middle Eastern Restaurant`}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-25 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: "radial-gradient(circle at 20% 20%, white 0, transparent 35%)",
                    }}
                  />
                  <div className="relative text-cream">
                    <p className="font-display text-lg leading-tight">{tile.dish}</p>
                    <p className="text-xs opacity-80">{tile.note}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
