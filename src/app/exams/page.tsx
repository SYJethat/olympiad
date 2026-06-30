"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, BookOpen, Clock, HelpCircle, GraduationCap } from "lucide-react";
import examData from "@/data/exams.json";
import { Exam } from "@/types";

export default function Exams() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const exams = examData as Exam[];

  // Get unique subjects for filters
  const subjects = ["All", ...Array.from(new Set(exams.map((e) => e.subject)))];
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const filteredExams = exams.filter((exam) => {
    const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exam.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "All" || exam.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === "All" || exam.difficulty === selectedDifficulty;
    return matchesSearch && matchesSubject && matchesDifficulty;
  });

  return (
    <div className="bg-mesh min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Page Header */}
      <div className="text-center md:text-left space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display">
          All Available Examinations
        </h1>
        <p className="text-foreground/50 max-w-xl text-xs md:text-sm">
          Browse our curated exams list, filter by subject or difficulty, and select a module to start mock test practices.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        
        {/* Search */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/40">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search exam name, subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 rounded-2xl glass-panel bg-white/50 border border-zinc-200/50 dark:border-zinc-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-foreground transition-all"
          />
        </div>

        {/* Subject Filter */}
        <div className="lg:col-span-3">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="block w-full px-4 py-3 rounded-2xl glass-panel bg-white/50 border border-zinc-200/50 dark:border-zinc-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-foreground transition-all cursor-pointer font-semibold"
          >
            <option value="All">All Subjects</option>
            {subjects.filter(sub => sub !== "All").map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="lg:col-span-3">
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="block w-full px-4 py-3 rounded-2xl glass-panel bg-white/50 border border-zinc-200/50 dark:border-zinc-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-foreground transition-all cursor-pointer font-semibold"
          >
            <option value="All">All Difficulties</option>
            {difficulties.filter(diff => diff !== "All").map((diff) => (
              <option key={diff} value={diff}>{diff} Difficulty</option>
            ))}
          </select>
        </div>

      </div>

      {/* Grid List */}
      {filteredExams.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    exam.difficulty === "Hard"
                      ? "bg-red-500/10 text-red-600 dark:text-red-400"
                      : exam.difficulty === "Medium"
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  }`}>
                    {exam.difficulty}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-foreground/50 font-bold font-mono">
                    <GraduationCap className="h-4 w-4" />
                    <span>Class {exam.class}</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-lg text-foreground font-display mb-1">{exam.title}</h3>
                <span className="inline-flex items-center text-[10px] bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-md font-bold mb-6">
                  {exam.subject}
                </span>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <div className="flex justify-between text-xs text-foreground/60 font-semibold font-mono">
                  <span className="flex items-center space-x-1">
                    <HelpCircle className="h-4 w-4 text-slate-400" />
                    <span>{exam.questions} Ques</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <span>{exam.duration}</span>
                  </span>
                </div>
                
                <Link
                  href={`/exams/${exam.id}`}
                  className="w-full text-center block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
                >
                  Start Preparing
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 rounded-2xl glass-panel p-8">
          <div className="mx-auto h-12 w-12 text-slate-400 mb-4">
            <BookOpen className="h-12 w-12" />
          </div>
          <h3 className="font-bold text-lg">No Exams Found</h3>
          <p className="text-xs text-foreground/50 mt-1">
            Try adjusting your search criteria or reset your filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedSubject("All");
              setSelectedDifficulty("All");
            }}
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
}
