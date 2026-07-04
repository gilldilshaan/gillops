"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Cpu, Globe, TrendingUp, Zap, Shield, BarChart3, Check } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Automation Systems",
    description: "End-to-end automation pipelines that qualify leads, update your CRM, and trigger follow-ups without human intervention.",
    features: ["Lead qualification workflows", "CRM sync (HubSpot, Notion, Airtable)", "Email & Slack notifications", "Custom AI logic & prompts", "24/7 automated operation"],
  },
  {
    icon: Globe,
    title: "SEO Websites",
    description: "Fast, modern websites engineered to rank. Built with Core Web Vitals and technical SEO in mind.",
    features: ["Technical SEO architecture", "On-page optimisation", "Core Web Vitals compliant", "Mobile-first responsive design", "Google Search Console hub setup"],
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    description: "Strategic guidance to turn traffic into revenue. We audit, plan, and execute growth systems.",
    features: ["Growth audit & roadmap", "Conversion rate optimisation", "Content strategy & planning", "Analytics & reporting setup", "Ongoing performance reviews"],
  },
  {
    icon: Zap,
    title: "AI Chatbots",
    description: "Custom AI chatbots trained on your business data to handle customer support, sales, and inquiries 24/7.",
    features: ["Custom knowledge base training", "Multi-platform integration", "Natural language understanding", "Lead capture & formatting", "Analytics & conversation insights"],
  },
  {
    icon: Shield,
    title: "Technical SEO Audits",
    description: "Comprehensive technical audits that identify and fix issues preventing your site from ranking.",
    features: ["Site architecture analysis", "Crawl error identification", "Page speed optimisation", "Mobile usability fixes", "Schema markup implementation"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights that help you understand your audience and make better business decisions.",
    features: ["Custom dashboard setup", "Monthly performance reports", "Conversion tracking", "Competitor analysis", "ROI measurement"],
  },
];

export default function Services() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -60px 0px" });

  return (
    <section className="relative bg-[#F9F6F1] py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headingRef}
          className="reveal-fade-up mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-[#1B1918] mb-7 leading-tight">
            What we do
          </h2>
          <p className="text-lg text-[#6B6863] max-w-2xl leading-relaxed">
            Everything you need to automate, optimise, and grow your business.
            Each service is designed to work together as a complete growth engine.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-white border border-[#E2DFD9]/60 
                  hover:border-[#C8644E]/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.03]"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#C8644E]/8 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#C8644E]" />
                    </div>
                    <span className="text-sm text-[#9E9B93] font-mono tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#1B1918] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#6B6863] leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-[#6B6863]">
                        <Check className="w-4 h-4 text-[#C8644E] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
