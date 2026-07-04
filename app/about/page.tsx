import { Metadata } from "next";
import Link from "next/link";
import { aboutMetadata } from "@/app/metadata";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "GillOps",
            description:
              "AI automation agency for local businesses. GillOps designs and builds websites, AI automation, and SEO systems that drive real growth.",
            url: "https://gillops.dpdns.org",
            email: "gill0px@gmail.com",
            telephone: "+91-774-000-2634",
            address: { "@type": "PostalAddress", addressCountry: "IN", addressRegion: "Punjab" },
            priceRange: "$$$",
          }),
        }}
      />

      <main role="main" className="min-h-screen antialiased" aria-label="About GillOps">
        <div className="bg-[#F5F2ED]">
          {/* Hero */}
          <section className="relative overflow-hidden bg-[#1B1918] px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
            <div className="pointer-events-none absolute right-6 top-6 h-40 w-40 bg-[#C8644E] opacity-10 sm:right-12 sm:top-12 sm:h-56 sm:w-56 lg:right-20 lg:top-20 lg:h-72 lg:w-72" style={{ borderRadius: "50%", filter: "blur(80px)" }} />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-5xl font-semibold leading-tight text-[#F5F2ED] sm:text-6xl lg:text-7xl">
                About GillOps
              </h1>
              <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[#F5F2ED]/80 sm:text-2xl">
                We build intelligent marketing and automation systems that help local service businesses grow smarter, not harder.
              </p>
            </div>
            <div className="mx-auto mt-12 w-20 sm:w-24 bg-[#C8644E]" style={{ height: "2px" }} />
          </section>

          {/* Prose */}
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="space-y-6 text-base leading-[1.9] text-[#4A453F]">
              <p className="first-letter:text-5xl first-letter:font-semibold first-letter:leading-[1.1] first-letter:text-[#1B1918]">
                GillOps is a premium marketing and automation agency built specifically for local businesses that rely on qualified leads and booked appointments to thrive. We work with dentists, law firms, salons, clinics, and professional service providers who are ready to grow with modern systems — but do not want the risk of typical agencies or the inconsistency of freelancers.
              </p>
              <p>
                Our approach is simple: we deeply study your business, build intelligent, human-like automation across your lead generation, follow-up, and scheduling, and manage every detail with the care and continuity of a full-time team.
              </p>
              <p>
                We do not offer one-size-fits-all packages. Whether you need targeted advertising, a high-converting website, automated lead follow-up, or an all-in-one growth system, GillOps becomes a true extension of your business.
              </p>
              <p>
                What sets us apart is our belief that automation should feel invisible to your customers — and effortless for you. From the moment a potential lead discovers your business to the moment they become a loyal client, every touchpoint is optimized, personalized, and working 24/7.
              </p>
              <p>
                We use AI to handle inquiries, schedule appointments through your calendar, follow up across multiple channels, and nurture leads until they convert. You stay focused on delivering exceptional service; we make sure your pipeline never goes dry.
              </p>
              <p>
                Every system we build is customized, continuously improved, and backed by a dedicated team that treats your growth as seriously as you do. We track real metrics that matter — consultation bookings, new patient sign-ups, lead-to-client conversion rates — and optimize relentlessly.
              </p>
            </div>

            {/* Pain Points */}
            <section className="mt-24 sm:mt-32 scroll-mt-32">
              <h2 className="mb-10 text-center text-2xl font-semibold text-[#1B1918] sm:text-3xl">
                Why Local Businesses Lose Leads
              </h2>
              <div className="space-y-6 text-base leading-[1.9] text-[#4A453F]">
                <p>
                  Most local service businesses are losing 40–70% of potential revenue not because of bad service, but because of an invisible, silent problem: their lead follow-up systems are broken.
                </p>
                <p>
                  You invest in ads, referrals, or a decent-looking website. A prospect finds you, fills out a form, maybe even calls. And then… they wait. Hours pass. Sometimes days. By the time you respond, they have moved on to a competitor who answered in minutes.
                </p>
                <p>This is the lead bleed. It looks like:</p>
                <ul className="ml-6 list-disc space-y-2 text-[#4A453F]">
                  <li>Missed calls and unreturned voicemails piling up while you are with a client.</li>
                  <li>Appointment requests sitting in email inboxes until someone manually enters them into a calendar.</li>
                  <li>Prospects ghosting because no one followed up at the right time in the right way.</li>
                </ul>
                <p>
                  Meanwhile, time and money go into getting those leads in the first place — only to watch them evaporate.
                </p>
                <p>
                  On top of that, fragmented tools create friction. A separate scheduler, a separate email, a separate ad platform. Nobody talks to each other. Your team is spread thin trying to stitch it all together. Scaling feels impossible because growth just creates more manual work.
                </p>
              </div>
            </section>

            {/* Benefits */}
            <section className="mt-24 sm:mt-32">
              <h2 className="mb-10 text-center text-2xl font-semibold text-[#1B1918] sm:text-3xl">
                How AI Automation Solves This
              </h2>
              <div className="space-y-6 text-base leading-[1.9] text-[#4A453F]">
                <p>
                  AI-powered automation is not a gimmick. When designed correctly, it becomes a reliable, scalable, always-on assistant that plugs the leak in your business.
                </p>
                <p>
                  At GillOps, we build systems that capture every inquiry the moment it comes in and respond within seconds. Whether a lead visits your website, sends a DM, or calls your business, they receive an immediate, human-like response that feels natural and helpful.
                </p>
                <p>Here is what that means in practice:</p>
                <ul className="ml-6 list-disc space-y-2 text-[#4A453F]">
                  <li><strong className="text-[#1B1918]">Instant lead capture:</strong> Every inquiry is logged, tagged, and responded to automatically — no more leads falling through cracks.</li>
                  <li><strong className="text-[#1B1918]">24/7 follow-up:</strong> The system engages leads even while you sleep, nurturing them with personalized messages across multiple channels.</li>
                  <li><strong className="text-[#1B1918]">Appointment scheduling:</strong> Prospects book directly into your calendar with automatic confirmation and reminders, eliminating back-and-forth.</li>
                  <li><strong className="text-[#1B1918]">Unified control:</strong> A single system handles ads, website, follow-up, and analytics. Everything is visible, measurable, and improvable.</li>
                </ul>
                <p>
                  The result? You stop losing revenue to slow response times and manual errors. Your calendar stays full. Your team focuses on what they do best. And your business grows on a solid, scalable foundation.
                </p>
              </div>
            </section>

            {/* Process */}
            <section className="mt-24 sm:mt-32">
              <h2 className="mb-10 text-center text-2xl font-semibold text-[#1B1918] sm:text-3xl">
                Our Proven Process
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1B1918]">Discover</h3>
                  <p className="text-base leading-[1.9] text-[#4A453F]">
                    We start by deeply understanding your business model, patient or client journey, current bottlenecks, and growth objectives. We audit your existing systems, review your ad spend, and map the complete lead flow from first touch to booked appointment. This phase ensures everything after is built on a clear, shared understanding of what is actually needed to grow your specific business.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1B1918]">Build</h3>
                  <p className="text-base leading-[1.9] text-[#4A453F]">
                    Using insights from the discovery phase, we design and construct your custom automation ecosystem. This includes your high-converting website, AI-powered follow-up system, integrated calendar, and targeted ad campaigns. Every touchpoint is built to feel like an extension of your brand while operating seamlessly in the background. We connect tools, configure workflows, and build reusable components for long-term scalability.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1B1918]">Launch</h3>
                  <p className="text-base leading-[1.9] text-[#4A453F]">
                    Once approved, we go live with smooth, accurate, and complete activation. This is not a website launch that sits idle. It is a system that is working from day one to capture, engage, and convert leads. We carefully schedule timing to reduce risk, run parallel testing, and make sure your business is present and converting across the channels your customers already use.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1B1918]">Optimize</h3>
                  <p className="text-base leading-[1.9] text-[#4A453F]">
                    Growth is never a one-time event. We continuously monitor campaign performance, funnel drop-off, and system efficiency. As patterns emerge and your business evolves, we iterate and improve. We treat your campaigns as living documents, testing, refining, and upgrading to make sure you are always ahead. This is the phase where good becomes great — and where compounding results are built.
                  </p>
                </div>
              </div>
            </section>

            {/* Niche positioning */}
            <section className="mt-24 sm:mt-32">
              <h2 className="mb-10 text-center text-2xl font-semibold text-[#1B1918] sm:text-3xl">
                Built for Your Niche
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1B1918]">Dental Practices</h3>
                  <p className="text-base leading-[1.9] text-[#4A453F]">
                    Dental practices face a unique challenge: competing for local patients with big-brand dental chains and online directories. New patients are skeptical, and a slow response to an inquiry is the fastest way to lose them. Our systems help dental practices answer every inquiry instantly, automatically book initial consultations, and follow up with educational content to build trust before the patient even walks in. We integrate with your existing practice management system for a seamless front desk experience that scales.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1B1918]">Law Firms</h3>
                  <p className="text-base leading-[1.9] text-[#4A453F]">
                    For law firms, trust and professionalism are everything. Prospective clients are often researching during stressful moments, and they expect immediate, clear answers. We build systems for law firms that handle intake around the clock, qualify leads through automated screening, and ensure high-intent prospects are connected with you quickly. From initial ad click to signed retainer, every step is tracked and optimized for client acquisition.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1B1918]">Salons and Spas</h3>
                  <p className="text-base leading-[1.9] text-[#4A453F]">
                    Salons and spas thrive on repeat bookings and word of mouth, but they also live and die by last-minute cancellations and empty appointment slots. Our automation for salons reduces no-shows with smart reminders, fills open slots through waitlist automations, and captures after-appointment reviews to boost local search rankings. We help salons turn one-time visitors into loyal clients with automated rebooking and personalized follow-up campaigns.
                  </p>
                </div>
              </div>
            </section>

            {/* Social Proof */}
            <section className="mt-24 sm:mt-32">
              <h2 className="mb-10 text-center text-2xl font-semibold text-[#1B1918] sm:text-3xl">
                Trusted By Growing Businesses
              </h2>
              <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                {[
                  { count: "40%", label: "Average increase in new patient bookings for dental clients" },
                  { count: "50+", label: "Hours saved per month in manual follow-up for law firms" },
                  { count: "30%", label: "Reduction in no-shows for salon clients" },
                ].map((stat) => (
                  <div key={stat.count} className="flex flex-col items-center justify-center rounded-2xl bg-[#ECE8E2] px-6 py-10 text-center">
                    <span className="mb-2 text-4xl font-semibold text-[#1B1918] sm:text-5xl">{stat.count}</span>
                    <span className="max-w-xs text-sm leading-snug text-[#4A453F] sm:text-base">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                {[
                  { text: "GillOps completely transformed our dental practice. Their AI automation handles our appointment scheduling and follow-ups seamlessly. We have seen a 40% increase in new patient bookings since implementing their system.", author: "Dr. Kanwarpal Singh Gill", role: "Dental Practice Owner" },
                  { text: "As a law firm owner, I was skeptical about AI automation. GillOps proved me wrong. Their system now handles our initial client intake, schedules consultations, and follows up with potential clients. Our consultation bookings have doubled.", author: "Taj Sandhu", role: "Law Firm Partner" },
                ].map((t) => (
                  <div key={t.author} className="rounded-2xl bg-[#ECE8E2] p-8 sm:p-10">
                    <p className="mb-6 text-base leading-[1.9] text-[#4A453F]">&ldquo;{t.text}&rdquo;</p>
                    <div>
                      <p className="font-semibold text-[#1B1918]">{t.author}</p>
                      <p className="text-sm text-[#4A453F]">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-[#4A453F]">
                <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-[#C8644E]" /> 99.9% Uptime Guarantee</span>
                <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-[#C8644E]" /> HIPAA-Compliant Systems</span>
                <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-[#C8644E]" /> Dedicated Account Manager</span>
                <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-[#C8644E]" /> Monthly Performance Reviews</span>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-24 sm:mt-32">
              <div className="rounded-[24px] bg-[#1B1918] px-6 py-16 text-center sm:px-12 sm:py-24">
                <h2 className="mx-auto mb-6 max-w-2xl text-2xl font-semibold text-[#F5F2ED] sm:text-3xl lg:text-4xl">
                  Get Your Automation Plan
                </h2>
                <p className="mx-auto mb-10 max-w-xl text-base leading-[1.9] text-[#F5F2ED]/80 sm:text-lg">
                  Discover how GillOps can transform your lead generation and follow-up into a system that works around the clock.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-[#C8644E] px-7 py-3 text-lg font-medium text-white transition-opacity hover:opacity-85"
                >
                  Start Your Automation Journey
                </Link>
              </div>
            </section>

            {/* Internal Links */}
            <section className="mt-24 sm:mt-32">
              <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-6">
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[#4A453F] transition-colors hover:text-[#C8644E]">
                  <span>Explore our AI marketing and automation services</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
                <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[#4A453F] transition-colors hover:text-[#C8644E]">
                  <span>See results for dental, legal, and salon clients</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
