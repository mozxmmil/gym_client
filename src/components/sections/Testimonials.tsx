"use client";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Alex Karpenko",
    role: "Member for 2 years",
    quote:
      "GYM24 completely changed my approach to fitness. The trainers are incredibly knowledgeable, and the 24/7 access fits my busy schedule perfectly.",
    rating: 5,
  },
  {
    name: "Sofia Melnik",
    role: "Member for 1 year",
    quote:
      "The equipment quality is outstanding — everything from free weights to machines is top-tier. I've never felt more motivated to train consistently.",
    rating: 5,
  },
  {
    name: "Dmitry Volkov",
    role: "Member for 6 months",
    quote:
      "My trainer helped me lose 15kg in 6 months with a personalized program. The community here is supportive and the atmosphere is always energizing.",
    rating: 5,
  },
];

function StarIcon({ filled, delay }: { filled: boolean; delay: number }) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "#F5F500" : "none"}
      stroke="#F5F500"
      strokeWidth="1.5"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: filled ? 1 : 0.8, rotate: 0 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      whileHover={{ scale: 1.3, rotate: 15 }}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </motion.svg>
  );
}

function QuoteIcon() {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5F500"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-30"
      initial={{ opacity: 0.2, scale: 0.8 }}
      whileInView={{ opacity: 0.5, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </motion.svg>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-28 lg:py-36 max-md:py-20 bg-[#0A0A0A] relative overflow-hidden"
      id="testimonials"
      ref={ref}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-[#F5F500]/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <SectionHeading
          label="What Members Say"
          title={
            <>
              Real <span className="text-[#F5F500]">Results</span>
            </>
          }
          subtitle="Hear from our community of athletes and fitness enthusiasts"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="group relative bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 32, rotateY: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                y: -8,
                borderColor: "#F5F500",
                boxShadow: "0 20px 40px rgba(245, 245, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              style={{ perspective: 1000 }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5F500]/0 via-[#F5F500]/0 to-[#F5F500]/0 group-hover:from-[#F5F500]/5 group-hover:via-[#F5F500]/3 group-hover:to-[#F5F500]/5 transition-all duration-700" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F5F500]/15 via-transparent to-[#F5F500]/15 blur-xl" />
              </div>

              {/* Quote icon with reveal */}
              <motion.div
                className="mb-4 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2 }}
              >
                <QuoteIcon />
              </motion.div>

              {/* Rating with stagger animation */}
              <motion.div
                className="flex gap-1 mb-5 relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.15 + 0.3 }}
              >
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon
                    key={j}
                    filled={j < t.rating}
                    delay={i * 0.15 + j * 0.1 + 0.4}
                  />
                ))}
              </motion.div>

              {/* Quote text with animated opacity */}
              <motion.p
                className="text-[#B3B3B3] text-sm leading-relaxed font-body flex-1 mb-6 relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.15 + 0.5 }}
                whileHover={{ color: "#CCCCCC" }}
              >
                &ldquo;{t.quote}&rdquo;
              </motion.p>

              {/* Author with border top animation */}
              <motion.div
                className="border-t border-[#2A2A2A] pt-4 relative z-10 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.15 + 0.6 }}
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-[#F5F500]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.7, duration: 0.5 }}
                />
                <motion.p
                  className="text-white font-semibold text-sm font-heading"
                  whileHover={{ color: "#F5F500" }}
                >
                  {t.name}
                </motion.p>
                <motion.p
                  className="text-[#808080] text-xs font-body mt-1"
                  whileHover={{ color: "#B3B3B3" }}
                >
                  {t.role}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <motion.div
          className="flex justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  activeTestimonial === i ? "#F5F500" : "#2A2A2A",
              }}
              animate={{
                scale: activeTestimonial === i ? 1.3 : 1,
                width: activeTestimonial === i ? 24 : 8,
              }}
              onClick={() => setActiveTestimonial(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
