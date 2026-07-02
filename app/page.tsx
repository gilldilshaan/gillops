import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";
import Services from "@/sections/Services";
import Automation from "@/sections/Automation";
import WorkPreview from "@/sections/WorkPreview";
import Stats from "@/sections/Stats";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Automation />
      <WorkPreview />
      <Stats />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
