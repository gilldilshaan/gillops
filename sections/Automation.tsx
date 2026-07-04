"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Zap, MapPin, Bot, Link2 } from "lucide-react";

const automations = [
  {
    icon: Phone,
    title: "AI Receptionist",
    description: "A human-like AI voice agent that answers calls, books appointments, and handles inquiries 24/7 without missing a single lead.",
    features: ["Natural voice conversations", "Appointment scheduling", "Call summarization", "CRM integration"],
    status: "Live",
  },
  {
    icon: Link2,
    title: "LinkedIn Outreach Automation",
    description: "Fully automated LinkedIn outreach system that connects with decision-makers, personalizes messages, and nurtures leads on autopilot.",
    features: ["Smart connection requests", "AI-personalized messaging", "Follow-up sequences", "Lead scoring & CRM sync"],
    status: "Live",
  },
  {
    icon: MapPin,
    title: "Google Maps Scraper + AI Lead Generator",
    description: "Scrape Google Maps businesses in any niche and location. AI enriches the data, finds email contacts, and auto-sends personalized outreach emails.",
    features: ["Location & niche targeting", "Contact enrichment", "AI email personalization", "Bulk email sending"],
    status: "Live",
  },
  {
    icon: Bot,
    title: "AI Chatbot for Websites",
    description: "Train an AI chatbot on your business data. It answers questions, captures leads, and books meetings while you sleep.",
    features: ["Custom knowledge base", "24/7 availability", "Lead capture forms", "Multi-platform chat widget"],
    status: "Live",
  },
];

export default function Automation() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -60px 0px" });

  return (
    <section className="relative bg-[#1B1918] py-28 md:py-36 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C8644E]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D98B4A]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headingRef}
          className="reveal-fade-up mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <Zap className="w-4 h-4 text-[#C8644E]" />
            <span className="text-sm text-[#9E9B93] tracking-wide font-medium">AI Systems We Have Built</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-white mb-6 leading-tight max-w-3xl">
            Automation systems that work while you sleep
          </h2>
          <p className="text-lg text-[#9E9B93] max-w-2xl leading-relaxed">
            Real AI automation tools built from scratch. These are not templates \u2014 they are production-ready systems running 24/7 for clients.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {automations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#C8644E]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(200,100,78,0.08)]"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#C8644E]/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#C8644E]" />
                    </div>
                    <span className="text-xs text-emerald-400/90 font-medium px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#C8644E] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#9E9B93] leading-relaxed mb-6 text-sm">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-[#9E9B93]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8644E] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#C8644E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8644E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
