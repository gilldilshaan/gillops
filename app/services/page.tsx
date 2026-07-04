import { servicesMetadata } from "@/app/metadata";
import { serviceSchema } from "@/app/schemas";
import Link from "next/link";

export const metadata = servicesMetadata; // ✅ Requirement #2

const services = [
  {
    title: "AI Automation Systems",
    description:
      "End-to-end automation pipelines that qualify leads, update your CRM, and trigger follow-ups without human intervention.",
    painPoints: [
      "Leads slip through cracks due to slow follow-up",
      "Staff spend hours on repetitive data entry",
      "No consistent outreach after hours",
    ],
    benefits: [
      "Lead qualification workflows",
      "CRM sync (HubSpot, Notion, Airtable)",
      "Email & Slack notifications",
      "Custom AI logic & prompts",
      "24/7 automated operation",
    ],
  },
  {
    title: "SEO Websites",
    description:
      "Fast, modern websites engineered to rank. Built with Core Web Vitals and technical SEO in mind.",
    painPoints: [
      "Current site loads too slowly, hurting rankings",
      "Not mobile-optimised, losing local searches",
      "No structured data or technical SEO foundation",
    ],
    benefits: [
      "Technical SEO architecture",
      "On-page optimisation",
      "Core Web Vitals compliant",
      "Mobile-first responsive design",
      "Google Search Console hub setup",
    ],
  },
  {
    title: "Growth Consulting",
    description:
      "Strategic guidance to turn traffic into revenue. We audit, plan, and execute growth systems.",
    painPoints: [
      "Traffic does not convert into paying customers",
      "Unclear which channels are worth investing in",
      "Growth feels random instead of systematic",
    ],
    benefits: [
      "Growth audit & roadmap",
      "Conversion rate optimisation",
      "Content strategy & planning",
      "Analytics & reporting setup",
      "Ongoing performance reviews",
    ],
  },
  {
    title: "AI Chatbots",
    description:
      "Custom AI chatbots trained on your business data to handle customer support, sales, and inquiries 24/7.",
    painPoints: [
      "Visitors leave because no one answers questions instantly",
      "Support tickets pile up during peak hours",
      "After-hours inquiries go completely unanswered",
    ],
    benefits: [
      "Custom knowledge base training",
      "Multi-platform integration",
      "Natural language understanding",
      "Lead capture & qualification",
      "Analytics & conversation insights",
    ],
  },
  {
    title: "Technical SEO Audits",
    description:
      "Comprehensive technical audits that identify and fix issues preventing your site from ranking.",
    painPoints: [
      "Search engines cannot crawl your site properly",
      "Duplicate content dilutes ranking potential",
      "Slow page speeds frustrate users and algorithms",
    ],
    benefits: [
      "Site architecture analysis",
      "Crawl error identification",
      "Page speed optimisation",
      "Mobile usability fixes",
      "Schema markup implementation",
    ],
  },
  {
    title: "Analytics & Reporting",
    description:
      "Data-driven insights that help you understand your audience and make better business decisions.",
    painPoints: [
      "Guessing what works instead of measuring it",
      "Reports are confusing and not actionable",
      "No clear picture of return on investment",
    ],
    benefits: [
      "Custom dashboard setup",
      "Monthly performance reports",
      "Conversion tracking",
      "Competitor analysis",
      "ROI measurement",
    ],
  },
];

const industries = [
  {
    name: "Dentists",
    description:
      "Reduce missed appointments and streamline patient intake with AI receptionists and automated reminders.",
  },
  {
    name: "Law Firms",
    description:
      "Qualify leads, schedule consultations, and nurture prospects without drowning in admin work.",
  },
  {
    name: "Salons",
    description:
      "Automate bookings, confirmations, and rebooking campaigns so stylists focus on their craft.",
  },
  {
    name: "Realtors",
    description:
      "Capture buyer inquiries instantly, follow up automatically, and close more listings faster.",
  },
];

const stats = [
  { value: "3x", label: "Average increase in qualified leads" },
  { value: "40%", label: "Reduction in administrative overhead" },
  { value: "24/7", label: "Automated lead follow-up coverage" },
  { value: "90%", label: "Faster response time to inquiries" },
];

const processSteps = [
  {
    step: "01",
    label: "Discover",
    description:
      "We audit your current systems, identify automation gaps, and map where leads leak out of your funnel.",
  },
  {
    step: "02",
    label: "Build",
    description:
      "Custom automation pipelines, chatbots, and websites are crafted with your brand voice and goals in mind.",
  },
  {
    step: "03",
    label: "Deploy",
    description:
      "Everything goes live with rigorous QA, training for your team, and zero-downtime transitions.",
  },
  {
    step: "04",
    label: "Optimize",
    description:
      "We monitor KPIs, refine logic, and continuously improve conversions based on real performance data.",
  },
];

