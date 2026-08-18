import { restaurant } from "@/lib/content";
import { Section } from "@/shared/components/Section";
import { LinkButton } from "@/shared/components/Button";

export function HoursLocation() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    restaurant.mapsQuery
  )}`;
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    restaurant.mapsQuery
  )}&output=embed`;

  return (
    <Section
      id="hours"
      eyebrowArabic="الساعات والموقع"
      eyebrowEnglish="Hours & Location"
      title="Visit Us"
      tone="plum"
    >
      <div className="grid sm:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-saffron-bright mb-4">Hours</h3>
          <ul className="space-y-2 mb-8">
            {restaurant.hours.map((h) => (
              <li key={h.days} className="flex items-baseline justify-between max-w-xs">
                <span>{h.days}</span>
                <span className="font-display text-lg">{h.hours}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-xs tracking-[0.2em] uppercase text-saffron-bright mb-4">Location</h3>
          <p className="mb-2">{restaurant.address}</p>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-saffron-bright hover:underline"
          >
            Get directions →
          </a>

          <h3 className="text-xs tracking-[0.2em] uppercase text-saffron-bright mb-4 mt-8">Good to Know</h3>
          <ul className="space-y-2 text-cream/80">
            <li>
              <span className="text-cream/50">Price range:</span> {restaurant.priceRange}
            </li>
            <li>
              <span className="text-cream/50">Services:</span> {restaurant.services.join(" · ")}
            </li>
            <li>
              <span className="text-cream/50">Rating:</span> {restaurant.rating.score}★ on{" "}
              {restaurant.rating.source} ({restaurant.rating.count} reviews)
            </li>
          </ul>
          <LinkButton
            href={restaurant.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="mt-6"
          >
            Leave a Review
          </LinkButton>
        </div>
        <div className="aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden border border-cream/10">
          <iframe
            title="Map to Saffron Middle Eastern Restaurant"
            src={mapsEmbedSrc}
            className="w-full h-full border-0 grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
