"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets, restaurant } from "@/lib/content";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#hours", label: "Hours & Location" },
  { href: "#contact", label: "Reserve" },
];

type HeaderProps = {
  hasLogo: boolean;
};

export function Header({ hasLogo }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-plum-deep/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between text-cream">
        <a href="#top" className="flex items-center gap-2">
          {hasLogo ? (
            <Image src={assets.logo} alt={restaurant.fullName} width={36} height={36} className="h-9 w-auto" />
          ) : (
            <span className="font-display text-2xl tracking-wide">{restaurant.name}</span>
          )}
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-saffron-bright transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={restaurant.foodpanda}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-saffron-bright text-plum-deep px-4 py-1.5 hover:bg-saffron transition-colors"
          >
            Order Delivery
          </a>
        </nav>
        <div className="flex md:hidden items-center gap-5 text-xs tracking-[0.2em] uppercase">
          <a
            href={restaurant.foodpanda}
            target="_blank"
            rel="noopener noreferrer"
            className="text-saffron-bright hover:text-saffron transition-colors"
          >
            Delivery
          </a>
          <a href="#contact" className="hover:text-saffron-bright transition-colors">
            Reserve
          </a>
        </div>
      </div>
    </header>
  );
}
