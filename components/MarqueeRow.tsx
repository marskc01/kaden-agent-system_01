"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";

export function MarqueeRow({
  items,
  reverse = false,
  speed = 30
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-white/[0.025]">
      <motion.div
        className="flex min-w-max gap-3 py-3"
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {repeated.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-black/48 px-4 py-2 text-sm uppercase tracking-[0.24em] text-white/80"
          >
            <Circle className="h-2.5 w-2.5 fill-white/45 text-white/45" />
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
