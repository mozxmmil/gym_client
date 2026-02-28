"use client";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";

const footerLinks = [
  { label: "Advantages", href: "#advantages" },
  { label: "Membership", href: "#membership" },
  { label: "About us", href: "#about" },
  { label: "Trainers", href: "#trainers" },
];

/* ─── Social SVG Icons ─── */
function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4l11.733 16H20L8.267 4H4z" />
      <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
    </svg>
  );
}

const socialIcons = [
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <YoutubeIcon />, label: "YouTube" },
  { icon: <TwitterIcon />, label: "X / Twitter" },
];

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-16 bg-black relative overflow-hidden"
      style={{ borderTop: "1px solid #2A2A2A" }}
      id="contact"
    >
      {/* Clean solid background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#0A0A0A]"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <Reveal delay={0} className="md:col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-xl font-extrabold mb-4 font-heading text-white inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                GYM<span className="text-[#F5F500]">24</span>
              </motion.div>
              <p className="text-sm text-[#B3B3B3] leading-relaxed max-w-[320px] mb-2 font-body font-medium">
                Forge your legacy.
              </p>
            </motion.div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.08} className="md:col-span-5 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <h4 className="text-base font-bold text-white mb-5 font-heading">
                Quick Links
              </h4>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#B3B3B3] font-body hover:text-[#F5F500] transition-colors duration-200 relative inline-block group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-px bg-[#F5F500]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.12} className="md:col-span-7 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <h4 className="text-base font-bold text-white mb-5 font-heading">
                Contact
              </h4>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    text: "123 Fitness Avenue, Downtown District, City 10001",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    ),
                    text: "+1 (555) 123-4567",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    ),
                    text: "info@gym24.com",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    ),
                    text: "Open 24 hours, 7 days a week",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 text-sm text-[#B3B3B3] font-body group cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.span
                      className="text-[#F5F500] mt-0.5 shrink-0"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.icon}
                    </motion.span>
                    <motion.span className="group-hover:text-[#CCCCCC] transition-colors duration-200">
                      {item.text}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal>
          <motion.div
            className="pt-6 text-center text-xs text-[#808080] font-body"
            style={{ borderTop: "1px solid #2A2A2A" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              whileHover={{ color: "#F5F500" }}
              transition={{ duration: 0.2 }}
            >
              © {new Date().getFullYear()} GYM24. All Rights Reserved.
            </motion.span>
          </motion.div>
        </Reveal>
      </div>
    </footer>
  );
}
