"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const PHONE = "917740002634";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi GILLOPS, I'm ${formData.name}${formData.company ? ` from ${formData.company}` : ""}. ${formData.message}`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-white border border-[#E2DFD9]/60 p-8">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1B1918] mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD9] text-[#1B1918] placeholder:text-[#4A453F]/50 focus:outline-none focus:border-[#C8644E] focus:ring-2 focus:ring-[#C8644E]/15 transition-all duration-300"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[#1B1918] mb-2">
          Company (optional)
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD9] text-[#1B1918] placeholder:text-[#4A453F]/50 focus:outline-none focus:border-[#C8644E] focus:ring-2 focus:ring-[#C8644E]/15 transition-all duration-300"
          placeholder="Your company"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1B1918] mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD9] text-[#1B1918] placeholder:text-[#4A453F]/50 focus:outline-none focus:border-[#C8644E] focus:ring-2 focus:ring-[#C8644E]/15 transition-all duration-300 resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#1DA851] transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.25)] active:scale-[0.98]"
      >
        <MessageCircle className="w-5 h-5" />
        Send via WhatsApp
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
}
