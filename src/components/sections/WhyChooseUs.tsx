"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

/* ─── SVG Icon Components (Animated, Neon Yellow) ─── */
function AreaIcon({ animated }: { animated?: boolean }) {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5F500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ rotate: -10 }}
      whileInView={{ rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <motion.path
        d="M3 9h18M9 3v18"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
    </motion.svg>
  );
}

function EquipmentIcon() {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5F500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.circle
        cx="5"
        cy="5"
        r="1.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.3 }}
      />
      <motion.circle
        cx="19"
        cy="5"
        r="1.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.3 }}
      />
      <motion.circle
        cx="5"
        cy="19"
        r="1.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.3 }}
      />
      <motion.circle
        cx="19"
        cy="19"
        r="1.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
      />
      <motion.path
        d="M5 8v8M19 8v8M8 6.5h8M8 17.5h8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />
    </motion.svg>
  );
}

function ZonesIcon() {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5F500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ rotateY: 180 }}
      whileInView={{ rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.path
        d="M12 2L2 7l10 5 10-5-10-5Z"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <motion.path
        d="M2 17l10 5 10-5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      <motion.path
        d="M2 12l10 5 10-5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />
    </motion.svg>
  );
}

function ClockIcon() {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5F500"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <motion.path
        d="M12 6v6l4 2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
    </motion.svg>
  );
}

const reasons = [
  {
    icon: <AreaIcon />,
    title: "15000 sq.m.",
    desc: "Rest training space with specialized zones.",
  },
  {
    icon: <EquipmentIcon />,
    title: "More than 200 equipment",
    desc: "Top-tier machines from leading brands.",
  },
  {
    icon: <ZonesIcon />,
    title: "4 fitness zones",
    desc: "Cardio, functional, cycle, and combat zones.",
  },
  {
    icon: <ClockIcon />,
    title: "Round-the-clock operation",
    desc: "Open 24/7, every day of the year.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-28 lg:py-36 max-md:py-20 bg-[#0A0A0A] relative overflow-hidden"
      id="advantages"
      ref={ref}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-[#F5F500]/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#F5F500]/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <SectionHeading
          label="Why GYM24"
          title={
            <>
              Reasons to <span className="text-[#F5F500]">Join</span>
            </>
          }
          subtitle="Everything you need for a perfect workout experience"
          className="text-center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start mt-16">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="group relative p-8 flex flex-col items-center text-center gap-6 h-full overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="shrink-0 w-[52px] h-[52px] flex items-center justify-center relative z-10"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
              >
                {r.icon}
              </motion.div>
              <div className="flex-1 min-w-0 relative z-10">
                <motion.h3
                  className="text-lg font-semibold text-white mb-2 font-heading"
                  whileHover={{ color: "#F5F500" }}
                  transition={{ duration: 0.2 }}
                >
                  {r.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-[#B3B3B3] leading-relaxed font-body"
                  whileHover={{ color: "#CCCCCC" }}
                  transition={{ duration: 0.2 }}
                >
                  {r.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
