"use client";

import { Mail, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const phoneNumber = "+917740002634";
  const email = "gill0px@gmail.com";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 [&>a]:opacity-0 [&>a]:animate-[float-in_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
      <a
        href={`mailto:${email}`}
        style={{ animationDelay: "1.2s" }}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg shadow-black/8 border border-[#E2DFD9]/60 hover:border-[#C8644E]/30 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
        aria-label="Email us"
      >
        <Mail className="w-5 h-5 text-[#C8644E]" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-[#1B1918] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Email us
        </span>
      </a>

      <a
        href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=Hi%20GILLOPS%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ animationDelay: "1.4s" }}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/25 border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-[#1B1918] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp us
        </span>
      </a>
    </div>
  );
}
