"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "10x", label: "Workflow speed increase" },
  { value: "3x", label: "Organic traffic growth" },
  { value: "48hrs", label: "Average delivery time" },
  { value: "30+", label: "Businesses served" },
];

export default function Stats() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="stats" className="relative bg-[#1B1918] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C8644E]/5 blur-[120px] pointer-events-none" />

      <div
        ref={ref}
        className="reveal-stagger max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group text-center"
          >
            <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#C8644E] block mb-2">
              {stat.value}
            </span>
            <span className="text-sm text-[#9E9B93] font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
