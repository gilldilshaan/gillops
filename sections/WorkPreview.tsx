"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Gill Eye Hospital",
    category: "Healthcare / Ophthalmology",
    description: "Full website build for Dr. Kanwarpal Singh Gill's ophthalmic practice in Faridkot, Punjab.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    href: "https://gill-eye.vercel.app/",
  },
  {
    title: "Taj Sandhu Group",
    category: "Real Estate, Insurance & Logistics",
    description: "Four-division advisory group website with property search, quote flows, and MLS integration.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://taj-sandhu-group.vercel.app/",
  },
  {
    title: "SnipnSleek",
    category: "Beauty / Salon",
    description: "Multi-location salon website with branch-specific pages and location-aware booking.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://snip-n-sleek.vercel.app/",
  },
  {
    title: "Aercon Earth",
    category: "Environmental / Construction",
    description: "Premium website for an earthworks and environmental construction company.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://aercon-earth.vercel.app/",
  },
];

export default function WorkPreview() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -60px 0px" });

  return (
    <section className="relative bg-[#F0EDE7] py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headingRef}
          className="reveal-fade-up mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-[#1B1918] mb-4 leading-tight">
              Selected work
            </h2>
            <p className="text-lg text-[#6B6863] max-w-xl leading-relaxed">
              Real projects for real clients. Every site is built from scratch, tailored to their business.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B1918] text-white font-medium rounded-full hover:bg-[#2A2725] transition-all duration-300"
          >
            View all work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#E2DFD9]/60 
                hover:border-[#C8644E]/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.03] cursor-pointer block"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#9E9B93] font-mono uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#9E9B93] group-hover:text-[#C8644E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                <h3 className="font-heading text-xl font-bold text-[#1B1918] mb-3 group-hover:text-[#C8644E] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#6B6863] leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-[#F0EDE7] text-[#6B6863]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8644E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
