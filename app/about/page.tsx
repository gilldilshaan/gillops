"use client";

import { motion } from "framer-motion";
import { Target, Users, Rocket, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results First",
    description: "We measure success by the tangible outcomes we deliver for our clients, not by vanity metrics.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work as an extension of your team, not as an external vendor. Your success is our success.",
  },
  {
    icon: Rocket,
    title: "Move Fast",
    description: "Speed matters. We ship quickly without cutting corners, so you start seeing results sooner.",
  },
  {
    icon: Award,
    title: "Attention to Detail",
    description: "Every interaction, every animation, every line of code gets the same level of care.",
  },
];

const milestones = [
  { year: "2025", event: "GILLOPS founded", description: "Started with a mission to build better websites and automation for small businesses." },
  { year: "2025", event: "First clients", description: "Gill Eye Hospital, Taj Sandhu Group, and SnipnSleek — our first three projects." },
];

export default function AboutPage() {
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative bg-[#F9F6F1] min-h-screen pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="mb-20"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1918] mb-6 leading-tight">
            About GILLOPS
          </h1>
          <p className="text-lg text-[#6B6863] max-w-3xl leading-relaxed">
            Founded in 2025, GILLOPS designs and builds websites, AI automation, and SEO systems 
            for businesses that need more than a static online presence — from booking-ready 
            healthcare sites to multi-location service platforms to real estate tech.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8644E]/8 border border-[#C8644E]/15">
            <span className="text-sm text-[#C8644E] font-medium">B.Tech CSE (AI/ML) @ Chitkara University</span>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-[#1B1918] mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: easeCurve }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-[#E2DFD9]/60 p-8
                    hover:border-[#C8644E]/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.03]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C8644E]/8 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#C8644E]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1B1918] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#6B6863] leading-relaxed text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-[#1B1918] mb-10">
            Team
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="max-w-2xl"
          >
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white border border-[#E2DFD9]/60 hover:border-[#C8644E]/15 transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.03]">
              <div className="w-16 h-16 rounded-full bg-[#C8644E]/8 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-xl text-[#C8644E]">D</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#1B1918] mb-1">
                  Dilshaan Singh Gill
                </h3>
                <p className="text-[#C8644E] text-sm font-medium mb-1">
                  Founder / AI Engineer
                </p>
                <p className="text-[#9E9B93] text-sm mb-3">
                  B.Tech CSE (AI & ML) student at Chitkara University, India
                </p>
                <p className="text-[#6B6863] leading-relaxed text-sm">
                  Building web platforms and AI automation systems for clients across healthcare, 
                  real estate, and beauty. Based in India, working remotely with clients globally.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestones */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#1B1918] mb-10">
            Our Journey
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeCurve }}
                className="flex gap-6 items-start"
              >
                <div className="w-20 flex-shrink-0 pt-1">
                  <span className="font-heading font-bold text-[#C8644E]">{milestone.year}</span>
                </div>
                <div className="flex-1 pb-6 border-b border-[#E2DFD9]">
                  <h3 className="font-heading text-lg font-bold text-[#1B1918] mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-[#6B6863] leading-relaxed text-sm">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
