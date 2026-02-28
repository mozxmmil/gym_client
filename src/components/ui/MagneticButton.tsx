"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({ children, className = "" }: Props) {
  return (
    <motion.button
      className={`font-semibold px-8 py-3.5 rounded-full text-sm cursor-pointer inline-flex items-center gap-2 font-body min-h-[44px] ${className}`}
      style={{
        backgroundColor: "#F5F500",
        color: "#000000",
      }}
      whileHover={{ filter: "brightness(0.9)", scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
