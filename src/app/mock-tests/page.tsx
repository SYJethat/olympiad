"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, 
  Home, 
  Trophy, 
  Play, 
  Clock, 
  FileText, 
  HelpCircle,
  AlertCircle,
  X,
  CheckCircle,
  Laptop
} from "lucide-react"

const MOCK_TESTS = [
  {
    id: "middle",
    title: "Middle Track Mock Test",
    subtitle: "Class 6 to 8",
    questions: 30,
    duration: 45,
    difficulty: "Easy",
    color: "from-emerald-500 to-teal-600",
    desc: "Basic grammar declensions, simple Sanskrit vocabulary, and moral Subhashitas recitation patterns."
  },
  {
    id: "secondary",
    title: "Secondary Track Mock Test",
    subtitle: "Class 9 & 10",
    questions: 40,
    duration: 60,
    difficulty: "Medium",
    color: "from-blue-500 to-indigo-600",
    desc: "Sandhi principles, Samasa identification, basic Upanishadic stories, and sentence translations."
  },
  {
    id: "senior",
    title: "Senior Secondary Mock Test",
    subtitle: "Class 11 & 12",
    questions: 50,
    duration: 75,
    difficulty: "Medium-Hard",
    color: "from-indigo-500 to-purple-600",
    desc: "Paninian sutras, introduction to computational structures of Sanskrit, and classical prose/poetry metrics."
  },
  {
    id: "undergraduate",
    title: "Undergraduate Track Mock Test",
    subtitle: "UG College Students",
    questions: 60,
    duration: 90,
    difficulty: "Hard",
    color: "from-purple-500 to-pink-600",
    desc: "Vedic grammar paradigms, classical drama commentaries (Kalidasa, Bhasa), and history of Sanskrit poetics."
  },
  {
    id: "postgraduate",
    title: "Postgraduate & Research Mock Test",
    subtitle: "PG & PhD Scholars",
    questions: 60,
    duration: 90,
    difficulty: "Expert",
    color: "from-rose-500 to-red-600",
    desc: "Manuscriptology script decryptions, ancient sciences in Sanskrit (Vaimānika Shāstra, Aryabhatiya), and deep Nyaya logic."
  }
]

const TOP_PERFORMERS = [
  { rank: 1, name: "Aravind Swamy", track: "Senior Secondary", score: "98/100", time: "42 min" },
  { rank: 2, name: "Prerna Sharma", track: "Secondary Track", score: "96/100", time: "38 min" },
  { rank: 3, name: "Shruti Hegde", track: "Undergraduate Track", score: "95/100", time: "55 min" },
  { rank: 4, name: "Rohan Shastri", track: "Postgraduate Track", score: "94/100", time: "68 min" }
]

