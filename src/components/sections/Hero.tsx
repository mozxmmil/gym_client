"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useRef, useEffect } from "react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import MotionButton from "@/components/ui/MotionButton";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    springConfig,
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black"
      id="hero"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#F5F500]/5 via-transparent to-transparent animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#F5F500]/3 to-transparent animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
      </div>

      {/* Parallax background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY, scale }}>
        <Image
          src="/images/hero.png"
          alt="GYM24 - Premium Fitness Center"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Enhanced gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F5F500]/30 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Text block with 3D tilt effect */}
      <motion.div
        className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full pt-24 sm:pt-20 min-h-screen flex flex-col items-center justify-center"
        style={{ opacity: textOpacity, y: textY, rotateX, rotateY }}
      >
        <div className="max-w-[800px] w-full flex flex-col items-center mx-auto">
          {/* Badge with glow effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#2A2A2A] mx-auto mb-8 bg-black/60 backdrop-blur-sm relative overflow-hidden group w-max"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#F5F500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 19h19a.5.5 0 01.5.5v1.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-1.5a.5.5 0 01.5-.5zM22 6c0-.55-.45-1-1-1s-1 .45-1 1c0 .2.06.39.16.55L17.5 10l-4.5-5.5a1 1 0 00-2 0L6.5 10 3.84 6.55A1 1 0 102 6c0 .55.45 1 1 1s1-.45 1-1zm-6 11V8L12 3 8 8v9h8z" />
            </svg>
            <span className="text-xs text-white font-bold tracking-widest uppercase font-body relative z-10 block text-center">
              PREMIUM
              <br />
              <span className="text-[10px] text-[#F5F500]">FITNESS CLUB</span>
            </span>
          </motion.div>

          {/* Heading with stagger reveal */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold text-white leading-[1] tracking-tight font-heading mb-10 text-center mx-auto max-w-[900px]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="block"
            >
              FORGE YOUR <span className="text-[#F5F500]">LEGACY</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="relative block mt-2"
            >
              <span className="relative z-10 text-white">AT GYM24</span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-3 bg-[#F5F500]/20 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              />
            </motion.span>
          </motion.h1>

          {/* Removed subtext as per design */}
          {/* CTAs with stagger animation */}
          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap max-sm:flex-col max-sm:items-stretch w-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 }}
              className="max-sm:w-full max-sm:justify-center"
            >
              <MagneticButton className="max-sm:w-full max-sm:justify-center relative overflow-hidden group bg-gradient-to-r from-[#D4D400] to-[#F5F500] text-black font-bold uppercase rounded-full px-8 py-3 w-50">
                <span className="relative z-10 flex items-center justify-center w-full">
                  START TRAINING
                </span>
                <motion.span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <span className="text-[#808080] text-xs tracking-widest uppercase font-body">
          Scroll to explore
        </span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-[#2A2A2A] flex items-start justify-center p-1"
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-1.5 h-3 bg-[#F5F500] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
