"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Advantages", href: "#advantages" },
  { label: "Membership", href: "#membership" },
  { label: "About", href: "#about" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.95)"],
  );
  const borderOp = useTransform(scrollY, [0, 80], [0, 1]);
  const backdropBlur = useTransform(
    scrollY,
    [0, 80],
    ["blur(0px)", "blur(16px)"],
  );
  const logoScale = useTransform(scrollY, [0, 80], [1.1, 1]);
  const navShadow = useTransform(
    scrollY,
    [0, 80],
    ["shadow-none", "shadow-lg"],
  );

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: bg,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
          boxShadow: navShadow,
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Border fades in on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent"
          style={{ opacity: borderOp }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full h-[72px] flex items-center justify-between">
          {/* Logo with scale animation */}
          <motion.a
            href="#"
            className="text-white font-extrabold text-xl font-heading relative inline-block"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">GYM</span>
            <motion.span
              className="relative z-10"
              whileHover={{ color: "#D4D400" }}
              transition={{ duration: 0.2 }}
            >
              24
            </motion.span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F5F500]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>

          {/* Nav links with animated underline */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <a
                  href={link.href}
                  className="text-[#B3B3B3] text-sm font-medium font-body relative py-2 transition-colors duration-200"
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span
                    className={`transition-colors duration-200 ${hoveredLink === link.label ? "text-[#F5F500]" : ""}`}
                  >
                    {link.label}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5F500]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredLink === link.label ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA with glow effect */}
          <motion.a
            href="#membership"
            className="font-semibold px-6 py-2.5 rounded-full text-sm font-body hidden sm:inline-flex min-h-[44px] items-center transition-all duration-200 relative overflow-hidden group"
            style={{ backgroundColor: "#F5F500", color: "#000000" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Join Now</span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#D4D400] to-[#F5F500] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ transform: "scale(0.8)" }}
            />
          </motion.a>

          {/* Mobile hamburger with animated icon */}
          <motion.button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50 relative"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block w-5 h-[2px] bg-white rounded-full"
                initial={false}
                animate={
                  mobileOpen
                    ? i === 0
                      ? { rotate: 45, translateY: 7 }
                      : i === 1
                        ? { opacity: 0, width: 0 }
                        : { rotate: -45, translateY: -7 }
                    : i === 0
                      ? { rotate: 0, translateY: 0 }
                      : i === 1
                        ? { opacity: 1, width: 20 }
                        : { rotate: 0, translateY: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu with stagger animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="absolute top-6 right-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white hover:text-[#F5F500] transition-colors"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-white text-2xl font-semibold font-heading relative py-2 overflow-hidden group"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.08, duration: 0.25 }}
                onClick={() => setMobileOpen(false)}
                whileHover={{ x: 10 }}
              >
                <span className="relative z-10 transition-colors duration-200 group-hover:text-[#F5F500]">
                  {link.label}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5F500]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            <motion.a
              href="#membership"
              className="font-semibold px-8 py-3.5 rounded-full text-base font-body mt-4 min-h-[44px] inline-flex items-center relative overflow-hidden group"
              style={{ backgroundColor: "#F5F500", color: "#000000" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: navLinks.length * 0.08 + 0.1 }}
              onClick={() => setMobileOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Join Now</span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-[#D4D400] to-[#F5F500] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
