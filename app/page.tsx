import dynamic from "next/dynamic";
import { homeMetadata } from "./metadata";
import { Metadata } from "next";

export const metadata: Metadata = homeMetadata;

const Hero = dynamic(() => import("@/sections/Hero"), {
  ssr: false,
  loading: () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8644E]/20 bg-[#C8644E]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8644E]" />
            <span className="text-sm text-[#9E9B93] font-medium uppercase">AI, Automation & SEO</span>
          </div>
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8 text-white">
          <span className="block">We build systems</span>
          <span className="block text-[#C8644E]">that grow your</span>
          <span className="block">business.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#9E9B93] max-w-[550px] mx-auto leading-relaxed mb-12">
          Websites, AI automation, and SEO systems for businesses that need
          more than a static online presence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 invisible">
          <div className="px-8 py-4 bg-[#C8644E] rounded-full" />
          <div className="px-8 py-4 border border-white/15 rounded-full" />
        </div>
      </div>
    </section>
  ),
});

const Marquee = dynamic(() => import("@/sections/Marquee"));
const Services = dynamic(() => import("@/sections/Services"));
const AutomationSection = dynamic(() => import("@/sections/Automation"));
const WorkPreview = dynamic(() => import("@/sections/WorkPreview"));
const Stats = dynamic(() => import("@/sections/Stats"));
const Process = dynamic(() => import("@/sections/Process"));
const Testimonials = dynamic(() => import("@/sections/Testimonials"));
const FAQ = dynamic(() => import("@/sections/FAQ"));
const CTA = dynamic(() => import("@/sections/CTA"));

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <AutomationSection />
      <WorkPreview />
      <Stats />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
