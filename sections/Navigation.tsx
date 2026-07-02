"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navBg = scrolled
    ? "bg-[#F9F6F1]/90 backdrop-blur-xl border-[#E2DFD9]/50 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]"
    : "bg-white/10 backdrop-blur-md border-white/15 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]";

  const textColor = scrolled ? "text-[#1B1918]" : "text-white";
  const textMuted = scrolled ? "text-[#6B6863]" : "text-white/70";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`flex items-center justify-between gap-1 pl-2 pr-1.5 py-1.5 rounded-full border ${navBg} transition-all duration-500 w-full max-w-fit`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`shrink-0 font-heading font-bold text-lg tracking-tight px-4 py-2 ${textColor}`}
          >
            GILL<span className="text-[#C8644E]">OPS</span>
          </Link>

          {/* Desktop links - centered */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                  isActive(item.href)
                    ? scrolled
                      ? "text-[#1B1918] bg-[#C8644E]/10"
                      : "text-white bg-white/10"
                    : scrolled
                      ? "text-[#6B6863] hover:text-[#1B1918] hover:bg-[#1B1918]/5"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#C8644E] text-white text-sm font-medium rounded-full hover:bg-[#B5543F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,100,78,0.25)] shrink-0"
          >
            Book a call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 items-center">
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
                className={`block w-5 h-[1.5px] ${scrolled ? "bg-[#1B1918]" : "bg-white"} origin-center`}
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className={`block w-5 h-[1.5px] ${scrolled ? "bg-[#1B1918]" : "bg-white"}`}
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
                className={`block w-5 h-[1.5px] ${scrolled ? "bg-[#1B1918]" : "bg-white"} origin-center`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1B1918]/95 backdrop-blur-2xl md:hidden flex items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center gap-8">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-4xl font-heading font-bold tracking-tight transition-colors duration-300 ${
                      isActive(item.href) ? "text-[#C8644E]" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8644E] text-white font-medium rounded-full hover:bg-[#B5543F] transition-all duration-300"
                >
                  Book a call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
