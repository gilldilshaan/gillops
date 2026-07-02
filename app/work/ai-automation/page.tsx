"use client";

import { motion } from "framer-motion";
import { Globe, Bot } from "lucide-react";
import Link from "next/link";

const aiProjects = [
  {
    title: "AI Receptionist",
    category: "Voice AI / Automation",
    description: "A human-like AI voice agent that answers calls, books appointments, and handles inquiries 24/7 without missing a single lead. Trained on business data with natural voice conversations and CRM integration.",
    features: ["Natural voice conversations", "Appointment scheduling", "Call summarization", "CRM integration"],
    tags: ["OpenAI", "Twilio", "Python", "CRM Integration"],
    status: "Live",
    metrics: { callsHandled: "500+", responseTime: "<2s", availability: "24/7" },
  },
  {
    title: "LinkedIn Outreach Automation",
    category: "Social Media / Lead Gen",
    description: "Fully automated LinkedIn outreach system that connects with decision-makers, personalizes messages using AI, and nurtures leads on autopilot. Smart connection requests with follow-up sequences.",
    features: ["Smart connection requests", "AI-personalized messaging", "Follow-up sequences", "Lead scoring & CRM sync"],
    tags: ["Python", "Selenium", "OpenAI", "LinkedIn API"],
    status: "Live",
    metrics: { connections: "2,000+", responseRate: "35%", leadsGenerated: "150+" },
  },
  {
    title: "Google Maps Scraper + AI Lead Generator",
    category: "Data / Email Automation",
    description: "Scrape Google Maps businesses in any niche and location. AI enriches the data, finds email contacts, and auto-sends personalized outreach emails at scale.",
    features: ["Location & niche targeting", "Contact enrichment", "AI email personalization", "Bulk email sending"],
    tags: ["Python", "Scrapy", "OpenAI", "Email Automation"],
    status: "Live",
    metrics: { leadsDay: "500+", accuracy: "92%", openRate: "45%" },
  },
  {
    title: "AI Chatbot for Websites",
    category: "Conversational AI",
    description: "Train an AI chatbot on your business data. It answers questions, captures leads, and books meetings while you sleep. Custom knowledge base with multi-platform chat widget.",
    features: ["Custom knowledge base", "24/7 availability", "Lead capture forms", "Multi-platform chat widget"],
    tags: ["Next.js", "OpenAI", "Vector DB", "WebSocket"],
    status: "Live",
    metrics: { chatsDay: "1,000+", resolution: "85%", satisfaction: "4.8/5" },
  },
];

export default function AIAutomationPage() {
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative bg-[#F9F6F1] min-h-screen pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="mb-16"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1918] mb-6 leading-tight">
            Our Work
          </h1>
          <p className="text-lg text-[#6B6863] max-w-2xl leading-relaxed">
            Real AI automation tools built from scratch. These are not templates — they are production-ready systems running 24/7.
          </p>
        </motion.div>

        {/* Tab-style nav */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeCurve }}
          className="flex items-center gap-2 mb-16 p-1.5 bg-[#F0EDE7] rounded-full w-fit"
        >
          <Link
            href="/work"
            className="flex items-center gap-2 px-6 py-2.5 text-[#6B6863] hover:text-[#1B1918] text-sm font-medium rounded-full hover:bg-white/50 transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            Websites
          </Link>
          <Link
            href="/work/ai-automation"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#1B1918] text-white text-sm font-medium rounded-full transition-all duration-300"
          >
            <Bot className="w-4 h-4" />
            AI Automation
          </Link>
        </motion.div>

        {/* AI Automation section */}
        <div className="space-y-8">
          <h2 className="font-heading text-2xl font-bold text-[#1B1918] mb-8 flex items-center gap-3">
            <Bot className="w-6 h-6 text-[#C8644E]" />
            AI Automation Systems
          </h2>
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: easeCurve }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#E2DFD9]/60 hover:border-[#C8644E]/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.03]"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#9E9B93] font-mono uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1B1918] group-hover:text-[#C8644E] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#6B6863] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-[#F9F6F1] border border-[#E2DFD9]/40">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-heading text-lg font-bold text-[#C8644E]">{value}</div>
                      <div className="text-xs text-[#9E9B93] uppercase tracking-wider">
                        {key === "callsHandled" ? "Calls handled" : 
                         key === "responseTime" ? "Response time" : 
                         key === "availability" ? "Availability" :
                         key === "connections" ? "Connections" :
                         key === "responseRate" ? "Response rate" :
                         key === "leadsGenerated" ? "Leads" :
                         key === "leadsDay" ? "Leads/day" :
                         key === "accuracy" ? "Accuracy" :
                         key === "openRate" ? "Open rate" :
                         key === "chatsDay" ? "Chats/day" :
                         key === "resolution" ? "Resolution" : "Satisfaction"}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-[#1B1918] mb-3 uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-[#6B6863]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8644E] flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#F0EDE7] text-[#6B6863]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8644E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
