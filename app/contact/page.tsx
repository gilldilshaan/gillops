"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Check } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gill0px@gmail.com",
    href: "mailto:gill0px@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 774-000-2634",
    href: "tel:+917740002634",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India (Remote)",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
    <section className="relative bg-[#F9F6F1] min-h-screen pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="mb-16"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1918] mb-6 leading-tight">
            Let&apos;s talk
          </h1>
          <p className="text-lg text-[#6B6863] max-w-2xl leading-relaxed">
            Have a project in mind? Want to discuss how we can help your business grow?
            Book a free call or send us a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeCurve }}
          >
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E2DFD9]/60 hover:
                    hover:border-[#C8644E]/15 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#C8644E]/8 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#C8644E]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#9E9B93] uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[#1B1918] font-medium group-hover:text-[#C8644E] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 p-8 rounded-2xl bg-[#F0EDE7] border border-[#E2DFD9]/40">
              <h3 className="font-heading text-xl font-bold text-[#1B1918] mb-2">
                Prefer to talk?
              </h3>
              <p className="text-[#6B6863] text-sm mb-6">
                Book a free 30-minute call to discuss your project.
              </p>
              <a
                href="https://calendly.com/gill0px/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B1918] text-white font-medium rounded-full hover:bg-[#2A2725] transition-all duration-300"
              >
                Book a free call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeCurve }}
          >
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1B1918] mb-2">
                  Message sent!
                </h3>
                <p className="text-[#6B6863]">
                  We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD9] text-[#1B1918] placeholder:text-[#9E9B93] focus:outline-none focus:border-[#C8644E] focus:ring-2 focus:ring-[#C8644E]/15 transition-all duration-300"
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
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD9] text-[#1B1918] placeholder:text-[#9E9B93] focus:outline-none focus:border-[#C8644E] focus:ring-2 focus:ring-[#C8644E]/15 transition-all duration-300"
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
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD9] text-[#1B1918] placeholder:text-[#9E9B93] focus:outline-none focus:border-[#C8644E] focus:ring-2 focus:ring-[#C8644E]/15 transition-all duration-300"
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
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2DFD9] text-[#1B1918] placeholder:text-[#9E9B93] focus:outline-none focus:border-[#C8644E] focus:ring-2 focus:ring-[#C8644E]/15 transition-all duration-300 resize-none"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
