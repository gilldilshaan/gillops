import dynamic from "next/dynamic";
import { homeMetadata } from "./metadata";
import { Metadata } from "next";

export const metadata: Metadata = homeMetadata;

const Hero = dynamic(() => import("@/sections/Hero"), { ssr: false });
const Marquee = dynamic(() => import("@/sections/Marquee"), { ssr: false });
const Services = dynamic(() => import("@/sections/Services"), { ssr: false });
const AutomationSection = dynamic(() => import("@/sections/Automation"), { ssr: false });
const WorkPreview = dynamic(() => import("@/sections/WorkPreview"), { ssr: false });
const Stats = dynamic(() => import("@/sections/Stats"), { ssr: false });
const Process = dynamic(() => import("@/sections/Process"), { ssr: false });
const Testimonials = dynamic(() => import("@/sections/Testimonials"), { ssr: false });
const FAQ = dynamic(() => import("@/sections/FAQ"), { ssr: false });
const CTA = dynamic(() => import("@/sections/CTA"), { ssr: false });

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
