"use client";
import { motion, useInView, useAnimation } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import MotionButton from "@/components/ui/MotionButton";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      className="py-28 lg:py-36 max-md:py-20 bg-[#0A0A0A] relative overflow-hidden"
      id="about"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -left-32 top-1/4 w-64 h-64 bg-[#F5F500]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 w-64 h-64 bg-[#F5F500]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <SectionHeading
          title={
            <>
              ABOUT <span className="text-[#F5F500]">US</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
          {/* Left — text + stats */}
          <div>
            <Reveal delay={0}>
              <motion.p
                className="text-base text-[#B3B3B3] leading-relaxed mb-10 font-body max-w-[600px] mx-auto text-center"
                whileHover={{ color: "#CCCCCC" }}
              >
                GYM24 is a premium fitness destination dedicated to helping you
                achieve your goals. We offer world-class facilities, expert
                trainers, and a supportive community.
              </motion.p>
            </Reveal>

            {/* Stats with animated counters */}
            <Reveal delay={0.15}>
              <motion.div
                className="grid grid-cols-3 gap-6 mb-10"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                initial="hidden"
                animate={controls}
              >
                {[
                  { value: 5000, suffix: "+", label: "Active Members" },
                  { value: 50, suffix: "+", label: "Certified Trainers" },
                ].map((stat, i) => (
                  <motion.div
                    className="text-center relative group cursor-default"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <motion.div
                      className="text-3xl sm:text-[42px] font-extrabold text-white font-heading leading-none mb-2"
                      whileHover={{ color: "#F5F500" }}
                      transition={{ duration: 0.2 }}
                    >
                      <CountUp from={0} to={stat.value} suffix={stat.suffix} />
                    </motion.div>
                    <motion.p
                      className="text-[#808080] text-xs sm:text-sm font-body font-medium uppercase tracking-[1px]"
                      whileHover={{ color: "#B3B3B3" }}
                    >
                      {stat.label}
                    </motion.p>
                    {i < 1 && (
                      <motion.div
                        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-[#2A2A2A] group-hover:bg-[#F5F500]/30 transition-colors duration-300"
                        layoutId={`divider-${i}`}
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-center"
              >
                <MotionButton
                  variant="primary"
                  className="max-sm:w-full max-sm:justify-center relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Free Trial →</span>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-[#D4D400] to-[#F5F500] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </MotionButton>
              </motion.div>
            </Reveal>
          </div>

          {/* Right — featured image with slider UI */}
          <Reveal delay={0.15} direction="right">
            <motion.div
              className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/gym1.png"
                alt="GYM24 training area"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />

              {/* Slider Controls Visual */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between px-2 items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-[#F5F500] hover:text-black cursor-pointer pointer-events-auto transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-[#F5F500] hover:text-black cursor-pointer pointer-events-auto transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F5F500]"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
