"use client";

import { motion } from "framer-motion";
import { drawThread } from "@/shared/lib/motion";

type SaffronThreadProps = {
  className?: string;
  color?: string;
};

/**
 * The page's signature motif: a loose, hand-scattered saffron thread,
 * echoing the real spice strand the restaurant is named for.
 */
export function SaffronThread({ className = "", color = "var(--saffron)" }: SaffronThreadProps) {
  return (
    <svg
      viewBox="0 0 320 28"
      fill="none"
      className={`thread-divider ${className}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <motion.path
        d="M4 20 C 40 4, 70 26, 108 12 S 176 2, 210 18 S 278 6, 316 14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={drawThread}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      />
      <motion.circle
        cx="4"
        cy="20"
        r="2.5"
        fill={color}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.3 }}
      />
      <motion.circle
        cx="316"
        cy="14"
        r="2.5"
        fill={color}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.3 }}
      />
    </svg>
  );
}
