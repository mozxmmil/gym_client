"use client";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useRef, useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Plan {
  name: string;
  price: number;
  period: string;
  features: string[];
  featured: boolean;
}

const plans: Plan[] = [
  {
    name: "Pass 'Trial'",
    price: 0,
    period: "",
    features: ["Access from 8:00 to 14:00", "Trainer introduction"],
    featured: false,
  },
  {
    name: "Pass 'Easy Start'",
    price: 119,
    period: "",
    features: [
      "24/7 Access",
      "Individual Program",
      "VTRAINER App Access",
      "Trainer Support",
    ],
    featured: true,
  },
  {
    name: "Pass 'Free Time'",
    price: 49,
    period: "",
    features: ["Access from 14:00 to 16:00", "Without suspension"],
    featured: false,
  },
];

function AnimatedPrice({
  value,
  currency = "$",
}: {
  value: number;
  currency?: string;
}) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView || value === 0) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span
      ref={countRef}
      className="text-[40px] font-bold text-white font-heading leading-none"
    >
      {currency}
      {displayValue}
    </span>
  );
}

export default function Membership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-28 lg:py-36 max-md:py-20 bg-black relative overflow-hidden"
      id="membership"
      ref={ref}
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5F500]/5 rounded-full blur-3xl"
          initial={{ opacity: 0.3, scale: 0.8 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true }}
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
          label="Choose Your Plan"
          title={
            <>
              Gym <span className="text-[#F5F500]">Membership</span>
            </>
          }
          subtitle="Find the perfect plan for your fitness goals"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`group relative rounded-2xl p-8 border transition-all duration-300 flex flex-col cursor-pointer overflow-hidden ${
                plan.featured
                  ? "border-[#F5F500] bg-[#141400]"
                  : "border-[#2A2A2A] bg-[#111111] hover:border-[#F5F500]"
              }`}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
              }}
              whileHover={{
                y: -8,
                boxShadow: plan.featured
                  ? "0 20px 40px rgba(245, 245, 0, 0.15)"
                  : "0 20px 40px rgba(245, 245, 0, 0.08)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated gradient border on hover */}
              {!plan.featured && (
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#F5F500]/20 via-transparent to-transparent" />
                </div>
              )}

              {/* Glow effect for featured card */}
              {plan.featured && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#F5F500]/10 via-transparent to-transparent"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* Most Popular badge with pulse */}
              {plan.featured && (
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-5 py-1 rounded-full tracking-widest uppercase font-body whitespace-nowrap z-20 relative"
                  style={{ backgroundColor: "#F5F500", color: "#000000" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.08 + 0.3, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span
                    className="absolute -inset-1 bg-[#F5F500]/30 rounded-full blur-sm -z-10"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Most Popular
                </motion.div>
              )}

              {/* Plan name */}
              <motion.p
                className="text-xs text-[#808080] uppercase tracking-widest mb-3 font-body relative z-10"
                whileHover={{ color: "#F5F500" }}
                transition={{ duration: 0.2 }}
              >
                {plan.name}
              </motion.p>

              {/* Price with counter animation */}
              <div className="flex items-baseline gap-1 mb-5 relative z-10">
                <motion.span
                  className="text-[#F5F500] text-lg font-semibold"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  $
                </motion.span>
                <AnimatedPrice value={plan.price} />
                {plan.period && (
                  <motion.span
                    className="text-sm text-[#808080] font-normal ml-1"
                    whileHover={{ color: "#B3B3B3" }}
                  >
                    {plan.period}
                  </motion.span>
                )}
              </div>

              {/* Features with stagger animation */}
              <div className="border-t border-[#2A2A2A] mt-5 pt-5 space-y-3 flex-1 relative z-10">
                {plan.features.map((feat, idx) => (
                  <motion.div
                    key={feat}
                    className="flex items-center gap-3 text-sm text-[#B3B3B3] font-body"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.08 + idx * 0.05 + 0.3 }}
                    whileHover={{
                      x: 4,
                      color: "#FFFFFF",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.span
                      className="text-[#F5F500] text-xs shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] border border-[#F5F500]/30 bg-[#F5F500]/10"
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: "#F5F500",
                        color: "#000000",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      ✓
                    </motion.span>
                    {feat}
                  </motion.div>
                ))}
              </div>

              {/* CTA with glow effect */}
              <motion.button
                className="w-[80%] max-w-[200px] mx-auto mt-6 py-3 rounded-full font-bold text-black cursor-pointer font-body transition-all duration-200 relative overflow-hidden z-10 block"
                style={{
                  backgroundColor: "#F5F500",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Buy</span>
                {plan.featured && (
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-[#D4D400] to-[#F5F500] opacity-0 hover:opacity-100 transition-opacity duration-300" />
                )}
                {!plan.featured && (
                  <motion.div className="absolute inset-0 bg-[#F5F500]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
