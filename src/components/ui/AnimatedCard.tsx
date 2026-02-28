"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  index?: number;
  className?: string;
}

export default function AnimatedCard({
  children,
  index = 0,
  className = "",
}: Props) {
  return (
    <motion.div
      className={`bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -4,
        borderColor: "#F5F500",
        boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
        transition: { duration: 0.25 },
      }}
    >
      {children}
    </motion.div>
  );
}
