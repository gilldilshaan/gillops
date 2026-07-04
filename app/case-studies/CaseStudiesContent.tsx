"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const caseStudies = [
  {
    client: "Nexa Commerce",
    industry: "E-commerce",
    challenge:
      "Nexa was struggling with manual order processing and lacked a cohesive digital strategy, leading to high cart abandonment.",
    solution:
      "We implemented an end-to-end AI automation pipeline that handled customer inquiries, order updates, and returns. We also migrated their site to a Next.js platform with deep SEO integration.",
    results: [
      { label: "Revenue Increase", value: "+285%", icon: DollarSign },
      { label: "Cart Abandonment", value: "-40%", icon: TrendingUp },
      { label: "Support Tickets", value: "-60%", icon: Users },
      { label: "Load Time", value: "0.8s", icon: Clock },
    ],
    testimonial:
      "Gillops transformed our entire operation. The automation saved us countless hours, and the new site converts better than anything we've had before.",
    author: "Sarah Mitchell",
    role: "CEO, Nexa Commerce",
    color: "#7C3AED",
  },
  {
    client: "Luminate Studios",
    industry: "Creative Agency",
    challenge:
      "As a creative agency, Luminate's website was slow and failed to showcase their portfolio effectively. They needed a site that performed as well as it looked.",
    solution:
      "Built a high-performance portfolio site with GSAP animations, optimised image delivery, and a built-in CMS for easy portfolio updates. Integrated a lead capture automation system.",
    results: [
      { label: "Organic Traffic", value: "+310%", icon: TrendingUp },
      { label: "Form Submissions", value: "+150%", icon: Users },
      { label: "Bounce Rate", value: "-35%", icon: ArrowRight },
      { label: "Page Speed", value: "98/100", icon: Clock },
    ],
    testimonial:
      "Our new site is lightning fast and looks incredible. The lead automation has been a game-changer for our new business pipeline.",
    author: "James Chen",
    role: "Founder, Luminate Studios",
    color: "#7C3AED",
  },
  {
    client: "MedCore Health",
    industry: "Healthcare",
    challenge:
      "MedCore needed a patient portal that was HIPAA compliant, easy to use, and reduced the burden on their administrative staff.",
    solution:
      "Developed a secure patient portal with an AI chatbot for 24/7 support, automated appointment scheduling, and integrated EHR systems.",
    results: [
      { label: "Patient Satisfaction", value: "+45%", icon: Users },
      { label: "Admin Hours Saved", value: "25/wk", icon: Clock },
      { label: "Booking Uptake", value: "+80%", icon: TrendingUp },
      { label: "Support Cost", value: "-55%", icon: DollarSign },
    ],
    testimonial:
      "The AI chatbot handles 70% of our patient inquiries. It's like having an extra team member that never sleeps.",
    author: "Dr. Priya Patel",
    role: "Medical Director, MedCore Health",
    color: "#7C3AED",
  },
];

export default function CaseStudiesPage() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    let ctx: gsap.Context | undefined;

    const init = async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default || gsapModule;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".case-study-card", {
          y: 80,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      }, sectionRef);
    };

    init();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#080808", padding: "120px 24px 80px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6B6B6B",
              marginBottom: 16,
            }}
          >
            CASE STUDIES
          </p>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "#F5F5F5",
              marginBottom: 24,
            }}
          >
            Client Success Stories
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 18,
              color: "#6B6B6B",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Real results from real clients. See how we have helped businesses
            like yours grow.
          </p>
        </div>

        {/* Case Studies */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="case-study-card"
              style={{
                backgroundColor: "#0F0F0F",
                border: "1px solid #1F1F1F",
                borderRadius: 16,
                overflow: "hidden",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#7C3AED40";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1F1F1F";
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "40px 40px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#7C3AED",
                      marginBottom: 8,
                    }}
                  >
                    {study.industry}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: 28,
                      color: "#F5F5F5",
                    }}
                  >
                    {study.client}
                  </h2>
                </div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: "rgba(124,58,237,0.1)",
                    color: "#7C3AED",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ArrowRight size={24} />
                </div>
              </div>

              <div
                style={{
                  padding: "0 40px 40px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 32,
                }}
              >
                {/* Left column */}
                <div>
                  <div style={{ marginBottom: 24 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#F5F5F5",
                        marginBottom: 8,
                      }}
                    >
                      The Challenge
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 15,
                        color: "#6B6B6B",
                        lineHeight: 1.6,
                      }}
                    >
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#F5F5F5",
                        marginBottom: 8,
                      }}
                    >
                      Our Solution
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 15,
                        color: "#6B6B6B",
                        lineHeight: 1.6,
                      }}
                    >
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Right column */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#F5F5F5",
                      marginBottom: 16,
                    }}
                  >
                    Results
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 16,
                      marginBottom: 24,
                    }}
                  >
                    {study.results.map((result) => {
                      const Icon = result.icon;
                      return (
                        <div
                          key={result.label}
                          style={{
                            backgroundColor: "#161616",
                            border: "1px solid #1F1F1F",
                            borderRadius: 12,
                            padding: 20,
                            textAlign: "center",
                          }}
                        >
                          <Icon
                            size={24}
                            color="#7C3AED"
                            style={{ margin: "0 auto 8px" }}
                          />
                          <div
                            style={{
                              fontFamily: "var(--font-syne)",
                              fontWeight: 800,
                              fontSize: 24,
                              color: "#7C3AED",
                              marginBottom: 4,
                            }}
                          >
                            {result.value}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontSize: 12,
                              color: "#6B6B6B",
                            }}
                          >
                            {result.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Testimonial */}
                  <div
                    style={{
                      backgroundColor: "#161616",
                      border: "1px solid #1F1F1F",
                      borderRadius: 12,
                      padding: 24,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 15,
                        fontStyle: "italic",
                        color: "#F5F5F5",
                        lineHeight: 1.6,
                        marginBottom: 16,
                      }}
                    >
                      &ldquo;{study.testimonial}&rdquo;
                    </p>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 600,
                          fontSize: 14,
                          color: "#F5F5F5",
                          marginBottom: 2,
                        }}
                      >
                        {study.author}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 12,
                          color: "#6B6B6B",
                        }}
                      >
                        {study.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