const faqs = [
  {
    question: "How long does it take to set up an AI automation system?",
    answer:
      "Most automation systems are live within two to four weeks. Complex multi-step pipelines may take up to six weeks depending on integrations required.",
  },
  {
    question: "Will AI replace my current staff?",
    answer:
      "No. Our AI systems augment your team by handling repetitive tasks, freeing your staff to focus on high-value interactions and strategic work.",
  },
  {
    question: "Can I integrate with my existing CRM?",
    answer:
      "Yes. We integrate with HubSpot, Salesforce, Pipedrive, Zoho, Airtable, Notion, and many others.",
  },
  {
    question: "Do you offer ongoing support and optimisation?",
    answer:
      "Absolutely. We provide monthly retainers that include performance monitoring, A/B testing, prompt refinement, and priority support.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "We focus on local service businesses including dental practices, law firms, salons, real estate agencies, and healthcare clinics.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Structured Data for Service schema */} {/* ✅ Requirement #3 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative bg-[#F9F6F1] min-h-screen pt-28 md:pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Hero Section with Problem Statement */}
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1918] mb-6 leading-tight">
              AI Automation Services That Turn Inquiries Into Revenue
            </h1>
            <p className="text-lg md:text-xl text-[#4A453F] max-w-2xl leading-relaxed">
              Most local businesses lose leads to slow follow-up, manual data
              entry, and missed after-hours inquiries. GillOps designs and builds
              automation systems, AI chatbots, and SEO-powered websites that
              capture, qualify, and convert leads on autopilot. If you are
              ready to stop leaking revenue, our solutions are built for you.
            </p>
          </div>

          {/* Services Grid */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B1918] mb-4">
              Services Built for Local Business Growth
            </h2>
            <p className="text-[#4A453F] max-w-2xl mb-12 leading-relaxed">
              Every service is designed to plug a specific gap in your customer
              acquisition process. Together they form a growth engine that runs
              while you sleep.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-[#E2DFD9]/60 p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#C8644E]/10 flex items-center justify-center">
                      <span className="text-[#C8644E] font-bold text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-sm text-[#4A453F] font-mono tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#1B1918] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#4A453F] leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1B1918] mb-2 uppercase tracking-wider">
                      Pain Points We Solve
                    </h4>
                    <ul className="space-y-2">
                      {service.painPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-[#4A453F]"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C8644E] flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#1B1918] mb-2 uppercase tracking-wider">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-sm text-[#1B1918]"
                        >
                          <svg
                            className="w-4 h-4 text-[#C8644E] flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B1918] mb-4">
              How We Deliver Results
            </h2>
            <p className="text-[#4A453F] max-w-2xl mb-12 leading-relaxed">
              Our proven four-step process ensures every automation project is
              built on a foundation of strategy, not guesswork.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white border border-[#E2DFD9]/60 p-8"
                >
                  <span className="text-5xl font-bold text-[#C8644E]/10 leading-none block mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#1B1918] mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-[#4A453F] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Positioning */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B1918] mb-4">
              Tailored for Your Industry
            </h2>
            <p className="text-[#4A453F] max-w-2xl mb-12 leading-relaxed">
              We understand the unique challenges of local service businesses.
              Our systems are configured for the workflows and compliance needs
              of your specific industry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="rounded-2xl bg-white border border-[#E2DFD9]/60 p-8"
                >
                  <h3 className="font-heading text-lg font-bold text-[#1B1918] mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-[#4A453F] leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Stats & Social Proof */}
          <div className="rounded-2xl bg-[#1B1918] p-10 md:p-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results, Real Growth
            </h2>
            <p className="text-[#B0ACA5] max-w-2xl mb-10 leading-relaxed">
              Our clients do not just get shiny new tools. They get systems that
              produce measurable business outcomes month after month.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#C8644E] mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-[#B0ACA5] max-w-[200px] mx-auto leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B1918] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4A453F] max-w-2xl mb-10 leading-relaxed">
              Everything you need to know before starting your automation journey.
            </p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl bg-white border border-[#E2DFD9]/60 p-6 cursor-pointer group"
                >
                  <summary className="font-heading text-lg font-bold text-[#1B1918] list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-[#C8644E] text-2xl leading-none ml-4 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-sm text-[#4A453F] leading-relaxed mt-4 pt-4 border-t border-[#E2DFD9]/40">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl bg-white border border-[#E2DFD9]/60 p-10 md:p-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1B1918] mb-4">
              Ready to Stop Leads From Slipping Away?
            </h2>
            <p className="text-[#4A453F] max-w-xl mx-auto mb-8 leading-relaxed">
              Book your free AI Systems Audit and discover exactly where your
              business is losing revenue. We will map your current funnel,
              identify automation gaps, and build a custom plan to fix them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#C8644E] text-white font-semibold text-sm hover:bg-[#B05540] transition-colors"
              >
                Book Your Free AI Systems Audit
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#E2DFD9]/60 text-[#1B1918] font-semibold text-sm hover:bg-[#F5F2EC] transition-colors"
              >
                See Our Client Results
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}