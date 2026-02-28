"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What are GYM24's operating hours?",
    a: "GYM24 is open 24 hours a day, 7 days a week, including all public holidays. You can train whenever it fits your schedule.",
  },
  {
    q: "Can I try the gym before committing to a plan?",
    a: "Absolutely! We offer a free trial visit that includes full access to all zones, locker rooms, and a complimentary trainer consultation to help you get started.",
  },
  {
    q: "What equipment is available?",
    a: "We have over 200 pieces of professional equipment from world-leading manufacturers, spread across 3 fitness zones: free weights, machines, and functional training areas.",
  },
  {
    q: "Do you offer personal training programs?",
    a: "Yes, our certified trainers create individualized programs tailored to your goals — whether it's weight loss, muscle gain, strength building, or overall well-being.",
  },
  {
    q: "Is parking available?",
    a: "Yes, we provide free parking for all members with monthly or 6-month passes. Our parking area is monitored and well-lit for your convenience.",
  },
  {
    q: "Can I switch plans after signing up?",
    a: "Of course! You can upgrade or change your membership plan at any time. Visit our front desk or contact us, and we'll help you find the best option.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
    >
      <path d="m6 9 6 6 6-6" />
    </motion.svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-28 lg:py-36 max-md:py-20 bg-black relative overflow-hidden"
      id="faq"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5F500]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <SectionHeading
          label="Got Questions?"
          title={
            <>
              Frequently <span className="text-[#F5F500]">Asked</span>
            </>
          }
          subtitle="Everything you need to know before getting started"
        />

        <div className="max-w-[768px] mx-auto space-y-3 mt-12">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className="group border border-[#2A2A2A] rounded-2xl overflow-hidden hover:border-[#F5F500]/50 transition-all duration-300 cursor-pointer relative"
                style={{
                  backgroundColor: isOpen ? "#111111" : "transparent",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                whileHover={{
                  borderColor: "rgba(245, 245, 0, 0.3)",
                  boxShadow: isOpen
                    ? "0 8px 24px rgba(245, 245, 0, 0.08)"
                    : "none",
                }}
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F500]/0 via-[#F5F500]/3 to-[#F5F500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <motion.div
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 relative z-10"
                  whileTap={{ scale: 0.995 }}
                >
                  <motion.span
                    className="text-white text-sm sm:text-base font-semibold font-heading"
                    animate={{ color: isOpen ? "#F5F500" : "#FFFFFF" }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.q}
                  </motion.span>
                  <motion.div
                    className="text-[#808080] group-hover:text-[#F5F500] transition-colors duration-200"
                    animate={{
                      color: isOpen ? "#F5F500" : "#808080",
                      scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronIcon open={isOpen} />
                  </motion.div>
                </motion.div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden relative z-10"
                    >
                      <motion.p
                        className="px-6 pb-5 text-sm text-[#B3B3B3] leading-relaxed font-body text-left"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {faq.a}
                      </motion.p>
                      {/* Bottom glow line */}
                      <motion.div
                        className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#F5F500]/50 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
