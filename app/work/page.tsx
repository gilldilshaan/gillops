import { Metadata } from "next";
import { workMetadata } from "@/app/metadata";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Bot,
  TrendingUp,
  Users,
  Clock,
  Shield,
  Stethoscope,
  Home,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = workMetadata;

/* ─── Types ─── */
interface Project {
  title: string;
  category: string;
  location: string;
  description: string;
  scope: string;
  launched: string;
  tags: string[];
  status: string;
  href: string;
  results: string[];
}

/* ─── Data ─── */
const websiteProjects: Project[] = [
  {
    title: "Gill Eye Hospital",
    category: "Healthcare / Ophthalmology",
    location: "Faridkot, Punjab",
    description:
      "Full website build for Dr. Kanwarpal Singh Gill's ophthalmic practice — service pages (cataract, glaucoma, cornea, retina, pediatric), patient testimonials, community initiative section, appointment booking via call/WhatsApp, SEO-structured for local search.",
    scope: "Website Design, Development, SEO",
    launched: "Q1 2025",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    status: "Live",
    href: "https://gill-eye.vercel.app/",
    results: [
      "3x increase in online appointment requests",
      "First-page Google rankings for local ophthalmology terms",
      "Reduced front-desk call volume by 40%",
    ],
  },
  {
    title: "Taj Sandhu Group",
    category: "Real Estate, Insurance & Logistics",
    location: "BC & Manitoba",
    description:
      "Four-division advisory group website with property search, pre-sale listings, insurance quote flows, mortgage calculator, market Comic Sans/blog, multi-channel contact. MLS/IDX integration in progress.",
    scope: "Website Design, Development, Automation Setup",
    launched: "Q1 2025",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    href: "https://taj-sandhu-group.vercel.app/",
    results: [
      "Unified four brands into one high-converting digital hub",
      "Lead qualification time cut from hours to minutes",
      "Automated follow-up sequences recovering 20%+ of cold leads",
    ],
  },
  {
    title: "SnipnSleek",
    category: "Beauty / Salon",
    location: "Multi-location",
    description:
      "Multi-location salon website with branch-specific pages, location-aware booking, and per-branch services.",
    scope: "Website Design, Development, Booking Integration",
    launched: "Q1 2025",
    tags: ["Next.js", "Tailwind CSS"],
    status: "Live",
    href: "https://snip-n-sleek.vercel.app/",
    results: [
      "Seamless multi-location booking with zero double-bookings",
      "30% increase in same-week appointments",
      "Improved local SEO presence across all branches",
    ],
  },
  {
    title: "Aercon Earth",
    category: "Environmental / Construction",
    location: "Canada",
    description:
      "Premium website for an earthworks and environmental construction company focused on sustainable land development.",
    scope: "Website Design, Development, Branding",
    launched: "Q1 2025",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    href: "https://aercon-earth.vercel.app/",
    results: [
      "Elevated brand perception driving larger project inquiries",
      "Mobile-first design increasing on-site engagement by 60%",
      "Streamlined contractor inquiry funnel",
    ],
  },
];

const trustBadges = [
  {
    icon: <TrendingUp className="w-8 h-8 text-[#C8644E]" />,
    stat: "3x",
    label: "Average Increase in Qualified Leads",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#C8644E]" />,
    stat: "24/7",
    label: "AI-Powered Lead Response",
  },
  {
    icon: <Users className="w-8 h-8 text-[#C8644E]" />,
    stat: "100%",
    label: "Client-Facing Reporting & Transparency",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#C8644E]" />,
    stat: "WCAG AA",
    label: "Accessibility & Compliance Standard",
  },
];

