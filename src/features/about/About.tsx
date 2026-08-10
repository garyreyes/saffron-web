import Image from "next/image";
import { assets, restaurant, testimonial } from "@/lib/content";
import { publicImageExists } from "@/lib/images";
import { Section } from "@/shared/components/Section";

export function About() {
  const hasAboutImage = publicImageExists(assets.about);

  return (
    <Section id="about" eyebrowArabic="من نحن" eyebrowEnglish="About Us" title="Our Story" tone="plum">
      <div className="grid sm:grid-cols-[1fr_1.2fr] gap-10 sm:gap-16 items-start">
        <div className="h-64 sm:h-full min-h-64 relative overflow-hidden">
          {hasAboutImage ? (
            <Image
              src={assets.about}
              alt={`Inside ${restaurant.fullName}`}
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-terracotta to-burgundy">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, var(--saffron) 0, transparent 45%), radial-gradient(circle at 75% 70%, var(--saffron) 0, transparent 40%)",
                }}
              />
              <p dir="rtl" className="absolute bottom-6 left-6 font-display text-4xl text-cream/90">
                زعفران
              </p>
            </div>
          )}
        </div>
        <div>
          <p className="text-cream/80 leading-relaxed text-lg">{restaurant.description}</p>
          <blockquote className="mt-8 border-l-2 border-saffron pl-5">
            <p className="font-display text-xl italic text-cream">&ldquo;{testimonial.quote}&rdquo;</p>
            <cite className="block mt-3 text-xs tracking-[0.2em] uppercase text-saffron-bright not-italic">
              {testimonial.source}
            </cite>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
