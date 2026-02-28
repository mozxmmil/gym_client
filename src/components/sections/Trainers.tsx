"use client";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const trainers = [
  {
    name: "Victoria Shurpik",
    specialty: "Strength & Conditioning",
    img: "/images/trainer1.png",
  },
  {
    name: "Elizabeth Lawrinenko",
    specialty: "Functional Training",
    img: "/images/trainer3.png",
  },
  {
    name: "Ivan Gladkikh",
    specialty: "Bodybuilding",
    img: "/images/trainer4.png",
  },
  {
    name: "Maria Masyak",
    specialty: "Yoga/Pilates",
    img: "/images/trainer5.png",
  },
];

/* ─── Social SVG Icons with animation ─── */
function InstagramIcon() {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scale: 0.8, opacity: 0.7 }}
      whileHover={{ scale: 1.2, opacity: 1, rotate: 15 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </motion.svg>
  );
}

function TwitterIcon() {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scale: 0.8, opacity: 0.7 }}
      whileHover={{ scale: 1.2, opacity: 1, rotate: -15 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <path d="M4 4l11.733 16H20L8.267 4H4z" />
      <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
    </motion.svg>
  );
}

function YoutubeIcon() {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scale: 0.8, opacity: 0.7 }}
      whileHover={{ scale: 1.2, opacity: 1, rotateY: 180 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </motion.svg>
  );
}

const socialIcons = [
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <TwitterIcon />, label: "X / Twitter" },
  { icon: <YoutubeIcon />, label: "YouTube" },
];

export default function Trainers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-28 lg:py-36 max-md:py-20 bg-black relative overflow-hidden"
      id="trainers"
    >
      {/* Background decorative gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#F5F500]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5F500]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <SectionHeading
          label="Our Team"
          title={
            <>
              Expert <span className="text-[#F5F500]">Trainers</span>
            </>
          }
          subtitle="Our certified professionals are here to guide your journey"
          className="text-center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              className="group relative rounded-2xl overflow-hidden flex flex-col cursor-pointer bg-transparent"
              initial={{ opacity: 0, y: 32, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              style={{ perspective: 1000 }}
            >
              {/* Image with zoom effect */}
              <div className="overflow-hidden relative">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={trainer.img}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />

                  {/* Hover glow border */}
                  <motion.div
                    className="absolute inset-0 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 30px rgba(245, 245, 0, 0.2)",
                    }}
                  />
                </div>
              </div>

              {/* Info section */}
              <div className="p-4 sm:p-5 text-center mt-auto relative z-20">
                <motion.h3
                  className="text-white font-semibold text-sm sm:text-base mb-1 font-heading"
                  whileHover={{ color: "#F5F500" }}
                  transition={{ duration: 0.2 }}
                >
                  {trainer.name}
                </motion.h3>
                <motion.p
                  className="text-[#F5F500] text-xs sm:text-sm mb-3 sm:mb-4 font-body"
                  whileHover={{ color: "#D4D400" }}
                >
                  {trainer.specialty}
                </motion.p>

                {/* Social icons with stagger animation */}
                <motion.div
                  className="flex justify-center gap-2 sm:gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.3 }}
                >
                  {socialIcons.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#808080] hover:text-[#F5F500] hover:border-[#F5F500] hover:bg-[rgba(245,245,0,0.08)] transition-all duration-300"
                      style={{ border: "1px solid #2A2A2A" }}
                      aria-label={`${trainer.name} ${social.label}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.06 + idx * 0.1 + 0.4,
                        type: "spring",
                      }}
                      whileHover={{
                        scale: 1.2,
                        y: -4,
                        backgroundColor: "rgba(245, 245, 0, 0.15)",
                        borderColor: "#F5F500",
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
