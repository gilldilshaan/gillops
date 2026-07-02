"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Typically 2 to 4 weeks, depending on the complexity and number of pages. Rush delivery is available for urgent projects.",
  },
  {
    q: "What AI tools do you use?",
    a: "We use a combination of custom AI pipelines, GPT-4, and industry-leading automation tools tailored to your specific needs.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. We handle all the technical setup and provide a simple dashboard for you to monitor and manage everything.",
  },
  {
    q: "What results can I expect from SEO?",
    a: "Most clients see a 3x increase in organic traffic within 90 days, with significant improvements in keyword rankings.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes, we offer a 30-day money-back guarantee if you are not satisfied with our services. Your satisfaction is our priority.",
  },
  {
    q: "Where are you based?",
    a: "We are based in India and work remotely with clients across the globe. We offer flexible scheduling for all time zones.",
  },
];

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#F9F6F1] py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-[#1B1918] mb-6 leading-tight">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="divide-y divide-[#E2DFD9]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="font-medium text-[#1B1918] group-hover:text-[#C8644E] transition-colors pr-4 text-left">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-[#E2DFD9] flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-[#C8644E]/10 border-[#C8644E]/30 rotate-45" : "bg-white"
                    }`}
                  >
                    <Plus size={14} className={isOpen ? "text-[#C8644E]" : "text-[#9E9B93]"} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-[#6B6863] leading-relaxed pb-6 pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
