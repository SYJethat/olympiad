"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, BookOpen, GraduationCap, Award, FileText } from "lucide-react";

const SYLLABUS_DATA = [
  { 
    class: "Primary Track (Class 1-5)", 
    badge: "🎈 Primary Learners", 
    color: "text-teal-700 bg-teal-50 border-teal-200/50 dark:bg-teal-950/20 dark:text-teal-400 dark:border-teal-900/50", 
    desc: "Alphabet structures, moral stories, simple word mappings, and introductory pronunciation.", 
    link: "https://sanskritolympiad.in/learning" 
  },
  { 
    class: "Middle Track (Class 6-8)", 
    badge: "🚀 Middle Explorers", 
    color: "text-emerald-700 bg-emerald-50 border-emerald-200/50 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/50", 
    desc: "Subhashitas, word forms, basic sentence conjugation, and grammar quizzes.", 
    link: "https://sanskritolympiad.in/learning" 
  },
  { 
    class: "Secondary Track (Class 9-10)", 
    badge: "🎓 Secondary Scholars", 
    color: "text-amber-700 bg-amber-50 border-amber-200/50 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/50", 
    desc: "Sandhi conjugation, Samasa principles, epic literature, and boards revision sheets.", 
    link: "https://sanskritolympiad.in/learning" 
  },
  { 
    class: "Senior Secondary (Class 11-12)", 
    badge: "🧠 Senior Achievers", 
    color: "text-indigo-700 bg-indigo-50 border-indigo-200/50 dark:bg-indigo-950/20 dark:text-indigo-400 dark:border-indigo-900/50", 
    desc: "Paninian grammar logic, computational linguistic values, and advanced literature.", 
    link: "https://sanskritolympiad.in/learning" 
  },
];

export default function SyllabusSection() {
  const [syllabusTab, setSyllabusTab] = useState("all");

  return (
    <section id="syllabus" className="py-20 px-6 bg-gradient-to-b from-[#007799]/5 via-transparent to-transparent relative select-none">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#007799]/10 text-[#007799] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen size={13} /> Learning Tracks
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
            Syllabus Guidelines & PYQ Downloads
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-xs font-semibold">
            Check the curriculum structures or download previous year question papers.
          </p>
        </motion.div>

        {/* Tabs Grid */}
        <div className="flex border-b border-zinc-200 justify-center space-x-8 mb-10">
          <button
            onClick={() => setSyllabusTab("all")}
            className={`pb-3 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer relative ${
              syllabusTab === "all"
                ? "text-[#007799]"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Category Syllabi
            {syllabusTab === "all" && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007799]" />
            )}
          </button>
          <button
            onClick={() => setSyllabusTab("pyq")}
            className={`pb-3 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer relative ${
              syllabusTab === "pyq"
                ? "text-[#007799]"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Olympiad PYQs
            {syllabusTab === "pyq" && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007799]" />
            )}
          </button>
        </div>

        {/* Tab Contents Area */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {syllabusTab === "all" ? (
              <motion.div
                key="syllabi"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {SYLLABUS_DATA.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-2xl bg-white border border-zinc-200/50 hover:border-[#007799] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                  >
                    <div className="mb-4 sm:mb-0 max-w-xl space-y-2 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[9px] font-black px-2.5 py-0.5 rounded-md border tracking-wider uppercase ${item.color}`}>
                          {item.badge}
                        </span>
                        <span className="text-[10px] font-bold text-zinc-400 font-mono">
                          {item.class}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-zinc-650 leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#007799] hover:bg-[#005577] text-white px-5 py-2.5 rounded-lg text-[10px] font-extrabold shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 uppercase tracking-wide cursor-pointer"
                    >
                      <Download size={12} /> Syllabus
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="pyqs"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
              >
                {[
                  { title: "Sanskrit Olympiad 2023", link: "https://sanskritolympiad.in/prev_ques_papers/sanskrit_olympiad_2023" },
                  { title: "International Gita Olympiad 2024", link: "https://sanskritolympiad.in/prev_ques_papers/international_gita_olympiad_2024" },
                  { title: "Sanskrit Olympiad 2024", link: "https://sanskritolympiad.in/prev_ques_papers/sanskrit_olympiad_2024" },
                ].map((pyq, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="bg-white p-5 rounded-2xl border border-zinc-200/50 hover:border-[#007799] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between shadow-sm text-left"
                  >
                    <div className="space-y-2">
                      <span className="inline-flex items-center gap-1 text-[9px] bg-red-50 text-red-700 border border-red-200/55 font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        <FileText size={11} /> PDF Paper
                      </span>
                      <h4 className="font-extrabold text-xs md:text-sm text-zinc-900 mt-3">{pyq.title}</h4>
                    </div>
                    <a
                      href={pyq.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 text-center border-2 border-zinc-200 hover:border-[#007799] text-zinc-700 hover:text-[#007799] py-2.5 rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1.5 uppercase tracking-wide cursor-pointer"
                    >
                      <Download size={11} /> Get Paper
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
