"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Kanwarpal Singh Gill",
    role: "Gill Eye Hospital",
    quote:
      "GILLOPS built a professional website that helped us attract patients from surrounding areas. SEO-structured and mobile-friendly — exactly what we needed."
  },
  {
    name: "Taj Sandhu",
    role: "Taj Sandhu Group",
    quote:
      "The website they built for our four divisions looks premium. Property search, quote flows, and multi-channel contact — all working seamlessly."
  },
  {
    name: "SnipnSleek Team",
    role: "SnipnSleek",
    quote:
      "Multi-location salon website with branch-specific pages and location-aware booking. Clean design, fast load times. Our clients love it."
  },
];

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#F9F6F1] py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-[#1B1918] mb-6 leading-tight">
            What our clients say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeCurve }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#E2DFD9]/60 p-8 md:p-10 hover:border-[#C8644E]/15 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-500 flex flex-col"
            >
              <div className="relative flex flex-col flex-1">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="mb-6">
                  <Quote size={24} className="text-[#E2DFD9] mb-3" />
                  <p className="text-[15px] text-[#6B6863] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C8644E]/10 flex items-center justify-center font-heading font-bold text-sm text-[#C8644E]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1B1918]">{t.name}</p>
                    <p className="text-xs text-[#9E9B93]">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