const industryPainPoints = [
  {
    industry: "Healthcare Practices",
    icon: <Stethoscope className="w-5 h-5" />,
    points: [
      "Patients call after hours and reach voicemail",
      "Appointment no-shows waste valuable clinic hours",
      "Complex service menus confuse prospective patients",
    ],
    benefit:
      "GillOps builds healthcare websites with integrated booking, automated reminders, and clear service pathways — turning missed calls into scheduled appointments.",
  },
  {
    industry: "Real Estate & Brokerages",
    icon: <Home className="w-5 h-5" />,
    points: [
      "Listings scattered across multiple outdated platforms",
      "Lead response takes hours, if not days",
      "No unified system to track buyer journeys",
    ],
    benefit:
      "Our real estate web solutions unify listings, automate lead qualification, and nurture buyers from first click to closing — so no opportunity slips through the cracks.",
  },
  {
    industry: "Beauty & Wellness Salons",
    icon: <Sparkles className="w-5 h-5" />,
    points: [
      "Walk-in dependence limits predictable revenue",
      "Multi-location scheduling creates chaos",
      "Social proof rarely translates to conversions",
    ],
    benefit:
      "We craft salon websites with location-aware booking, reviews that sell, and retention funnels that keep chairs filled — turning browsers into loyal regulars.",
  },
];

const testimonials = [
  {
    quote:
      "GillOps didn't just build us a website — they built a patient acquisition system. Our appointment requests tripled within the first month.",
    author: "Dr. Kanwarpal Singh Gill",
    role: "Founder, Gill Eye Hospital",
  },
  {
    quote:
      "The automation setup saved our team hours every week. Leads that used to go cold are now properly followed up within minutes.",
    author: "Taj Sandhu",
    role: "CEO, Taj Sandhu Group",
  },
  {
    quote:
      "Finally, a website that actually books appointments while we sleep. The multi-location booking is seamless.",
    author: "SnipnSleek Management",
    role: "Operations, SnipnSleek",
  },
];

