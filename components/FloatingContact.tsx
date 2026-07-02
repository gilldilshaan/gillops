"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const phoneNumber = "+917740002634"; // India number with country code
  const email = "gill0px@gmail.com";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Gmail */}
      <motion.a
        href={`mailto:${email}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg shadow-black/8 border border-[#E2DFD9]/60 hover:border-[#C8644E]/30 hover:shadow-xl transition-all duration-300"
        aria-label="Email us"
      >
        <Mail className="w-5 h-5 text-[#C8644E]" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-[#1B1918] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Email us
        </span>
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=Hi%20GILLOPS%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/25 border border-white/20 hover:shadow-xl transition-all duration-300"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-[#1B1918] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp us
        </span>
      </motion.a>
    </div>
  );
}
