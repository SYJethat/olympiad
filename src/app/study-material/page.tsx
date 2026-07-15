"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, 
  Home, 
  Download, 
  FileText, 
  Volume2, 
  Sparkles, 
  Search, 
  ArrowRight,
  BookOpen
} from "lucide-react"

const STUDY_MATERIALS = [
  {
    title: "Ashtadhyayi Grammar Guide",
    category: "grammar",
    size: "2.4 MB",
    downloads: "12,450",
    desc: "A simplified manual detailing the sutras, Maheshvara formula, and basic sandhis for school levels.",
    type: "PDF",
    premium: false
  },
  {
    title: "Shloka & Subhashitas Compendium",
    category: "literature",
    size: "5.1 MB",
    downloads: "8,920",
    desc: "Selected shlokas with word-for-word grammatical meanings, phonetic charts, and audio link access.",
    type: "PDF + Audio",
    premium: false
  },
  {
    title: "Sanskrit & Computational Linguistics",
    category: "computational",
    size: "1.8 MB",
    downloads: "4,560",
    desc: "Exploring Panini's algorithmic structures and why modern NLP models utilize Sanskrit syntax.",
    type: "PDF Document",
    premium: true
  },
  {
    title: "Word & Verb Conjugation Charts",
    category: "grammar",
    size: "3.2 MB",
    downloads: "15,800",
    desc: "Complete tables of standard noun declensions (Shabdarupa) and verb conjugations (Dhaturupa) for quick revision.",
    type: "Cheat Sheet PDF",
    premium: false
  },
  {
    title: "Introduction to Upanishads & Epics",
    category: "literature",
    size: "4.5 MB",
    downloads: "6,700",
    desc: "Brief historical contexts of the Ramayana, Mahabharata, and key philosophical tenets of the Upanishads.",
    type: "E-Book",
    premium: true
  }
]

const FLASHCARDS = [
  { word: "पुस्तकम (Pustakam)", meaning: "Book", category: "Nouns" },
  { word: "शिक्षकः (Shikshakah)", meaning: "Teacher", category: "Nouns" },
  { word: "गच्छति (Gacchati)", meaning: "Goes", category: "Verbs" },
  { word: "सुन्दरम् (Sundaram)", meaning: "Beautiful", category: "Adjectives" },
  { word: "सत्यमेव जयते", meaning: "Truth alone triumphs", category: "Subhashitas" }
]

export default function StudyMaterialPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [flippedCardIdx, setFlippedCardIdx] = useState<number | null>(null)

  const filteredMaterials = STUDY_MATERIALS.filter(item => {
    const matchesCategory = activeFilter === "all" || item.category === activeFilter
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      
      {/* Hero Banner */}
      <section className="w-full bg-mesh py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex text-slate-500 text-xs font-bold items-center gap-1 mb-4">
            <a href="/" className="hover:text-[#0092BC] transition-colors">
              <Home className="h-4 w-4" />
            </a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-400">Study Material</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0092BC] tracking-tight">
            Study Material & Guides
          </h1>
          <p className="text-sm md:text-base text-[#0092BC]/80 mt-3 max-w-3xl leading-relaxed">
            Boost your Sanskrit knowledge with curriculum notes, grammar cheat sheets, and computational Sanskrit research papers.
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Resources list */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Filters and Search Bar */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200/60">
              <Search className="h-4.5 w-4.5 text-slate-400 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Search literature, grammar formulas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-xs text-slate-800 focus:outline-none placeholder-slate-400 font-semibold"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100/80">
              {[
                { id: "all", label: "All Materials" },
                { id: "grammar", label: "Vyakarana (Grammar)" },
                { id: "literature", label: "Sahitya (Literature)" },
                { id: "computational", label: "Computational Sanskrit" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-[10.5px] font-bold tracking-wide transition-all border cursor-pointer ${
                    activeFilter === tab.id 
                      ? "bg-[#007799] border-[#007799] text-white shadow-xs" 
                      : "bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Cards */}
          <div className="space-y-4">
            {filteredMaterials.length > 0 ? (
              filteredMaterials.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="space-y-2 text-left max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border ${
                        item.category === "grammar" ? "text-emerald-700 bg-emerald-50 border-emerald-100" :
                        item.category === "literature" ? "text-indigo-700 bg-indigo-50 border-indigo-100" :
                        "text-purple-700 bg-purple-50 border-purple-100"
                      }`}>
                        {item.category}
                      </span>
                      {item.premium && (
                        <span className="bg-amber-100 text-amber-800 text-[8px] font-black uppercase px-1.5 py-0.5 rounded border border-amber-200 tracking-wider">
                          Premium resource
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-black text-slate-800 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                    <div className="flex gap-4 text-[10px] text-slate-400 font-bold">
                      <span>Size: {item.size}</span>
                      <span>Format: {item.type}</span>
                      <span>Downloads: {item.downloads}+</span>
                    </div>
                  </div>

                  <button className="bg-slate-50 border border-slate-200 hover:border-[#007799] hover:bg-white text-slate-700 hover:text-[#007799] px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 uppercase tracking-wide cursor-pointer w-full sm:w-auto justify-center">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
                <p className="text-sm font-bold text-slate-500">No resources found matching search filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Interactive Flashcards */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#007799]" />
              Sanskrit Flashcards
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Click a flashcard below to test your Sanskrit translation skill by flipping it.
            </p>

            <div className="space-y-3.5 pt-2">
              {FLASHCARDS.map((card, idx) => {
                const isFlipped = flippedCardIdx === idx
                return (
                  <div 
                    key={idx}
                    onClick={() => setFlippedCardIdx(isFlipped ? null : idx)}
                    className="h-24 w-full cursor-pointer relative perspective"
                  >
                    <div className={`w-full h-full duration-500 preserve-3d relative ${isFlipped ? "rotate-y-180" : ""}`}>
                      
                      {/* Front Side */}
                      <div className="absolute inset-0 bg-slate-50 hover:bg-slate-100 border border-slate-250/80 rounded-2xl p-4 flex flex-col justify-between items-start backface-hidden">
                        <span className="text-[9px] font-black uppercase text-[#007799] tracking-wider">{card.category}</span>
                        <h4 className="text-sm font-black text-slate-800 select-none">{card.word}</h4>
                        <span className="text-[9px] font-bold text-slate-450 flex items-center gap-1 self-end">
                          Click to Flip <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 bg-[#007799] text-white border border-[#007799] rounded-2xl p-4 flex flex-col justify-between items-start rotate-y-180 backface-hidden">
                        <span className="text-[9px] font-black uppercase text-white/70 tracking-wider">Meaning</span>
                        <h4 className="text-sm font-black select-none">{card.meaning}</h4>
                        <span className="text-[9px] font-bold text-white/70 flex items-center gap-1 self-end">
                          Click to Reset <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-[#007799]/5 border border-[#007799]/15 rounded-2xl p-6 space-y-4">
            <h4 className="text-xs font-black text-[#007799] uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="h-4.5 w-4.5" />
              Little Guru App
            </h4>
            <p className="text-[10px] text-slate-600 leading-relaxed font-semibold">
              Unlock the full gamified Sanskrit courses, dictionary terms, and sentence builder exercises on our partner mobile app.
            </p>
            <a 
              href="https://littleguru.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-black text-[#007799] uppercase tracking-wider hover:underline"
            >
              <span>Download Mobile App</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}