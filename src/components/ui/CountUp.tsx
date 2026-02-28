"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

interface Props {
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function CountUp({
  from,
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated || !ref.current) return;
    setHasAnimated(true);

    const controls = animate(from, to, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate(value: number) {
        if (ref.current)
          ref.current.textContent =
            prefix + Math.round(value).toLocaleString() + suffix;
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, suffix, prefix, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {from}
      {suffix}
    </span>
  );
}
