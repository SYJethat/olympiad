"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  Trophy, 
  Award, 
  School, 
  UserCheck, 
  MapPin, 
  BookOpen, 
  Calendar,
  AlertCircle,
  FileSpreadsheet,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

interface Topper {
  rank: number;
  name: string;
  class: string;
  score: string;
  school: string;
  state: string;
  badge?: string;
}

interface Awardee {
  name: string;
  designation?: string;
  school: string;
  state: string;
  category: string;
}

function ResultPageContent() {
  const searchParams = useSearchParams();
  
  // Selected Olympiad quiz type: 1 = Geeta Olympiad, 2 = Sanskrit Olympiad, 3 = Indian Knowledge System
  const [selectedQuiz, setSelectedQuiz] = useState<number>(2);
  
  // Active Topper/Award View: 'national' | 'state' | 'school' | 'teachers' | 'schools'
  const [activeView, setActiveView] = useState<string>("national");
  
  // Search query states
  const [rollNumber, setRollNumber] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  // Sync with query param on load
  useEffect(() => {
    const qid = searchParams?.get("quiz_id");
    if (qid) {
      const parsed = parseInt(qid, 10);
      if ([1, 2, 3].includes(parsed)) {
        setSelectedQuiz(parsed);
      }
    }
  }, [searchParams]);

  // Mock Result Database Lookup
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    setSearchError(null);
    setSearchResult(null);

    const query = rollNumber.trim().toUpperCase();
    if (!query) {
      setSearchError("Please enter a valid Roll Number or Registration ID.");
      return;
    }

    // Standard format mockup lookup
    // CSU-2026-XXXX or simple number
    const mockDb: Record<number, Record<string, any>> = {
      2: { // Sanskrit Olympiad
        "CSU-2026-1002": { name: "Aditya Sharma", class: "Class 10", roll: "CSU-2026-1002", score: "96%", percentile: "99.4th", rank: "National Rank 12", status: "Pass with Distinction (Gold Medal)" },
        "CSU-2026-4482": { name: "Meera Nair", class: "Class 8", roll: "CSU-2026-4482", score: "91%", percentile: "97.2th", rank: "State Rank 3", status: "Pass with Distinction" },
        "CSU-2026-9051": { name: "Rohan Varma", class: "Class 12", roll: "CSU-2026-9051", score: "84%", percentile: "91.5th", rank: "School Rank 1", status: "Pass with Merit" }
      },
      1: { // Geeta Olympiad
        "CSU-2026-1002": { name: "Aditya Sharma", class: "Class 10", roll: "CSU-2026-1002", score: "98%", percentile: "99.8th", rank: "National Rank 3", status: "Pass with Honor (Gold Medal)" },
        "CSU-2026-5501": { name: "Siddharth Sen", class: "Class 9", roll: "CSU-2026-5501", score: "89%", percentile: "94.0th", rank: "State Rank 11", status: "Pass with Merit" }
      },
      3: { // Indian Knowledge System
        "CSU-2026-1002": { name: "Aditya Sharma", class: "Class 10", roll: "CSU-2026-1002", score: "92%", percentile: "98.1st", rank: "National Rank 25", status: "Pass with Distinction" },
        "CSU-2026-8812": { name: "Anjali Gupta", class: "Class 11", roll: "CSU-2026-8812", score: "87%", percentile: "93.6th", rank: "State Rank 8", status: "Pass with Merit" }
      }
    };

    const quizData = mockDb[selectedQuiz];
    if (quizData && quizData[query]) {
      setSearchResult(quizData[query]);
    } else {
      // Generate a dynamic mock result so any searched ID gets a response for demo simplicity
      if (/^CSU-2026-\d{4}$/.test(query)) {
        const randScore = Math.floor(75 + Math.random() * 21);
        setSearchResult({
          name: "Candidate " + query.split("-")[2],
          class: "Class 8",
          roll: query,
          score: `${randScore}%`,
          percentile: `${(randScore + 4).toFixed(1)}th`,
          rank: `State Rank ${Math.floor(10 + Math.random() * 50)}`,
          status: randScore >= 90 ? "Pass with Distinction" : "Pass with Merit"
        });
      } else {
        setSearchError("No record found. Please try CSU-2026-1002 or format CSU-2026-XXXX");
      }
    }
  };

  // Mock Toppers Data
  const toppersDb: Record<number, Record<string, Topper[]>> = {
    2: { // Sanskrit Olympiad
      national: [
        { rank: 1, name: "Pranav Shastri", class: "Class 12", score: "100%", school: "Sanskrit Vidyapith", state: "Uttar Pradesh", badge: "Gold Medalist" },
        { rank: 2, name: "Shruti Hegde", class: "Class 10", score: "99.5%", school: "R.S. K. Academy", state: "Karnataka", badge: "Silver Medalist" },
        { rank: 3, name: "Chinmay Dwivedi", class: "Class 11", score: "99.0%", school: "Chinmaya Vidyalaya", state: "Madhya Pradesh", badge: "Bronze Medalist" },
        { rank: 4, name: "Arya Joshi", class: "Class 9", score: "98.5%", school: "Bal Bharati School", state: "Maharashtra" },
        { rank: 5, name: "Veda Murthy", class: "Class 8", score: "98.0%", school: "Gurukul Heritage", state: "Kerala" }
      ],
      state: [
        { rank: 1, name: "Abhiram G.", class: "Class 10", score: "97.5%", school: "National Public School", state: "Karnataka" },
        { rank: 1, name: "Divya Pathak", class: "Class 11", score: "97.0%", school: "DAV Public School", state: "Delhi" },
        { rank: 1, name: "Koustubh Panda", class: "Class 12", score: "96.5%", school: "Saraswati Shishu Mandir", state: "Odisha" }
      ],
      school: [
        { rank: 1, name: "Nikhil Joshi", class: "Class 7", score: "95.5%", school: "Central Sanskrit Academy", state: "Rajasthan" },
        { rank: 2, name: "Aarushi Goel", class: "Class 8", score: "94.0%", school: "Central Sanskrit Academy", state: "Rajasthan" }
      ]
    },
    1: { // Geeta Olympiad
      national: [
        { rank: 1, name: "Gopal Krishna", class: "Class 10", score: "100%", school: "ISKCON Gurukul", state: "Maharashtra", badge: "Gold Medalist" },
        { rank: 2, name: "Radha Sharma", class: "Class 9", score: "99.0%", school: "Bhagavad Gita School", state: "Haryana", badge: "Silver Medalist" },
        { rank: 3, name: "Madhav Das", class: "Class 11", score: "98.5%", school: "Gita Prachar Vidyalaya", state: "Gujarat", badge: "Bronze Medalist" }
      ],
      state: [
        { rank: 1, name: "Ananya Dixit", class: "Class 12", score: "97.0%", school: "Amrita Vidyalayam", state: "Kerala" }
      ],
      school: [
        { rank: 1, name: "Keshav Soni", class: "Class 9", score: "95.0%", school: "Gita Mandir School", state: "Gujarat" }
      ]
    },
    3: { // Indian Knowledge System
      national: [
        { rank: 1, name: "Ishaan Trivedi", class: "Class 11", score: "99.5%", school: "IKS Gurukul", state: "Gujarat", badge: "Gold Medalist" },
        { rank: 2, name: "Mythili Iyer", class: "Class 12", score: "98.8%", school: "Vedic Science School", state: "Tamil Nadu", badge: "Silver Medalist" },
        { rank: 3, name: "Tejas Panday", class: "Class 10", score: "98.0%", school: "Heritage Academy", state: "Bihar", badge: "Bronze Medalist" }
      ],
      state: [
        { rank: 1, name: "Samyak Jain", class: "Class 10", score: "96.5%", school: "Adinath Public School", state: "Madhya Pradesh" }
      ],
      school: [
        { rank: 1, name: "Karan Johar", class: "Class 12", score: "94.5%", school: "Veda Pathashala", state: "Uttarakhand" }
      ]
    }
  };

  // Mock Awards Data
  const awardsDb: Record<string, Awardee[]> = {
    teachers: [
      { name: "Dr. Raghunath Tripathi", designation: "Sanskrit HOD", school: "Sanskrit Vidyapith, Varanasi", state: "Uttar Pradesh", category: "Maharshi Valmiki Award" },
      { name: "Smt. Jayashree Venkataraman", designation: "Language Specialist", school: "Adyar Sanskrit Academy", state: "Tamil Nadu", category: "Outstanding Sanskrit Educator" },
      { name: "Shri Vasudev Bhat", designation: "Acharya", school: "Vedic Pathasala, Udupi", state: "Karnataka", category: "Guru Dronacharya Award" }
    ],
    schools: [
      { name: "Sanskrit Vidyapith Varanasi", school: "Top Sanskrit Promotion school", state: "Uttar Pradesh", category: "Highest Participation Gold Cup" },
      { name: "Chinmaya Vidyalaya Bengaluru", school: "Elite performance school", state: "Karnataka", category: "Academic Excellence Award" },
      { name: "ISKCON Gurukul Pune", school: "Best cultural integration academy", state: "Maharashtra", category: "Valmiki Sanskrit Pragya Cup" }
    ]
  };

  const currentToppers = toppersDb[selectedQuiz]?.[activeView] || [];
  const currentAwards = awardsDb[activeView] || [];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <span className="bg-amber-50 text-amber-700 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Olympiad Results Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-display">
            National Olympiad Results & Toppers
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            Check individual candidate results and view the honor boards for the Sanskrit Olympiad, Geeta Olympiad, and Indian Knowledge System.
          </p>
        </div>

        {/* Quiz Category Tabs selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm flex flex-wrap gap-1">
            <button
              onClick={() => { setSelectedQuiz(2); setSearched(false); }}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedQuiz === 2
                  ? "bg-[#007799] text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Sanskrit Olympiad
            </button>
            <button
              onClick={() => { setSelectedQuiz(1); setSearched(false); }}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedQuiz === 1
                  ? "bg-[#007799] text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Geeta Olympiad
            </button>
            <button
              onClick={() => { setSelectedQuiz(3); setSearched(false); }}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedQuiz === 3
                  ? "bg-[#007799] text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Indian Knowledge System (IKS)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Result Search lookup */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-black text-[#007799] uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Search className="h-4 w-4" />
                Individual Result Search
              </h3>
              
              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Candidate Roll Number / ID
                  </label>
                  <input
                    type="text"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    placeholder="e.g. CSU-2026-1002"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#007799] focus:bg-white transition-all uppercase placeholder:normal-case"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#007799] hover:bg-[#005577] text-white py-3.5 rounded-xl font-bold text-xs shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Fetch Score Card</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-slate-500 leading-relaxed font-semibold">
                💡 Try looking up <span className="text-[#007799] font-extrabold cursor-pointer hover:underline" onClick={() => setRollNumber("CSU-2026-1002")}>CSU-2026-1002</span> or <span className="text-[#007799] font-extrabold cursor-pointer hover:underline" onClick={() => setRollNumber("CSU-2026-4482")}>CSU-2026-4482</span> to see verified score card details.
              </div>
            </div>

            {/* Display search results output */}
            {searched && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm overflow-hidden animate-fade-in">
                {searchError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-2.5">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold">{searchError}</p>
                  </div>
                )}

                {searchResult && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm leading-tight">{searchResult.name}</h4>
                        <p className="text-[10px] text-slate-500 font-semibold mt-0.5">{searchResult.class}</p>
                      </div>
                      <span className="bg-emerald-50 text-emerald-800 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase">
                        Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <span className="text-[9px] text-slate-500 font-medium block">Olympiad Score</span>
                        <strong className="text-base font-black text-amber-700 block mt-0.5">{searchResult.score}</strong>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <span className="text-[9px] text-slate-500 font-medium block">Percentile</span>
                        <strong className="text-base font-black text-[#007799] block mt-0.5">{searchResult.percentile}</strong>
                      </div>
                    </div>

                    <div className="bg-[#007799]/5 p-3.5 rounded-xl border border-[#007799]/10 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Standing Rank:</span>
                        <span className="font-extrabold text-slate-800">{searchResult.rank}</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-slate-600">Award Status:</span>
                        <span className="font-extrabold text-emerald-700">{searchResult.status}</span>
                      </div>
                    </div>

                    {/* Download link reminder */}
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-[10px] text-amber-800 font-semibold flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p>You can download the PDF copy of this certificate in the <Link href="/student-portal" className="underline hover:text-amber-900">Student Portal</Link>.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Honor Boards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              
              {/* Honor Board tab controls */}
              <div className="flex flex-wrap border-b border-slate-200 gap-1 pb-4">
                <button
                  onClick={() => setActiveView("national")}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeView === "national"
                      ? "bg-[#007799]/10 text-[#007799] font-extrabold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  🏆 National Toppers
                </button>
                <button
                  onClick={() => setActiveView("state")}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeView === "state"
                      ? "bg-[#007799]/10 text-[#007799] font-extrabold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  📍 State Toppers
                </button>
                <button
                  onClick={() => setActiveView("school")}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeView === "school"
                      ? "bg-[#007799]/10 text-[#007799] font-extrabold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  🏫 School Toppers
                </button>
                <button
                  onClick={() => setActiveView("teachers")}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeView === "teachers"
                      ? "bg-[#007799]/10 text-[#007799] font-extrabold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  🎓 Teachers Award
                </button>
                <button
                  onClick={() => setActiveView("schools")}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeView === "schools"
                      ? "bg-[#007799]/10 text-[#007799] font-extrabold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  🏢 School Awards
                </button>
              </div>

              {/* Dynamic list rendering */}
              <div className="pt-6">
                
                {/* 1. TOPPERS LIST (National, State, School) */}
                {["national", "state", "school"].includes(activeView) && (
                  <div className="space-y-4">
                    {currentToppers.map((topper, index) => (
                      <div 
                        key={index} 
                        className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 rounded-xl border transition-all ${
                          topper.rank === 1
                            ? "bg-amber-50/40 border-amber-200"
                            : "bg-slate-50/50 border-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`h-10 w-10 rounded-full flex items-center justify-center font-black text-sm ${
                            topper.rank === 1 
                              ? "bg-amber-500 text-white" 
                              : topper.rank === 2
                              ? "bg-slate-400 text-white"
                              : topper.rank === 3
                              ? "bg-orange-400 text-white"
                              : "bg-slate-200 text-slate-700"
                          }`}>
                            #{topper.rank}
                          </div>
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                              {topper.name}
                              {topper.badge && (
                                <span className="bg-amber-500/10 text-amber-700 text-[8px] font-black px-2 py-0.5 rounded-full uppercase">
                                  {topper.badge}
                                </span>
                              )}
                            </h4>
                            <p className="text-[10px] text-slate-500 font-semibold flex flex-wrap items-center gap-2 mt-0.5">
                              <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {topper.class}</span>
                              <span>|</span>
                              <span className="flex items-center gap-1"><School className="h-3 w-3" /> {topper.school}</span>
                              <span>|</span>
                              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {topper.state}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-baseline gap-1 sm:text-right">
                          <span className="text-sm font-black text-[#007799]">{topper.score}</span>
                          <span className="text-[9px] text-slate-400 font-semibold">Percentile</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. AWARDS LIST (Teachers, Schools) */}
                {["teachers", "schools"].includes(activeView) && (
                  <div className="space-y-4">
                    {currentAwards.map((award, index) => (
                      <div key={index} className="bg-slate-50/50 border border-slate-200 p-4 rounded-xl flex justify-between items-center gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="bg-[#007799]/10 p-2.5 rounded-xl text-[#007799]">
                            {activeView === "teachers" ? <UserCheck className="h-5 w-5" /> : <School className="h-5 w-5" />}
                          </div>
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-sm">{award.name}</h4>
                            {award.designation && (
                              <p className="text-[10px] text-[#007799] font-bold mt-0.5">{award.designation}</p>
                            )}
                            <p className="text-[10px] text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                              <School className="h-3 w-3" /> {award.school} | <MapPin className="h-3 w-3" /> {award.state}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="bg-amber-500/10 text-amber-800 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-amber-500/20">
                            {award.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="bg-slate-50 min-h-screen py-12 px-4 flex items-center justify-center font-sans">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#007799] mx-auto mb-4" />
          <h2 className="text-lg font-bold text-slate-800">Loading Olympiad Results...</h2>
        </div>
      </div>
    }>
      <ResultPageContent />
    </Suspense>
  );
}
