import { restaurant } from "@/lib/content";
import { SaffronThread } from "@/shared/components/SaffronThread";

export function Footer() {
  return (
    <footer className="bg-plum-deep text-cream/70 px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <SaffronThread className="mb-8 max-w-xs" color="var(--saffron)" />
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="font-display text-3xl text-cream mb-2">{restaurant.name}</p>
            <p className="text-sm max-w-sm">{restaurant.addressShort}</p>
          </div>
          <div className="text-sm space-y-1 sm:text-right">
            {restaurant.hours.map((h) => (
              <p key={h.days}>
                <span className="opacity-70">{h.days}:</span> {h.hours}
              </p>
            ))}
            <a
              href={restaurant.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-saffron-bright hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>
        <p className="mt-10 text-xs opacity-50">
          © {new Date().getFullYear()} {restaurant.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
