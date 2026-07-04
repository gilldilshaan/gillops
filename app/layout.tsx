import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";
import FloatingContact from "@/components/FloatingContact";
import SmoothScrollProvider from "@/components/SmoothScroll";
import { homeMetadata } from "./metadata";

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

export const metadata: Metadata = homeMetadata;

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
