"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const styles = {
  primary: "bg-[#F5F500] text-black border-none",
  secondary:
    "bg-transparent text-[#F5F500] border-[1.5px] border-solid border-[#F5F500]",
  ghost: "bg-transparent text-[#B3B3B3] border border-solid border-[#2A2A2A]",
};

const hovers = {
  primary: { filter: "brightness(0.9)", scale: 1.02 },
  secondary: { backgroundColor: "rgba(245,245,0,0.07)", scale: 1.02 },
  ghost: { borderColor: "#F5F500", color: "#F5F500", scale: 1.02 },
};

export default function MotionButton({
  variant = "primary",
  children,
  className = "",
  onClick,
}: Props) {
  return (
    <motion.button
      className={`font-semibold rounded-full px-7 py-3.5 text-sm inline-flex items-center gap-2 cursor-pointer font-body min-h-[44px] ${styles[variant]} ${className}`}
      whileHover={hovers[variant]}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
