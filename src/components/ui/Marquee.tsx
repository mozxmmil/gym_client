"use client";
import { motion } from "motion/react";

const items = ["STRENGTH", "ENDURANCE", "POWER", "DISCIPLINE"];

export default function Marquee() {
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y-[3px] border-[#F5F500]/40 py-4 bg-black">
      <motion.div
        className="flex gap-8 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-xl md:text-2xl font-black tracking-widest text-[#F5F500] uppercase font-heading select-none flex items-center"
          >
            {item}
            <span className="text-[#F5F500] mx-8 font-black text-2xl">+</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
