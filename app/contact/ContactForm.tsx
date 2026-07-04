"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "" });
      }, 3000);
    } catch {
      setError("Failed to send. Please try again or email us directly.");
      setLoading(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div className="text-center py-20 rounded-2xl bg-white border border-[#E2DFD9]/60">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-[#1B1918] mb-2">
            Message sent!
          </h3>
          <p className="text-[#4A453F]">
            We will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-white border border-[#E2DFD9]/60 p-8">
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
              {error}
            </div>
          )}
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
            <label htmlFor="email" className="block text-sm font-medium text-[#1B1918] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD9] text-[#1B1918] placeholder:text-[#4A453F]/50 focus:outline-none focus:border-[#C8644E] focus:ring-2 focus:ring-[#C8644E]/15 transition-all duration-300"
              placeholder="you@company.com"
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
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C8644E] text-white font-medium rounded-full hover:bg-[#B5543F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,100,78,0.2)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send message"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      )}
    </>
  );
}