export default function MockTestsPage() {
  const [selectedTest, setSelectedTest] = useState<typeof MOCK_TESTS[0] | null>(null)
  const [simulationStarted, setSimulationStarted] = useState(false)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [testSubmitted, setTestSubmitted] = useState(false)

  // Dummy questions for simulation
  const dummyQuestions = [
    {
      q: "Which letter is a Swara (vowel) in Sanskrit Varnamala?",
      options: ["क", "इ", "त", "म"],
      correct: "इ"
    },
    {
      q: "What is the root verb (Dhatu) for reading in Sanskrit?",
      options: ["लिख्", "गम्", "पठ्", "खाद्"],
      correct: "पठ्"
    },
    {
      q: "Which grammatical work was authored by Acharya Panini?",
      options: ["महाभाष्यम्", "अष्टाध्यायी", "सिद्धान्तकौमुदी", "कादम्बरी"],
      correct: "अष्टाध्यायी"
    }
  ]

  const handleStartSimulation = () => {
    setSimulationStarted(true)
    setAnswers({})
    setCurrentQuestionIdx(0)
    setTestSubmitted(false)
  }

  const handleSelectAnswer = (ans: string) => {
    setAnswers({ ...answers, [currentQuestionIdx]: ans })
  }

  const handleNextQuestion = () => {
    if (currentQuestionIdx < dummyQuestions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1)
    } else {
      setTestSubmitted(true)
    }
  }

  const handleCloseAll = () => {
    setSelectedTest(null)
    setSimulationStarted(false)
    setTestSubmitted(false)
  }

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
            <span className="text-slate-400">Mock Tests</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0092BC] tracking-tight">
            National Mock Tests
          </h1>
          <p className="text-sm md:text-base text-[#0092BC]/80 mt-3 max-w-3xl leading-relaxed">
            Acclimatize yourself with the Sanskrit Olympiad online environment by attempting our multi-level practice tests.
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Test Options Grid */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Laptop className="h-5 w-5 text-[#007799]" />
            Select Your Learning Track
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MOCK_TESTS.map((test) => (
              <div 
                key={test.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                      {test.subtitle}
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {test.difficulty}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-800 leading-tight">
                    {test.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                    {test.desc}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-slate-500 font-bold pt-2">
                    <span className="flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5 text-[#007799]" />
                      {test.questions} MCQs
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#007799]" />
                      {test.duration} Minutes
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSelectedTest(test)}
                    className="w-full bg-[#007799] hover:bg-[#005577] text-white py-3 rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all flex items-center justify-center gap-1.5 uppercase tracking-wide"
                  >
                    <Play className="h-3.5 w-3.5" />
                    <span>Start Practice Test</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Leaderboard */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              Mock Hall of Fame
            </h3>

            <div className="space-y-4">
              {TOP_PERFORMERS.map((student, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-black ${
                      student.rank === 1 ? "bg-amber-100 text-amber-700" :
                      student.rank === 2 ? "bg-slate-150 text-slate-600" :
                      student.rank === 3 ? "bg-orange-100 text-orange-700" :
                      "bg-slate-100 text-slate-500"
                    }`}>
                      {student.rank}
                    </span>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-slate-800 leading-tight">{student.name}</h4>
                      <span className="text-[10px] text-slate-400 font-semibold">{student.track}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <h5 className="text-xs font-black text-[#007799]">{student.score}</h5>
                    <span className="text-[9px] text-slate-400 font-bold">{student.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50/60 border border-amber-250/70 rounded-2xl p-6 space-y-3">
            <h4 className="text-xs font-black text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="h-4.5 w-4.5 text-amber-700" />
              Disclaimer
            </h4>
            <p className="text-[10px] text-amber-800 leading-relaxed font-semibold">
              These mock exams are for self-evaluation and practice purposes only. Scores obtained here will not affect your ranking or final standing in the National Sanskrit Olympiad.
            </p>
          </div>
        </div>

      </div>

      {/* Interactive Modal Backdrop */}
      <AnimatePresence>
        {selectedTest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-200"
            >
              
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#007799] to-[#0092bc] text-white px-8 py-6 relative">
                <button 
                  onClick={handleCloseAll}
                  className="absolute right-4 top-4 text-white/80 hover:text-white font-extrabold cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
                <h3 className="text-lg font-black uppercase tracking-wider">{selectedTest.title} Instructions</h3>
                <p className="text-xs text-white/70 mt-1">Please read the instructions carefully before beginning the simulation.</p>
              </div>

              {/* Simulation Screen vs Instructions Screen */}
              {!simulationStarted ? (
                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-250/50">
                      <span className="block text-[10px] uppercase font-bold text-slate-400">Questions</span>
                      <span className="text-base font-black text-slate-800">{selectedTest.questions}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-250/50">
                      <span className="block text-[10px] uppercase font-bold text-slate-400">Duration</span>
                      <span className="text-base font-black text-slate-800">{selectedTest.duration} Min</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-250/50">
                      <span className="block text-[10px] uppercase font-bold text-slate-400">Attempts</span>
                      <span className="text-base font-black text-slate-800">Unlimited</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide">Rules & Regulations</h4>
                    <ul className="space-y-2.5">
                      {[
                        "Click the 'Begin Test Simulation' button below to start the demo exam.",
                        "This mock simulation displays three dummy sample questions representing the exam pattern.",
                        "Once the test is submitted, your score will be instantly computed and shown to you."
                      ].map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                    <button 
                      onClick={handleCloseAll}
                      className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleStartSimulation}
                      className="px-6 py-3 rounded-xl bg-[#007799] hover:bg-[#005577] text-white text-xs font-bold shadow-md cursor-pointer transition-all"
                    >
                      Begin Test Simulation
                    </button>
                  </div>
                </div>
              ) : !testSubmitted ? (
                // Active Test Screen
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-[#007799] uppercase tracking-wide">
                      Question {currentQuestionIdx + 1} of {dummyQuestions.length}
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-xl font-bold flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#007799]" />
                      Active Session
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm md:text-base font-black text-slate-800">
                      {dummyQuestions[currentQuestionIdx].q}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {dummyQuestions[currentQuestionIdx].options.map((opt, idx) => {
                        const isSelected = answers[currentQuestionIdx] === opt
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelectAnswer(opt)}
                            className={`p-4 rounded-xl border text-left text-xs font-bold transition-all ${
                              isSelected 
                                ? "bg-[#007799]/5 border-[#007799] text-[#007799]" 
                                : "bg-slate-50 border-slate-200 hover:border-slate-350 text-slate-700"
                            }`}
                          >
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end gap-3 border-t border-slate-100">
                    <button
                      onClick={handleNextQuestion}
                      disabled={!answers[currentQuestionIdx]}
                      className={`px-6 py-3 rounded-xl text-white text-xs font-bold shadow-md cursor-pointer transition-all ${
                        answers[currentQuestionIdx]
                          ? "bg-[#007799] hover:bg-[#005577]"
                          : "bg-slate-300 cursor-not-allowed"
                      }`}
                    >
                      {currentQuestionIdx === dummyQuestions.length - 1 ? "Submit Simulation" : "Next Question"}
                    </button>
                  </div>
                </div>
              ) : (
                // Results Screen
                <div className="p-8 text-center space-y-6">
                  <div className="inline-flex h-16 w-16 bg-emerald-50 rounded-full items-center justify-center mb-2">
                    <Trophy className="h-8 w-8 text-emerald-600 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-black text-slate-800">Simulation Submitted Successfully!</h4>
                    <p className="text-xs text-slate-500 font-semibold">
                      You scored {
                        dummyQuestions.reduce((score, q, idx) => {
                          return answers[idx] === q.correct ? score + 1 : score
                        }, 0)
                      } out of {dummyQuestions.length} correct.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-center gap-3 border-t border-slate-100">
                    <button
                      onClick={handleCloseAll}
                      className="px-6 py-3 rounded-xl bg-[#007799] hover:bg-[#005577] text-white text-xs font-bold shadow-md cursor-pointer"
                    >
                      Back to Mock Tests
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}