"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menu } from "@/lib/content";
import { Section } from "@/shared/components/Section";

export function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <Section id="menu" eyebrowArabic="القائمة" eyebrowEnglish="The Menu" title="From the Kitchen">
      <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 border-b border-plum/15 pb-6">
        {menu.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveId(category.id)}
            className={`text-sm tracking-[0.15em] uppercase transition-colors pb-1 border-b-2 ${
              activeId === category.id
                ? "text-terracotta border-terracotta"
                : "text-plum/50 border-transparent hover:text-plum"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <p dir="rtl" className="font-display text-xl text-terracotta/70 mb-6">
            {active.arabicName}
          </p>
          <ul className="space-y-6">
            {active.items.map((item) => (
              <li key={item.name}>
                <div className="flex items-baseline">
                  <span className="font-display text-xl">{item.name}</span>
                  {item.price && (
                    <>
                      <span className="menu-leader" aria-hidden="true" />
                      <span className="font-display text-xl">{item.price}</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-plum/60 mt-1">{item.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-plum/50 tracking-wide">
            Prices available in-house — ask your server for today&apos;s rates.
          </p>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
