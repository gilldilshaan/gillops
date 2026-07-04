import { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Footer from "@/sections/Footer";
import { homeMetadata } from "./metadata";

const Navigation = dynamic(() => import("@/sections/Navigation"), { ssr: false });
const FloatingContact = dynamic(() => import("@/components/FloatingContact"), { ssr: false });

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
  ...homeMetadata,
  other: {
    "google-site-verification": "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
