import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight, Shield, FileText, ChevronDown } from "lucide-react";
import { contactMetadata } from "@/app/metadata";
import ContactForm from "./ContactForm";

export const metadata: Metadata = contactMetadata;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gill0px@gmail.com",
    href: "mailto:gill0px@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 774-000-2634",
    href: "tel:+917740002634",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India (Remote)",
    href: "#",
  },
];

const promiseBadges = [
  { icon: Shield, label: "No Cost", desc: "The audit is 100% free" },
  { icon: FileText, label: "No Commitment", desc: "No obligation to proceed" },
  { icon: ArrowRight, label: "Actionable Report", desc: "Specific steps you can take today" },
];

const timeline = [
  { step: "1", title: "24hr Response", desc: "We reply to every inquiry within one business day." },
  { step: "2", title: "3-Day Plan", desc: "Get a tailored automation roadmap in under 72 hours." },
  { step: "3", title: "1-Week Kickoff", desc: "Start implementation within seven days of approval." },
];

const faqs = [
  {
    question: "What happens during the free audit?",
    answer:
      "We review your current website, marketing funnels, and lead-capture process to identify where leads are dropping off. You receive a short report with prioritized fixes.",
  },
  {
    question: "Is there any cost or contract after the audit?",
    answer:
      "No. The audit is completely free and carries no obligation. If you decide to proceed, we provide a separate scope and estimate.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Most projects kick off within a week after the audit is approved. For urgent requests, we can often begin in 2-3 days.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  contactType: "Customer Service",
  email: "gill0px@gmail.com",
  telephone: "+91 774-000-2634",
  areaServed: "IN",
  availableLanguage: ["English"],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative bg-[#F9F6F1] min-h-screen pt-28 md:pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Hero */}
          <section className="text-center space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1918] leading-tight">
              Contact GillOps
            </h1>
            <p className="text-lg md:text-xl text-[#4A453F] max-w-3xl mx-auto leading-relaxed">
              Ready to stop losing leads and start growing? Book your free audit or drop us a message. We build
              <Link href="/services" className="underline underline-offset-4 decoration-[#C8644E] hover:text-[#C8644E] transition-colors">premium AI automation systems</Link>
              , websites, and marketing funnels for local businesses that want measurable results.
            </p>
          </section>

          {/* Value Proposition */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1B1918]">
                  Book Your Free Audit
                </h2>
                <p className="text-[#4A453F] leading-relaxed">
                  In just 30 minutes, we will uncover the gaps in your current funnel and show you exactly how to fix them—no sales pitch, just actionable insights.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E2DFD9]/60 hover:border-[#C8644E]/15 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#C8644E]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#C8644E]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#4A453F] uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[#1B1918] font-medium group-hover:text-[#C8644E] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Calendly embed suggestion */}
            <div className="rounded-2xl border-2 border-dashed border-[#C8644E]/30 bg-[#C8644E]/5 p-8 text-center space-y-4">
              <p className="text-sm font-medium text-[#4A453F] uppercase tracking-wider">
                Calendly Embed
              </p>
              <p className="text-[#1B1918] text-lg font-semibold">
                Prefer to schedule directly?
              </p>
              <p className="text-[#4A453F] text-sm">
                Replace this section with your Calendly inline embed.
              </p>
              {/*
                <iframe
                  src="https://calendly.com/gill0px/new-meeting"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Calendly Scheduling"
                />
              */}
            </div>
          </section>

          {/* What to Expect Timeline */}
          <section className="space-y-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1B1918] text-center">
              What Happens Next
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {timeline.map((item) => (
                <article key={item.step} className="rounded-2xl bg-white border border-[#E2DFD9]/60 p-8 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#C8644E]/10 flex items-center justify-center">
                    <span className="text-[#C8644E] font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1B1918]">{item.title}</h3>
                  <p className="text-[#4A453F] text-sm leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Trust / Promise Badges */}
          <section className="rounded-3xl bg-[#1B1918] p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {promiseBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C8644E]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#C8644E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{badge.label}</p>
                      <p className="text-sm text-gray-300">{badge.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1B1918]">
                Tell Us About Your Business
              </h2>
              <p className="text-[#4A453F] leading-relaxed">
                Whether you need
                <Link href="/services" className="underline underline-offset-4 decoration-[#C8644E] hover:text-[#C8644E] transition-colors">AI-powered lead automation</Link>
                , a high-converting website, or a complete marketing funnel overhaul, tell us what you are working with and we will map the best path forward.
              </p>
              <ul className="space-y-3 text-sm text-[#4A453F]">
                <li className="flex items-start gap-2">
                  <ChevronDown className="w-4 h-4 text-[#C8644E] flex-shrink-0 mt-0.5 rotate-[-90deg]" />
                  We respond to every inquiry
                </li>
                <li className="flex items-start gap-2">
                  <ChevronDown className="w-4 h-4 text-[#C8644E] flex-shrink-0 mt-0.5 rotate-[-90deg]" />
                  Free, no-obligation audit
                </li>
                <li className="flex items-start gap-2">
                  <ChevronDown className="w-4 h-4 text-[#C8644E] flex-shrink-0 mt-0.5 rotate-[-90deg]" />
                  Custom strategy for your industry
                </li>
              </ul>
            </div>

            <ContactForm />
          </section>

          {/* FAQ Section */}
          <section className="space-y-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1B1918]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl bg-white border border-[#E2DFD9]/60 overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[#F0EDE7]/50 transition-colors">
                    <span className="font-semibold text-[#1B1918]">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-[#C8644E] flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-6 text-[#4A453F] leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Services Link */}
          <section className="text-center space-y-4 py-12">
            <p className="text-[#4A453F]">
              Want to see what we can build for you before reaching out? Explore our
              <Link href="/services" className="underline underline-offset-4 decoration-[#C8644E] hover:text-[#C8644E] transition-colors font-semibold">AI automation and web development services</Link>
              designed for dentists, law firms, salons, and other local businesses.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
