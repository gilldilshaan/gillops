"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const overlayRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const firstLink = overlayRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen, close]);

  return (
    <>
      <nav
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 animate-nav-slide"
      >
        <div
          className={`flex items-center justify-between gap-1 pl-2 pr-1.5 py-1.5 rounded-full border ${navBg} transition-all duration-500 w-full max-w-fit`}
        >
          <Link
            href="/"
            className={`shrink-0 font-heading font-bold text-lg tracking-tight px-4 py-2 ${textColor}`}
          >
            GILL<span className="text-[#C8644E]">OPS</span>
          </Link>

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

          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#C8644E] text-white text-sm font-medium rounded-full hover:bg-[#B5543F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,100,78,0.25)] shrink-0"
          >
            Book a call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 items-center">
              <span className={`block w-5 h-[1.5px] origin-center transition-all duration-300 ${scrolled ? "bg-[#1B1918]" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? "bg-[#1B1918]" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] origin-center transition-all duration-300 ${scrolled ? "bg-[#1B1918]" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-40 bg-[#1B1918]/95 backdrop-blur-2xl md:hidden flex items-center justify-center transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}`}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {navLinks.map((item, i) => (
            <div
              key={item.name}
              style={{ transitionDelay: `${i * 0.1}s` }}
              className={`transition-all duration-500 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
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
            </div>
          ))}
          <div
            style={{ transitionDelay: `${navLinks.length * 0.1}s` }}
            className={`transition-all duration-500 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8644E] text-white font-medium rounded-full hover:bg-[#B5543F] transition-all duration-300"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
