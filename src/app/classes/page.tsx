"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, FileText, CheckCircle2, Video, ChevronRight, Award } from "lucide-react";
import classData from "@/data/classes.json";
import { ClassItem } from "@/types";

export default function Classes() {
  const [selectedBracket, setSelectedBracket] = useState("all");
  const [expandedClassId, setExpandedClassId] = useState<number | null>(null);

  const classes = classData as ClassItem[];

  const brackets = [
    { id: "all", name: "All Grades" },
    { id: "primary", name: "Primary (1-5)", range: [1, 5] },
    { id: "middle", name: "Middle (6-8)", range: [6, 8] },
    { id: "secondary", name: "Secondary (9-10)", range: [9, 10] },
    { id: "higher", name: "Higher Sec (11-12)", range: [11, 12] },
  ];

  const filteredClasses = classes.filter((c) => {
    if (selectedBracket === "all") return true;
    const bracket = brackets.find((b) => b.id === selectedBracket);
    if (!bracket || !bracket.range) return true;
    const [min, max] = bracket.range;
    return c.id >= min && c.id <= max;
  });

  const toggleExpandClass = (id: number) => {
    setExpandedClassId(expandedClassId === id ? null : id);
  };

  return (
    <div className="bg-mesh min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center md:text-left space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display">
          Class-Wise Subjects & Resources
        </h1>
        <p className="text-foreground/50 max-w-xl text-xs md:text-sm">
          Select your class to explore syllabus subjects, practice papers, lecture notes, video classes, and mock exams.
        </p>
      </div>

      {/* Bracket Tabs */}
      <div className="flex flex-wrap border-b border-zinc-200/50 dark:border-zinc-800/50 gap-2 pb-1">
        {brackets.map((b) => (
          <button
            key={b.id}
            onClick={() => {
              setSelectedBracket(b.id);
              setExpandedClassId(null);
            }}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              selectedBracket === b.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                : "text-foreground/60 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>

      {/* Grid of Class Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((item) => (
          <div
            key={item.id}
            className={`glass-panel rounded-2xl p-6 border transition-all duration-300 ${
              expandedClassId === item.id
                ? "border-primary bg-white dark:bg-zinc-950 shadow-lg"
                : "border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/30 shadow-sm hover:shadow-md"
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-lg font-bold font-mono">
                  {item.name}
                </span>
                <span className="text-[10px] text-foreground/50 font-bold uppercase tracking-wider">K-12 Syllabus</span>
              </div>

              {/* Resource Metrics Counter Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold pt-2">
                <div className="flex items-center space-x-2 text-foreground/75">
                  <FileText className="h-4 w-4 text-purple-500" />
                  <span>{item.notesCount} Notes</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/75">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{item.mockTestsCount} Mock Exams</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/75">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span>{item.practicePapersCount} PYQs</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/75">
                  <Video className="h-4 w-4 text-orange-500" />
                  <span>{item.videoLecturesCount} Videos</span>
                </div>
              </div>

              {/* Toggle expansion trigger */}
              <div className="pt-4 border-t border-zinc-200/30 dark:border-zinc-800/30">
                <button
                  onClick={() => toggleExpandClass(item.id)}
                  className="w-full flex justify-between items-center text-xs font-bold text-blue-600 dark:text-blue-400 cursor-pointer"
                >
                  <span>{expandedClassId === item.id ? "Hide Subjects list" : "View Subjects details"}</span>
                  <ChevronRight className={`h-4 w-4 transform transition-transform ${expandedClassId === item.id ? "rotate-90" : ""}`} />
                </button>
              </div>

              {/* Expanded subjects list block */}
              {expandedClassId === item.id && (
                <div className="pt-4 space-y-3 animate-fade-in border-t border-zinc-200/30 dark:border-zinc-800/30 mt-3">
                  <div className="text-[10px] uppercase font-bold text-foreground/40 tracking-wider">Subjects Covered:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/30 dark:border-zinc-800/30 px-2 py-1 rounded-md"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    <Link
                      href="/study-material"
                      className="text-center block bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-foreground py-2 rounded-xl text-[10px] font-extrabold transition-all"
                    >
                      Get Chapter Notes
                    </Link>
                    <Link
                      href="/mock-tests"
                      className="text-center block bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl text-[10px] font-extrabold transition-all"
                    >
                      Start Mock Exam
                    </Link>
                  </div>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
