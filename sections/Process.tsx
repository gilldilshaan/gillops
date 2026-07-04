"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PhoneCall, FileText, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "45-minute call. We learn your business, stack, and goals.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Strategy",
    description: "Custom roadmap delivered within 48 hours of your call.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Build",
    description: "We build and test. You see progress every 3 days.",
    icon: Code,
  },
  {
    number: "04",
    title: "Grow",
    description: "Live in 2\u20133 weeks. Results tracked. We iterate forever.",
    icon: Rocket,
  },
];

export default function Process() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -60px 0px" });

  return (
    <section id="process" className="relative bg-[#F0EDE7] py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headingRef}
          className="reveal-fade-up mb-16 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-[#1B1918] mb-6 leading-tight">
            How we work
          </h2>
          <p className="text-lg text-[#6B6863] max-w-2xl mx-auto leading-relaxed">
            A simple, transparent process designed to get you results fast.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative text-center p-8 rounded-2xl bg-white border border-[#E2DFD9]/60 hover:border-[#C8644E]/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.03]"
              >
                <div className="w-16 h-16 rounded-full bg-[#C8644E]/8 flex items-center justify-center mx-auto mb-6 border border-[#C8644E]/15 group-hover:bg-[#C8644E]/12 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#C8644E]" />
                </div>
                <span className="text-sm text-[#7A7770] font-mono font-medium mb-2 block">
                  Step {step.number}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#1B1918] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B6863] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
