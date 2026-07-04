import { Metadata } from "next";
import Link from "next/link";
import { aiAutomationMetadata } from "@/app/metadata";

export const metadata: Metadata = aiAutomationMetadata;

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
  return (
    <section className="relative bg-[#F9F6F1] min-h-screen pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1918] mb-6 leading-tight">
            AI Automation Systems That Convert Leads Faster
          </h1>
          <p className="text-lg text-[#4A453F] max-w-2xl leading-relaxed">
            Real AI automation tools built from scratch. These are not templates — they are production-ready systems running 24/7 to capture, qualify, and convert leads for your business.
          </p>
        </div>

        {/* Tab-style nav */}
        <div className="flex items-center gap-2 mb-16 p-1.5 bg-[#F0EDE7] rounded-full w-fit">
          <Link
            href="/work"
            className="flex items-center gap-2 px-6 py-2.5 text-[#4A453F] hover:text-[#1B1918] text-sm font-medium rounded-full hover:bg-white/50 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
            Websites
          </Link>
          <Link
            href="/work/ai-automation"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#1B1918] text-white text-sm font-medium rounded-full transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2M5 17a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2" /></svg>
            AI Automation
          </Link>
        </div>

        {/* AI Automation section */}
        <div className="space-y-8">
          <h2 className="font-heading text-2xl font-bold text-[#1B1918] mb-8 flex items-center gap-3">
            <svg className="w-6 h-6 text-[#C8644E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            AI Automation Systems
          </h2>
          {aiProjects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#E2DFD9]/60 hover:border-[#C8644E]/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.03]"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#4A453F] font-mono uppercase tracking-wider">
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

                <p className="text-[#4A453F] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-[#F9F6F1] border border-[#E2DFD9]/40">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-heading text-lg font-bold text-[#C8644E]">{value}</div>
                      <div className="text-xs text-[#4A453F] uppercase tracking-wider">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-[#4A453F]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8644E] flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#F0EDE7] text-[#4A453F]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8644E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-[#1B1918] text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover how our AI automation systems can handle your lead generation, follow-ups, and client intake 24/7.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8644E] text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Book Your Free AI Systems Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
