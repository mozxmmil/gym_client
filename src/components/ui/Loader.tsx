"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Logo */}
          <motion.div
            className="text-5xl font-extrabold text-white font-heading tracking-tight"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1.0] }}
          >
            GYM
            <motion.span
              className="text-[#F5F500]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              24
            </motion.span>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="w-32 h-[2px] bg-[#1A1A1A] rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-[#F5F500] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
