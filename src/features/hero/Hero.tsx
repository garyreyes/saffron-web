"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets, restaurant } from "@/lib/content";
import { LinkButton } from "@/shared/components/Button";
import { SaffronThread } from "@/shared/components/SaffronThread";
import { fadeUp, stagger } from "@/shared/lib/motion";

type HeroProps = {
  hasHeroImage: boolean;
};

export function Hero({ hasHeroImage }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center bg-plum text-cream px-6 overflow-hidden"
    >
      {hasHeroImage ? (
        <>
          <Image
            src={assets.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-plum/70" />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--saffron) 0, var(--saffron) 1px, transparent 1px, transparent 22px), repeating-linear-gradient(-45deg, var(--saffron) 0, var(--saffron) 1px, transparent 1px, transparent 22px)",
          }}
        />
      )}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-3xl text-center pt-16"
      >
        <motion.p
          variants={fadeUp}
          dir="rtl"
          className="font-display text-2xl text-saffron-bright mb-4"
        >
          {restaurant.arabicName}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-6"
        >
          {restaurant.name}
        </motion.h1>
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <SaffronThread className="max-w-xs" />
        </motion.div>
        <motion.p variants={fadeUp} className="text-lg sm:text-xl text-cream/80 mb-10 text-balance">
          {restaurant.tagline}
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <LinkButton href="#menu">View the Menu</LinkButton>
          <LinkButton href="#contact" variant="outline">
            Reserve a Table
          </LinkButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
