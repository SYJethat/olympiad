"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, 
  Home, 
  BookOpen, 
  Download, 
  GraduationCap, 
  Cpu, 
  Award, 
  Sparkles,
  Search,
  BookOpenCheck,
  ChevronDown
} from "lucide-react"

const TRACKS_DATA = [
  {
    id: "middle",
    track: "Middle Track (Class 6-8)",
    badge: "Middle Explorers",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200/50",
    desc: "Introducing foundational grammar syntax, Subhashitas recitation, and everyday conversation structures.",
    syllabusLink: "#",
    subjects: ["Sanskrit Grammar", "Subhashitas (Moral Maxims)", "Simple Sentence Conjugation", "Interactive Word Association"],
    topics: [
      "Varnamala (Sanskrit Alphabets) & Pronunciation rules",
      "Basic Shabdarupa (Noun declensions - Ram, Lata, Phal)",
      "Basic Dhaturupa (Verb conjugations - Path, Likha, Vad in Lat lakar)",
      "Translation of short, simple sentences",
      "Memorization and meaning of five selected Subhashitas"
    ]
  },
  {
    id: "secondary",
    track: "Secondary Track (Class 9-10)",
    badge: "Secondary Scholars",
    color: "text-blue-700 bg-blue-50 border-blue-200/50",
    desc: "Delving into complex grammatical structures, Sandhi principles, and introductory literature.",
    syllabusLink: "#",
    subjects: ["Sandhi & Samasa", "Karakas & Vibhakti", "Epic Literature (Ramayana/Mahabharata)", "Comprehension & Essay Writing"],
    topics: [
      "Svara, Vyanjana & Visarga Sandhis",
      "Detailed Karaka rules and Vibhakti application",
      "Samasa (Avyayibhava, Tatpurusha, Dvandva, Bahuvrihi)",
      "Reading comprehension of unfamiliar Sanskrit passages",
      "Short essay writing and translation of complex sentences"
    ]
  },
  {
    id: "senior",
    track: "Senior Secondary (Class 11-12)",
    badge: "Senior Achievers",
    color: "text-indigo-700 bg-indigo-50 border-indigo-200/50",
    desc: "Focusing on Paninian grammar, computational aspects of Sanskrit, and classical drama texts.",
    syllabusLink: "#",
    subjects: ["Paninian Grammar Logic", "Computational Linguistics", "Vedic Suktas", "Classical Poetry & Drama"],
    topics: [
      "Ashtadhyayi structure and Maheshvara Sutras",
      "Introduction to Sanskrit and Artificial Intelligence (computational syntax)",
      "Study of selected verses from Raghuvamsha or Kumarasambhava",
      "Introduction to Vedic grammar (selected mantras from Rigveda)",
      "Pratyayas (Krit, Taddhita, Stree Pratyaya)"
    ]
  },
  {
    id: "undergraduate",
    track: "Undergraduate Track (Year 1-3)",
    badge: "UG Professionals",
    color: "text-purple-700 bg-purple-50 border-purple-200/50",
    desc: "Rigorous study of Indian Knowledge Systems, classical commentaries, and advanced linguistics.",
    syllabusLink: "#",
    subjects: ["Vedic Literature", "Siddhantakaumudi Grammar", "Indian Philosophy (Darshanas)", "Sanskrit Poetics & Aesthetics"],
    topics: [
      "Veda, Upanishad and Brahmana selections",
      "Siddhantakaumudi (Karaka and Samasa prakaranas)",
      "Introduction to Shad-Darshanas (Six philosophical systems)",
      "Kavyashastra (Sahityadarpana or Kavyaprakasha selections)",
      "Historical development of Sanskrit and Indo-European linguistics"
    ]
  },
  {
    id: "postgraduate",
    track: "Postgraduate & Research",
    badge: "Research Scholars",
    color: "text-rose-700 bg-rose-50 border-rose-200/50",
    desc: "Advanced research methodologies, ancient scientific treatises, and manuscriptology.",
    syllabusLink: "#",
    subjects: ["Manuscriptology & Paleography", "Ancient Indian Sciences", "Advanced Nyaya & Vyakarana", "Comparative Philosophy"],
    topics: [
      "Deciphering Brahmi, Sharada, and Nandinagari scripts",
      "Sanskrit treatises on Astronomy (Aryabhatiya), Mathematics, and Ayurveda",
      "Deep-dive into Mahabhashya or Vakyapadiya",
      "Thesis formulation and modern research methodologies in Sanskrit",
      "Epigraphy and ancient inscriptions study"
    ]
  }
]

