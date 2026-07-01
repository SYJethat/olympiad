"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is the Sanskrit Olympiad?",
    a: "The Sanskrit Olympiad is a pioneer initiative organized by Central Sanskrit University in collaboration with Little Guru. It uses the world's first gamified learning platform to help students learn the language and culture playfully.",
  },
  {
    q: "Who is eligible to participate?",
    a: "Students from school classes (Primary Class 1 to Class 12) as well as university students (Graduation and Post-Graduation) are eligible to register in their respective category brackets.",
  },
  {
    q: "What are the prizes and medals?",
    a: "All active participants receive joint completion certificates signed by CSU and Little Guru. High-ranking toppers will win special national-grade medals and scholarship opportunities.",
  },
];

export default function FAQSection() {
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  const toggleFaq = (idx: number) => {
    setFaqOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="py-20 px-6 bg-white border-t border-zinc-200/50 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#007799]/10 text-[#007799] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle size={13} /> Support Center
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-xs font-semibold">
            Check here for details regarding eligibility, exam platforms, and medal criteria.
          </p>
        </motion.div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = !!faqOpen[idx];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="rounded-xl bg-white overflow-hidden border border-zinc-200/60 shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-extrabold text-xs md:text-sm text-zinc-800 hover:bg-zinc-50/50 cursor-pointer transition-colors"
                >
                  <span className="font-display pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4.5 w-4.5 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-[#007799]" : "text-zinc-400"}`} />
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
                      <div className="px-5 pb-5 pt-1 text-xs text-zinc-650 leading-relaxed border-t border-zinc-100 font-semibold text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
