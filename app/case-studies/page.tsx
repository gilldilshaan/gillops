import { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "AI Automation Case Studies | Client Results | GillOps",
  description:
    "Explore real-world AI automation and web development case studies. See how GillOps helped local businesses increase leads, reduce costs, and grow revenue.",
  alternates: {
    canonical: "https://gillops.dpdns.org/case-studies",
  },
  openGraph: {
    title: "AI Automation Case Studies | Client Results | GillOps",
    description:
      "Explore real-world AI automation and web development case studies. See how GillOps helped local businesses increase leads, reduce costs, and grow revenue.",
    url: "https://gillops.dpdns.org/case-studies",
    siteName: "GillOps",
    type: "website",
    images: [
      {
        url: "https://gillops.dpdns.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GillOps AI Automation Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Case Studies | Client Results | GillOps",
    description:
      "Explore real-world AI automation and web development case studies.",
    images: ["https://gillops.dpdns.org/og-image.jpg"],
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}

