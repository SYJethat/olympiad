"use client";

import React, { useState } from "react";

const SYLLABUS_DATA = [
  { class: "Primary Track (Class 1-5)", badge: "🎈 Primary Learners", color: "text-teal-600 bg-teal-50 border-teal-200 dark:bg-teal-950/20 dark:text-teal-400 dark:border-teal-900", desc: "Alphabet structures, moral stories, simple word mappings, and introductory pronunciation.", link: "https://sanskritolympiad.in/learning" },
  { class: "Middle Track (Class 6-8)", badge: "🚀 Middle Explorers", color: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900", desc: "Subhashitas, word forms, basic sentence conjugation, and grammar quizzes.", link: "https://sanskritolympiad.in/learning" },
  { class: "Secondary Track (Class 9-10)", badge: "🎓 Secondary Scholars", color: "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900", desc: "Sandhi conjugation, Samasa principles, epic literature, and boards revision sheets.", link: "https://sanskritolympiad.in/learning" },
  { class: "Senior Secondary (Class 11-12)", badge: "🧠 Senior Achievers", color: "text-indigo-600 bg-indigo-50 border-indigo-200 dark:bg-indigo-950/20 dark:text-indigo-400 dark:border-indigo-900", desc: "Paninian grammar logic, computational linguistic values, and advanced literature.", link: "https://sanskritolympiad.in/learning" },
];

export default function SyllabusSection() {
  const [syllabusTab, setSyllabusTab] = useState("all");

  return (
    <section id="syllabus" className="py-20 px-6 bg-gradient-to-b from-[#007799]/5 via-transparent to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
            Syllabus Guidelines & PYQ Downloads
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-xs font-semibold">
            Check the curriculum structures or download previous year question papers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 justify-center space-x-8 mb-8">
          <button
            onClick={() => setSyllabusTab("all")}
            className={`pb-3 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              syllabusTab === "all"
                ? "border-b-2 border-[#007799] text-[#007799]"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Category Syllabi
          </button>
          <button
            onClick={() => setSyllabusTab("pyq")}
            className={`pb-3 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              syllabusTab === "pyq"
                ? "border-b-2 border-[#007799] text-[#007799]"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Olympiad PYQs
          </button>
        </div>

        {/* Tab Contents */}
        <div className="mt-6">
          {syllabusTab === "all" ? (
            <div className="space-y-4">
              {SYLLABUS_DATA.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-[#007799] dark:hover:border-[#007799] transition-all duration-300 shadow-sm"
                >
                  <div className="mb-4 sm:mb-0 max-w-xl space-y-2 text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md border tracking-wider ${item.color}`}>
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 font-mono">
                        {item.class}
                      </span>
                    </div>
                    <p className="text-[10.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#007799] hover:bg-[#005577] text-white px-5 py-2.5 rounded-lg text-[10px] font-extrabold shadow-sm transition-all duration-200"
                  >
                    Download Syllabus
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: "Sanskrit Olympiad 2023", link: "https://sanskritolympiad.in/prev_ques_papers/sanskrit_olympiad_2023" },
                { title: "International Gita Olympiad 2024", link: "https://sanskritolympiad.in/prev_ques_papers/international_gita_olympiad_2024" },
                { title: "Sanskrit Olympiad 2024", link: "https://sanskritolympiad.in/prev_ques_papers/sanskrit_olympiad_2024" },
              ].map((pyq, idx) => (
                <div 
                  key={idx}
                  className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 hover:border-[#007799] transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-2">
                    <span className="text-[9px] bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400 font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      PDF Paper
                    </span>
                    <h4 className="font-extrabold text-xs md:text-sm text-zinc-900 dark:text-zinc-100 mt-3">{pyq.title}</h4>
                  </div>
                  <a
                    href={pyq.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-center border-2 border-zinc-200 dark:border-zinc-800 hover:border-[#007799] text-zinc-700 dark:text-zinc-300 hover:text-[#007799] dark:hover:text-[#007799] py-2.5 rounded-lg text-[10px] font-bold transition-all"
                  >
                    Get Paper PDF
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
