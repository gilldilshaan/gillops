"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const marqueeItems = [
  "AI-Powered Automation",
  "SEO That Compounds",
  "24/7 AI Systems",
  "3x Organic Traffic",
  "Fast Delivery",
  "Real Results",
  "Global Clients",
  "Growth-Focused",
];

function MarqueeTrack() {
  return (
    <>
      {marqueeItems.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-5 px-6 shrink-0 text-sm font-medium tracking-wide text-[#9E9B93]"
        >
          {item}
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8644E] shrink-0" />
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      aria-hidden="true"
      className="border-y border-[#E2DFD9]/40 bg-[#F0EDE7] overflow-hidden py-5 relative"
    >
      <div
        ref={ref}
        className="reveal-fade flex whitespace-nowrap"
      >
        <div className="animate-marquee flex">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
