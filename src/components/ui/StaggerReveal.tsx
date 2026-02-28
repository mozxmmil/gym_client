"use client";
import { motion, useInView } from "motion/react";
import { useRef, ReactNode, Children } from "react";

interface Props {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export default function StaggerReveal({
  children,
  staggerDelay = 0.1,
  className = "",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.55,
            delay: i * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
