"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-28 lg:py-36 max-md:py-20 bg-[#0A0A0A] overflow-hidden"
      ref={ref}
    >
      {/* Animated background with glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F5F500]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full text-center">
        <motion.p
          className="text-xs text-[#808080] uppercase tracking-[3px] mb-4 font-body"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          Ready to Transform?
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-[36px] lg:text-[40px] font-extrabold text-white font-heading tracking-tight leading-[1.2] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Start Your{" "}
            <span className="text-[#F5F500] relative inline-block">
              Fitness Journey
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-2 bg-[#F5F500]/20 -z-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              />
            </span>
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Today
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-[#B3B3B3] text-base sm:text-lg max-w-[520px] mx-auto mb-10 font-body leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          Join 500+ members who have already transformed their lives. Get your
          free trial session with a personal trainer.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap max-sm:flex-col max-sm:items-stretch"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.a
            href="#membership"
            className="font-semibold px-8 py-3.5 rounded-full text-sm inline-flex items-center justify-center gap-2 cursor-pointer font-body min-h-[44px] hover:brightness-90 transition-all duration-200 max-sm:w-full relative overflow-hidden group"
            style={{ backgroundColor: "#F5F500", color: "#000000" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="relative z-10">Get Started Free →</span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#D4D400] to-[#F5F500] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div className="absolute -inset-2 bg-[#F5F500]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.a>

          <motion.a
            href="#contact"
            className="font-semibold px-8 py-3.5 rounded-full text-sm inline-flex items-center justify-center gap-2 cursor-pointer font-body min-h-[44px] hover:bg-[rgba(245,245,0,0.07)] transition-all duration-200 max-sm:w-full relative overflow-hidden group"
            style={{
              backgroundColor: "transparent",
              color: "#F5F500",
              border: "1.5px solid #F5F500",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <span className="relative z-10">Contact Us</span>
            <motion.div className="absolute inset-0 bg-[#F5F500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              className="absolute inset-0 border-2 border-[#F5F500]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"
              style={{ animationDuration: "2s" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
