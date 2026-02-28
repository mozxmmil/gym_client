"use client";
import { motion } from "motion/react";

export default function AmbientGlow() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Large slow-drifting orb — bottom left */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(250,255,0,0.06) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 40, 0, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Smaller sharper orb — upper right */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(250,255,0,0.05) 0%, transparent 70%)",
          top: "-5%",
          right: "5%",
        }}
        animate={{ x: [0, -20, 10, 0], y: [0, 20, -10, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