export default function ClassesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedTrack, setExpandedTrack] = useState<string | null>("middle")

  const filteredTracks = TRACKS_DATA.filter(track =>
    track.track.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.badge.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.subjects.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      {/* Hero Header Banner */}
      <section className="w-full bg-mesh py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex text-slate-500 text-xs font-bold items-center gap-1 mb-4">
            <a href="/" className="hover:text-[#0092BC] transition-colors">
              <Home className="h-4 w-4" />
            </a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-400">Classes & Syllabus</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0092BC] tracking-tight">
            Curriculum & Syllabus
          </h1>
          <p className="text-sm md:text-base text-[#0092BC]/80 mt-3 max-w-3xl leading-relaxed">
            Explore carefully structured Sanskrit courses and examinations mapped across secondary education to advanced doctoral research tracks.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Tracks, Search and Accordions */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Search Box */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
            <Search className="h-5 w-5 text-slate-400 flex-shrink-0" />
            <input 
              type="text"
              placeholder="Search tracks, subjects, or levels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-800 focus:outline-none placeholder-slate-400 font-medium"
            />
          </div>

          {/* Tracks List */}
          <div className="space-y-4">
            {filteredTracks.length > 0 ? (
              filteredTracks.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    expandedTrack === item.id 
                      ? "border-[#007799] shadow-md" 
                      : "border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => setExpandedTrack(expandedTrack === item.id ? null : item.id)}
                    className="w-full p-6 flex justify-between items-center text-left gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${item.color}`}>
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-black text-slate-800">
                        {item.track}
                      </h3>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-slate-450 transition-transform duration-300 ${
                      expandedTrack === item.id ? "rotate-180 text-[#007799]" : ""
                    }`} />
                  </button>

                  {/* Accordion Expandable Content */}
                  <AnimatePresence initial={false}>
                    {expandedTrack === item.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-t border-slate-100"
                      >
                        <div className="p-6 bg-slate-50/50 space-y-6">
                          <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                            {item.desc}
                          </p>

                          {/* Focus Subjects */}
                          <div className="space-y-2">
                            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                              <BookOpenCheck className="h-4 w-4 text-[#007799]" />
                              Core Focus Subjects
                            </h4>
                            <div className="flex flex-wrap gap-2 pt-1">
                              {item.subjects.map((sub, idx) => (
                                <span key={idx} className="bg-white border border-slate-200 text-slate-700 text-xs px-3 py-1 rounded-xl font-semibold shadow-2xs">
                                  {sub}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Detailed Syllabus Topics */}
                          <div className="space-y-2.5">
                            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                              Key Topics & Syllabus Areas
                            </h4>
                            <ul className="space-y-2">
                              {item.topics.map((topic, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-slate-650 font-medium">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#007799] mt-1.5 flex-shrink-0" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Action Button */}
                          <div className="pt-2 flex justify-start">
                            <a
                              href={item.syllabusLink}
                              className="inline-flex items-center gap-2 bg-[#007799] hover:bg-[#005577] text-white px-5 py-3 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider"
                            >
                              <Download className="h-4 w-4" />
                              <span>Download PDF Syllabus</span>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
                <p className="text-sm font-bold text-slate-500">No syllabus tracks found matching your search term.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Quick Downloads, PYQs, Highlights */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Previous Year Papers Block */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <Award className="h-5 w-5 text-[#007799]" />
              Previous Year Papers
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Attempt historical test formats to understand question weights and grammar levels.
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { title: "Sanskrit Olympiad 2024 (All Tracks)", link: "#" },
                { title: "Sanskrit Olympiad 2023 (All Tracks)", link: "#" },
                { title: "International Gita Contest 2024", link: "#" }
              ].map((pyq, idx) => (
                <a 
                  key={idx}
                  href={pyq.link}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200/85 hover:border-[#007799] bg-slate-50/40 hover:bg-white transition-all group cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-slate-700 group-hover:text-[#007799] transition-colors">{pyq.title}</span>
                  <Download className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#007799] transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Exam Guidelines Highlights */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#007799]" />
              Exam Guidelines
            </h3>
            <div className="space-y-3">
              {[
                { title: "Duration", desc: "90 Minutes duration containing multiple sections." },
                { title: "Format", desc: "Online gamified format with instant feedback and scoring." },
                { title: "Negative Marking", desc: "No negative markings for wrong attempts." },
                { title: "Language Options", desc: "Question paper will be available in Sanskrit, Hindi, and English." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <h5 className="text-xs font-black text-slate-700 uppercase tracking-wide">{item.title}</h5>
                  <p className="text-[10.5px] text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}