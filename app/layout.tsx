import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";
import FloatingContact from "@/components/FloatingContact";
import SmoothScrollProvider from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gillops.vercel.app"),
  title: "GILLOPS — Websites, AI Automation & SEO for Growing Businesses",
  description:
    "AI automation agency for small businesses. GILLOPS designs and builds websites, AI automation, and SEO systems that drive real growth.",
  keywords: [
    "AI automation agency",
    "web development",
    "SEO services",
    "business automation",
    "website design",
    "AI chatbot",
    "LinkedIn automation",
    "Google Maps scraper",
  ],
  openGraph: {
    title: "GILLOPS — Websites, AI Automation & SEO for Growing Businesses",
    description:
      "AI automation agency for small businesses. GILLOPS designs and builds websites, AI automation, and SEO systems that drive real growth.",
    url: "https://gillops.vercel.app",
    siteName: "GILLOPS",
    type: "website",
    images: [
      {
        url: "https://gillops.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GILLOPS — Websites, AI Automation & SEO for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GILLOPS — Websites, AI Automation & SEO for Growing Businesses",
    description:
      "AI automation agency for small businesses. GILLOPS designs and builds websites, AI automation, and SEO systems that drive real growth.",
    images: ["https://gillops.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
