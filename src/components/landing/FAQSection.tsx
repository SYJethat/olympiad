"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section className="py-20 px-6 bg-background border-t border-zinc-200/50 dark:border-zinc-900">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#007799] max-w-xl mx-auto text-xs font-bold">
            Check here for details regarding eligibility, exam platforms, and medal criteria.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-xl bg-white dark:bg-zinc-900 overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-5 text-left font-extrabold text-xs md:text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
              >
                <span className="font-display pr-4">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform duration-300 ${faqOpen[idx] ? "rotate-180 text-[#007799]" : "text-zinc-400"}`} />
              </button>
              
              {faqOpen[idx] && (
                <div className="px-5 pb-5 pt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-850 font-semibold">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
