"use client";
import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface Props {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  className = "",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`text-center mb-16 ${className}`}>
      {label && (
        <motion.p
          className="text-xs text-[#808080] uppercase tracking-[3px] mb-3 font-body"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-white font-heading tracking-tight leading-[1.2]"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-[#B3B3B3] mt-4 max-w-[560px] mx-auto text-base leading-relaxed font-body"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
