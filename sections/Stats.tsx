"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10x", label: "Workflow speed increase" },
  { value: "3x", label: "Organic traffic growth" },
  { value: "48hrs", label: "Average delivery time" },
  { value: "30+", label: "Businesses served" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[#1B1918] py-24 md:py-32 px-6 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C8644E]/5 blur-[120px] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={statItem}
            className="group text-center"
          >
            <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#C8644E] block mb-2">
              {stat.value}
            </span>
            <span className="text-sm text-[#9E9B93] font-medium">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
