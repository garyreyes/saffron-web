"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/shared/lib/motion";

type SectionProps = {
  id: string;
  eyebrowArabic: string;
  eyebrowEnglish: string;
  title: string;
  tone?: "cream" | "charcoal";
  children: ReactNode;
};

export function Section({ id, eyebrowArabic, eyebrowEnglish, title, tone = "cream", children }: SectionProps) {
  const isDark = tone === "charcoal";
  return (
    <section
      id={id}
      className={`px-6 py-20 sm:py-28 ${isDark ? "bg-charcoal text-cream" : "bg-cream text-charcoal"}`}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 sm:mb-16"
        >
          <p className={`font-display text-lg mb-2 ${isDark ? "text-saffron-bright" : "text-terracotta"}`}>
            <span dir="rtl">{eyebrowArabic}</span>
            <span className="mx-2 opacity-50">—</span>
            <span className="font-sans text-xs tracking-[0.25em] uppercase align-middle opacity-70">
              {eyebrowEnglish}
            </span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
