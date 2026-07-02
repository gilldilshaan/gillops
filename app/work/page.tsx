"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Bot } from "lucide-react";
import Link from "next/link";

const websiteProjects = [
  {
    title: "Gill Eye Hospital",
    category: "Healthcare / Ophthalmology",
    location: "Faridkot, Punjab",
    description:
      "Full website build for Dr. Kanwarpal Singh Gill's ophthalmic practice — service pages (cataract, glaucoma, cornea, retina, pediatric), patient testimonials, community initiative section, appointment booking via call/WhatsApp, SEO-structured for local search.",
    scope: "Website Design, Development, SEO",
    launched: "Q1 2025",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    status: "Live",
    href: "https://gill-eye.vercel.app/",
  },
  {
    title: "Taj Sandhu Group",
    category: "Real Estate, Insurance & Logistics",
    location: "BC & Manitoba",
    description:
      "Four-division advisory group website with property search, pre-sale listings, insurance quote flows, mortgage calculator, market insights/blog, multi-channel contact. MLS/IDX integration in progress.",
    scope: "Website Design, Development, Automation Setup",
    launched: "Q1 2025",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    href: "https://taj-sandhu-group.vercel.app/",
  },
  {
    title: "SnipnSleek",
    category: "Beauty / Salon",
    location: "Multi-location",
    description:
      "Multi-location salon website with branch-specific pages, location-aware booking, and per-branch services.",
    scope: "Website Design, Development, Booking Integration",
    launched: "Q1 2025",
    tags: ["Next.js", "Tailwind CSS"],
    status: "Live",
    href: "https://snip-n-sleek.vercel.app/",
  },
  {
    title: "Aercon Earth",
    category: "Environmental / Construction",
    location: "Canada",
    description:
      "Premium website for an earthworks and environmental construction company focused on sustainable land development.",
    scope: "Website Design, Development, Branding",
    launched: "Q1 2025",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    href: "https://aercon-earth.vercel.app/",
  },
];

export default function WorkPage() {
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
            Real projects for real clients. Everything built from scratch, tailored to their business.
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
            className="flex items-center gap-2 px-6 py-2.5 bg-[#1B1918] text-white text-sm font-medium rounded-full transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            Websites
          </Link>
          <Link
            href="/work/ai-automation"
            className="flex items-center gap-2 px-6 py-2.5 text-[#6B6863] hover:text-[#1B1918] text-sm font-medium rounded-full hover:bg-white/50 transition-all duration-300"
          >
            <Bot className="w-4 h-4" />
            AI Automation
          </Link>
        </motion.div>

        {/* Websites section */}
        <div className="space-y-8">
          <h2 className="font-heading text-2xl font-bold text-[#1B1918] mb-8 flex items-center gap-3">
            <Globe className="w-6 h-6 text-[#C8644E]" />
            Websites We Have Built
          </h2>
          {websiteProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: easeCurve }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#E2DFD9]/60 hover:border-[#C8644E]/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.03] block"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#9E9B93] font-mono uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-green-50 text-green-700">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1B1918] group-hover:text-[#C8644E] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-[#9E9B93] font-mono tabular-nums flex-shrink-0">
                    {project.location}
                  </span>
                </div>

                <p className="text-[#6B6863] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Honest scope info - replacing fabricated metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-[#F9F6F1] border border-[#E2DFD9]/40">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#9E9B93] uppercase tracking-wider w-20 shrink-0">
                      Scope
                    </span>
                    <span className="text-sm text-[#1B1918]">{project.scope}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#9E9B93] uppercase tracking-wider w-20 shrink-0">
                      Launched
                    </span>
                    <span className="text-sm text-[#1B1918]">{project.launched}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-[#F0EDE7] text-[#6B6863]"
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="ml-auto">
                    <span className="inline-flex items-center gap-1.5 text-sm text-[#1B1918] font-medium group-hover:text-[#C8644E] transition-colors duration-300">
                      Visit site
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8644E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
