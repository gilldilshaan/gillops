"use client";

import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const packages = [
  {
    name: "Starter",
    priceOneTime: "£997",
    priceMonthly: "£397/mo",
    description: "Get online with SEO built in.",
    features: [
      "5-page SEO-optimised website",
      "Google Search Console setup",
      "On-page SEO for 10 keywords",
      "Mobile-first, Core Web Vitals optimised",
      "1 month of post-launch support",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Growth",
    priceOneTime: "£2,497",
    priceMonthly: "£897/mo",
    description: "Automate and rank. Start compounding.",
    features: [
      "Everything in Starter",
      "1 custom AI automation pipeline",
      "CRM integration (HubSpot, Notion, Airtable)",
      "Lead capture + email nurture sequence",
      "Monthly SEO performance report",
      "2 months of ongoing support",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Elite",
    priceOneTime: "£5,997",
    priceMonthly: "£1,997/mo",
    description: "Full-stack growth engine. We run everything.",
    features: [
      "Everything in Growth",
      "Up to 5 AI automation systems",
      "Full SEO strategy and content plan (12 months)",
      "Custom AI chatbot for your website",
      "Weekly performance calls",
      "Priority Slack access to the GILLOPS team",
      "Quarterly strategy review",
      "Dedicated account manager",
    ],
    cta: "Get started",
    featured: false,
    elite: true,
  },
];

export default function Packages() {
  const [isMonthly, setIsMonthly] = useState(false);
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".package-card", {
          y: 80,
          stagger: 0.2,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }, sectionRef);
    };

    init();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [reducedMotion]);

  const handleCta = (pkg: string) => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="packages"
      style={{
        backgroundColor: "#080808",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B6B6B", marginBottom: 16 }}>PRICING</p>
        <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(36px, 5vw, 56px)", marginBottom: 40, color: "#F5F5F5" }}>
          Choose your growth plan
        </h2>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 60 }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: isMonthly ? "#6B6B6B" : "#F5F5F5" }}>One-time</span>
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            style={{ width: 48, height: 24, borderRadius: 12, backgroundColor: isMonthly ? "#7C3AED" : "#1F1F1F", border: "none", cursor: "pointer", position: "relative", transition: "background-color 0.3s" }}
          >
            <div style={{ width: 18, height: 18, borderRadius: "50%", backgroundColor: "#F5F5F5", position: "absolute", top: 3, left: isMonthly ? 26 : 4, transition: "left 0.3s" }} />
          </button>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: isMonthly ? "#F5F5F5" : "#6B6B6B" }}>Monthly</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="package-card"
              style={{
                backgroundColor: "#0F0F0F",
                border: pkg.elite ? "1px solid #C9A84C" : pkg.featured ? "1px solid #7C3AED" : "1px solid #1F1F1F",
                borderRadius: 16,
                padding: 40,
                position: "relative",
                transform: pkg.featured ? "translateY(-12px)" : "none",
                boxShadow: pkg.featured ? "0 0 80px rgba(124,58,237,0.12)" : "none",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => { if (!pkg.featured) e.currentTarget.style.transform = "translateY(-6px)"; }}
              onMouseLeave={(e) => { if (!pkg.featured) e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {pkg.featured && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", backgroundColor: "#7C3AED", color: "#F5F5F5", padding: "4px 16px", borderRadius: 2, fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Most Popular
                </div>
              )}
              {pkg.elite && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", backgroundColor: "#C9A84C", color: "#080808", padding: "4px 16px", borderRadius: 2, fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Elite
                </div>
              )}
              <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 24, marginBottom: 8, color: "#F5F5F5" }}>{pkg.name}</h3>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#6B6B6B", marginBottom: 24 }}>{pkg.description}</p>
              <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 40, marginBottom: 24, color: pkg.elite ? "#C9A84C" : "#F5F5F5" }}>
                {isMonthly ? pkg.priceMonthly : pkg.priceOneTime}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", textAlign: "left" }}>
                {pkg.features.map((f, i) => (
                  <li key={i} style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#6B6B6B", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: pkg.elite ? "#C9A84C" : "#7C3AED", flexShrink: 0, marginTop: 6 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleCta(pkg.name)}
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  fontSize: 16,
                  backgroundColor: pkg.featured ? "#7C3AED" : "transparent",
                  color: pkg.featured ? "#FFFFFF" : pkg.elite ? "#C9A84C" : "#7C3AED",
                  border: pkg.featured ? "none" : pkg.elite ? "1px solid #C9A84C" : "1px solid #7C3AED",
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
