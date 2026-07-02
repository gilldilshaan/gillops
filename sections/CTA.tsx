"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative bg-[#1B1918] py-28 md:py-36 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#C8644E]/8 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeCurve }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-white mb-6 leading-tight">
          Ready to grow your business?
        </h2>
        <p className="text-lg text-[#9E9B93] mb-10 max-w-xl mx-auto leading-relaxed">
          Let us discuss how GILLOPS can help you build systems that actually work.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#C8644E] text-white font-medium rounded-full hover:bg-[#B5543F] transition-all duration-300 hover:shadow-[0_0_50px_rgba(200,100,78,0.25)] active:scale-[0.98]"
          >
            Book a free call
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/25 transition-all duration-300 active:scale-[0.98]"
          >
            Explore services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
