import type { Metadata } from "next";

const siteUrl = "https://gillops.dpdns.org";

interface LandingPageMeta {
  slug: string;
  title: string;
  description: string;
  industry: string;
  service: string;
  painPoints: string[];
  benefits: string[];
  cta: string;
  keywords: string[];
}

export const landingPages: LandingPageMeta[] = [
  {
    slug: "ai-receptionist-for-dentists",
    title: "AI Receptionist for Dentists | Never Miss a Patient Call Again",
    description: "AI-powered receptionist for dental practices. Answers calls, books appointments, and handles after-hours inquiries 24/7. Reduce front desk workload and increase patient bookings.",
    industry: "Dental Practices",
    service: "AI Receptionist",
    painPoints: [
      "Missed calls during lunch breaks and after hours",
      "Patients sent to voicemail instead of being helped",
      "Front desk overwhelmed during peak times",
    ],
    benefits: [
      "Answers every call in under 2 seconds",
      "Integrates with your practice management software",
      "Books appointments directly into your calendar",
      "Sends appointment reminders automatically",
      "HIPAA-compliant and secure",
    ],
    cta: "Get Your Free Dental AI Audit",
    keywords: ["AI receptionist for dentists", "dental AI automation", "automated patient scheduling", "dental practice AI"],
  },
  {
    slug: "website-design-for-law-firms",
    title: "Website Design for Law Firms | Premium Legal Websites That Convert",
    description: "Premium law firm website design with built-in lead capture, intake forms, and SEO. Convert visitors into qualified consultations.",
    industry: "Law Firms",
    service: "Website Design",
    painPoints: [
      "Website looks generic and does not reflect expertise",
      "No clear call-to-action for consultations",
      "Poor search engine visibility for legal keywords",
    ],
    benefits: [
      "Custom design that reflects your brand authority",
      "Built-in lead capture and intake forms",
      "Technical SEO for local search rankings",
      "Mobile-first, fast-loading design",
      "Integrated with scheduling and CRM tools",
    ],
    cta: "Get Your Free Legal Website Audit",
    keywords: ["website design for law firms", "law firm web design", "legal website SEO", "attorney website marketing"],
  },
  {
    slug: "ai-automation-for-salons",
    title: "AI Automation for Salons | Fill Your Chairs Faster",
    description: "AI-powered automation for salons and spas. Reduce no-shows, fill empty slots, and increase bookings with 24/7 automated systems.",
    industry: "Salons and Spas",
    service: "AI Automation",
    painPoints: [
      "Last-minute cancellations with no time to fill slots",
      "Clients forget appointments constantly",
      "Receptionist cannot handle high call volume",
    ],
    benefits: [
      "Automated waitlist that fills cancelled slots instantly",
      "Smart appointment reminders via SMS and email",
      "AI answers booking calls around the clock",
      "Captures after-visit reviews automatically",
      "Rebooking campaigns to boost loyalty",
    ],
    cta: "Get Your Free Salon Automation Audit",
    keywords: ["AI automation for salons", "salon booking automation", "spa AI receptionist", "salon no-show reduction"],
  },
  {
    slug: "lead-automation-for-realtors",
    title: "Lead Automation for Realtors | Never Lose a Buyer or Seller Lead",
    description: "Lead automation systems for real estate agents. Capture, qualify, and follow up with buyer and seller leads 24/7 without lifting a finger.",
    industry: "Realtors",
    service: "Lead Automation",
    painPoints: [
      "Leads go cold because of slow follow-up",
      "Manual lead qualification is time-consuming",
      "No system to nurture long-term prospects",
    ],
    benefits: [
      "Instant follow-up within 60 seconds",
      "AI qualifies leads based on budget and timeline",
      "Automated property matching and alerts",
      "CRM integration for seamless handoff",
      "Long-term drip campaigns that convert",
    ],
    cta: "Get Your Free Lead Automation Audit",
    keywords: ["lead automation for realtors", "real estate AI", "automated lead follow-up", "realtor lead management"],
  },
  {
    slug: "ai-chatbots-for-immigration-consultants",
    title: "AI Chatbots for Immigration Consultants | Answer Questions 24/7",
    description: "AI chatbot trained on immigration processes. Answers client questions, schedules consultations, and captures leads while you sleep.",
    industry: "Immigration Consultants",
    service: "AI Chatbot",
    painPoints: [
      "Clients ask the same questions repeatedly",
      "Time zone differences delay responses",
      "Language barriers create confusion",
    ],
    benefits: [
      "Answers visa and immigration questions instantly",
      "Collects client details and document checklists",
      "Schedules consultations automatically",
      "Multi-language support for diverse clients",
      "Captures leads from your website 24/7",
    ],
    cta: "Get Your Free Chatbot Demo",
    keywords: ["AI chatbot for immigration consultants", "immigration chatbot", "visa chatbot", "immigration AI assistant"],
  },
];

export function generateLandingMetadata(page: LandingPageMeta): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `${siteUrl}/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}/${page.slug}`,
      siteName: "GillOps",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [`${siteUrl}/og-image.jpg`],
    },
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function generateLandingSchema(page: LandingPageMeta): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.service,
    provider: {
      "@type": "LocalBusiness",
      name: "GillOps",
    },
    areaServed: {
      "@type": "Place",
      name: page.industry,
    },
    description: page.description,
  };
}

export default landingPages;
