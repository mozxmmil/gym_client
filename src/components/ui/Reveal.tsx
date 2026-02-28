"use client";
import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up") initial.y = 48;
  if (direction === "left") initial.x = -48;
  if (direction === "right") initial.x = 48;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
