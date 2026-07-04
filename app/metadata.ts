import { Metadata } from "next";

export const siteUrl = "https://gillops.dpdns.org";
export const siteName = "GillOps";
export const siteDescription = "AI automation agency for local businesses. GillOps designs and builds websites, AI automation, and SEO systems that drive real growth.";
export const twitterHandle = "@gillops";

export const homeMetadata: Metadata = {
  title: "GillOps | AI Automation & Premium Websites for Local Businesses",
  description: "GillOps builds premium websites, AI receptionists, and lead automation systems for local businesses that want more leads. Book a free AI systems audit today.",
  keywords: [
    "AI automation agency",
    "AI receptionist for dentists",
    "website design for law firms",
    "lead automation agency",
    "local business AI systems",
    "AI automation for local businesses",
  ],
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: "GillOps | AI Automation & Premium Websites for Local Businesses",
    description: "GillOps builds premium websites, AI receptionists, and lead automation systems for local businesses that want more leads. Book a free AI systems audit today.",
    url: siteUrl,
    siteName,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "GillOps - AI Automation & Premium Websites for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GillOps | AI Automation & Premium Websites for Local Businesses",
    description: "GillOps builds premium websites, AI receptionists, and lead automation systems for local businesses that want more leads.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: twitterHandle,
  },
};

export const aboutMetadata: Metadata = {
  title: "About GillOps | AI Systems & Web Development Agency",
  description: "Learn how GillOps helps local businesses with AI automation, premium websites, and lead generation systems. Meet the founder and our mission.",
  keywords: [
    "about GillOps",
    "AI systems agency",
    "web development agency",
    "AI engineer",
    "automation specialist",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About GillOps | AI Systems & Web Development Agency",
    description: "Learn how GillOps helps local businesses with AI automation, premium websites, and lead generation systems.",
    url: `${siteUrl}/about`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GillOps | AI Systems & Web Development Agency",
    description: "Learn how GillOps helps local businesses with AI automation, premium websites, and lead generation systems.",
  },
};

export const servicesMetadata: Metadata = {
  title: "AI Automation Services for Dentists, Law Firms & Salons | GillOps",
  description: "Custom AI automation, chatbots, CRM systems, and websites built for high-converting local businesses. Transform your practice with smart automation.",
  keywords: [
    "AI automation services",
    "AI receptionist for dentists",
    "website design for law firms",
    "lead automation for salons",
    "local business automation",
    "AI chatbot services",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "AI Automation Services for Dentists, Law Firms & Salons | GillOps",
    description: "Custom AI automation, chatbots, CRM systems, and websites built for high-converting local businesses.",
    url: `${siteUrl}/services`,
    siteName,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "GillOps AI Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services for Dentists, Law Firms & Salons | GillOps",
    description: "Custom AI automation, chatbots, CRM systems, and websites built for local businesses.",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export const workMetadata: Metadata = {
  title: "Client Results & Automation Case Studies | GillOps",
  description: "See how GillOps transforms local businesses with AI automation, websites, and lead generation. Real case studies with real results.",
  keywords: [
    "AI automation case studies",
    "client results",
    "automation portfolio",
    "website design portfolio",
    "local business automation results",
  ],
  alternates: {
    canonical: `${siteUrl}/work`,
  },
  openGraph: {
    title: "Client Results & Automation Case Studies | GillOps",
    description: "See how GillOps transforms local businesses with AI automation, websites, and lead generation. Real case studies with real results.",
    url: `${siteUrl}/work`,
    siteName,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "GillOps Client Results & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Results & Automation Case Studies | GillOps",
    description: "See how GillOps transforms local businesses with AI automation, websites, and lead generation.",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export const contactMetadata: Metadata = {
  title: "Book Your Free AI Systems Audit | GillOps",
  description: "Book a free AI systems audit and discover where your business is leaking leads. Get a custom automation plan in 30 minutes.",
  keywords: [
    "free AI audit",
    "AI systems audit",
    "book AI automation consultation",
    "free website audit",
    "automation consultation",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Book Your Free AI Systems Audit | GillOps",
    description: "Book a free AI systems audit and discover where your business is leaking leads.",
    url: `${siteUrl}/contact`,
    siteName,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Book Your Free AI Systems Audit - GillOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Free AI Systems Audit | GillOps",
    description: "Book a free AI systems audit and discover where your business is leaking leads.",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export const aiAutomationMetadata: Metadata = {
  title: "AI Automation Systems That Convert Leads Faster | GillOps",
  description: "Discover AI automation systems that capture, qualify, and convert leads 24/7. AI receptionists, chatbots, and CRM automation for local businesses.",
  keywords: [
    "AI automation systems",
    "lead automation",
    "AI receptionist",
    "AI chatbot for business",
    "automated lead conversion",
    "CRM automation",
  ],
  alternates: {
    canonical: `${siteUrl}/work/ai-automation`,
  },
  openGraph: {
    title: "AI Automation Systems That Convert Leads Faster | GillOps",
    description: "Discover AI automation systems that capture, qualify, and convert leads 24/7.",
    url: `${siteUrl}/work/ai-automation`,
    siteName,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "GillOps AI Automation Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Systems That Convert Leads Faster | GillOps",
    description: "Discover AI automation systems that capture, qualify, and convert leads 24/7.",
    images: [`${siteUrl}/og-image.jpg`],
  },
};