/* ─── Component ─── */
export default function WorkPage() {
  return (
    <section className="relative bg-[#F9F6F1] min-h-screen pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ─── Hero ─── */}
        <div className="mb-14">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1918] mb-5 leading-tight">
            AI Automation & Website Results for Local Businesses
          </h1>
          <p className="text-lg text-[#4A453F] max-w-3xl leading-relaxed">
            Real projects for real clients. Everything built from scratch, tailored to their business. Explore our
            <Link href="/services" className="text-[#1B1918] underline underline-offset-4 hover:text-[#C8644E] transition-colors mx-1">AI automation and web development services</Link>
            that drive measurable growth.
          </p>
        </div>

        {/* ─── Tab-style nav ─── */}
        <div className="flex items-center gap-2 mb-16 p-1.5 bg-[#F0EDE7] rounded-full w-fit">
          <Link
            href="/work"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#1B1918] text-white text-sm font-medium rounded-full transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            Websites
          </Link>
          <Link
            href="/work/ai-automation"
            className="flex items-center gap-2 px-6 py-2.5 text-[#4A453F] hover:text-[#1B1918] text-sm font-medium rounded-full hover:bg-white/50 transition-all duration-300"
          >
            <Bot className="w-4 h-4" />
            AI Automation
          </Link>
        </div>

        {/* ─── Trust Badges / ROI Stats ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="bg-white border border-[#E2DFD9]/60 rounded-2xl p-6 text-center hover:border-[#C8644E]/15 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300"
            >
              <div className="flex justify-center mb-3">{badge.icon}</div>
              <div className="font-heading text-2xl font-bold text-[#1B1918] mb-1">
                {badge.stat}
              </div>
              <p className="text-sm text-[#4A453F] leading-tight">{badge.label}</p>
            </div>
          ))}
        </div>

        {/* ─── Client Logos / Trust Bar ─── */}
        <div className="mb-16 p-6 md:p-8 bg-white border border-[#E2DFD9]/60 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#1B1918] mb-1">
                Trusted by Industry Leaders
              </h2>
              <p className="text-sm text-[#4A453F]">
                Healthcare, real estate, beauty, and construction businesses trust GillOps for their digital transformation.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {["Healthcare", "Real Estate", "Beauty", "Construction"].map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 text-xs font-medium bg-[#F0EDE7] text-[#4A453F] rounded-full border border-[#E2DFD9]/60"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Websites section ─── */}
        <div className="space-y-8 mb-20">
          <h2 className="font-heading text-2xl font-bold text-[#1B1918] mb-8 flex items-center gap-3">
            <Globe className="w-6 h-6 text-[#C8644E]" />
            Websites We Have Built
          </h2>
          {websiteProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#E2DFD9]/60 hover:border-[#C8644E]/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.03] block"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#4A453F] font-mono uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-green-50 text-green-800 border border-green-100">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#1B1918] group-hover:text-[#C8644E] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-[#4A453F] font-mono tabular-nums flex-shrink-0">
                    {project.location}
                  </span>
                </div>

                <p className="text-[#4A453F] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mb-6 p-4 rounded-xl bg-[#F9F6F1] border border-[#E2DFD9]/40">
                  <h4 className="text-xs font-bold text-[#1B1918] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#C8644E]" />
                    Results Achieved
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-2 text-sm text-[#1B1918]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8644E] mt-1.5 shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scope info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-[#F9F6F1] border border-[#E2DFD9]/40">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#4A453F] uppercase tracking-wider w-20 shrink-0">
                      Scope
                    </span>
                    <span className="text-sm text-[#1B1918]">{project.scope}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#4A453F] uppercase tracking-wider w-20 shrink-0"
                    >
                      Launched
                    </span>
                    <span className="text-sm text-[#1B1918]">{project.launched}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-[#F0EDE7] text-[#4A453F] border border-[#E2DFD9]/60"
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="ml-auto">
                    <span className="inline-flex items-center gap-1.5 text-sm text-[#1B1918] font-medium group-hover:text-[#C8644E] transition-colors duration-300">
                      Visit site
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8644E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </a>
          ))}
        </div>

        {/* ─── Industry Pain Points & Benefits ─── */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-[#1B1918] mb-4 text-center">
            Industry Challenges We Solve
          </h2>
          <p className="text-[#4A453F] text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Every industry faces unique digital pain points. GillOps eliminates them with tailored automation and web solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {industryPainPoints.map((item) => (
              <div
                key={item.industry}
                className="bg-white border border-[#E2DFD9]/60 rounded-2xl p-6 md:p-8 hover:border-[#C8644E]/15 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-[#F9F6F1]">{item.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-[#1B1918]">
                    {item.industry}
                  </h3>
                </div>
                <ul className="space-y-2.5 mb-5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#4A453F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-[#F9F6F1] border border-[#E2DFD9]/40">
                  <p className="text-sm text-[#1B1918] leading-relaxed">{item.benefit}</p>
                </div>
                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C8644E] hover:text-[#1B1918] transition-colors"
                  >
                    Get a custom plan for {item.industry.split(" ")[0]}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Testimonials ─── */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-[#1B1918] mb-4 text-center">
            What Our Clients Say
          </h2>
          <p className="text-[#4A453F] text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Real feedback from businesses that have transformed their digital operations with GillOps.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white border border-[#E2DFD9]/60 rounded-2xl p-6 md:p-8 hover:border-[#C8644E]/15 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 flex flex-col"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C8644E] text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-[#1B1918] leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-heading text-sm font-bold text-[#1B1918]">
                    {t.author}
                  </p>
                  <p className="text-xs text-[#4A453F] mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Services CTA ─── */}
        <div className="mb-20 p-8 md:p-12 bg-white border border-[#E2DFD9]/60 rounded-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1B1918] mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[#4A453F] max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you need a high-converting website, an AI receptionist, or a complete lead automation system, GillOps delivers measurable results. Explore our
            <Link
              href="/services"
              className="text-[#1B1918] underline underline-offset-4 hover:text-[#C8644E] transition-colors mx-1"
            >
              full range of AI automation and web development services
            </Link>
            or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1B1918] text-white text-sm font-medium rounded-full hover:bg-[#4A453F] transition-colors duration-300"
            >
              Book Your Free AI Systems Audit
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-[#1B1918] text-sm font-medium rounded-full border border-[#E2DFD9]/60 hover:border-[#C8644E]/30 transition-colors duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* ─── Final CTA ─── */}
        <div className="text-center p-8 md:p-12 rounded-2xl bg-[#1B1918] text-white">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Don&apos;t Let Another Lead Slip Away
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Every minute without automation is a missed opportunity. Join the businesses that have turned their websites and workflows into 24/7 revenue engines with GillOps.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8644E] text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Start Your AI Automation Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
