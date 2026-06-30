"use client";

import { use, useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Clock, 
  HelpCircle, 
  Award, 
  BookOpen, 
  CheckCircle,
  FileText,
  HelpCircle as FaqIcon,
  ChevronDown
} from "lucide-react";
import examData from "@/data/exams.json";
import faqData from "@/data/faqs.json";
import { Exam, FAQ } from "@/types";

interface ExamDetailsProps {
  params: Promise<{ id: string }>;
}

export default function ExamDetails({ params }: ExamDetailsProps) {
  const { id } = use(params);
  const examId = parseInt(id);
  const exam = (examData as Exam[]).find((e) => e.id === examId);

  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  if (!exam) {
    return (
      <div className="bg-mesh min-h-screen flex flex-col justify-center items-center p-6 text-center">
        <div className="glass-panel p-8 rounded-2xl max-w-sm">
          <h2 className="text-xl font-extrabold text-red-500">Exam Module Not Found</h2>
          <p className="text-xs text-foreground/60 mt-2">
            The exam module you requested does not exist or has been removed.
          </p>
          <Link
            href="/exams"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
          >
            Back to Exams
          </Link>
        </div>
      </div>
    );
  }

  // Get relevant FAQs for this page
  const pageFaqs = faqData.slice(0, 3) as FAQ[];

  const toggleFaq = (idx: number) => {
    setFaqOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="bg-mesh min-h-screen py-12 px-4 md:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Back button */}
      <div>
        <Link
          href="/exams"
          className="inline-flex items-center space-x-2 text-xs font-bold text-foreground/60 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all exams</span>
        </Link>
      </div>

      {/* Hero Exam Summary Header */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-indigo-200/10 shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-4 max-w-xl">
          <div className="flex space-x-3 items-center">
            <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
              exam.difficulty === "Hard"
                ? "bg-red-500/10 text-red-600 dark:text-red-400"
                : exam.difficulty === "Medium"
                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            }`}>
              {exam.difficulty}
            </span>
            <span className="text-xs font-bold text-foreground/50 font-mono">Class {exam.class} Syllabi</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display">
            {exam.title}
          </h1>

          <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">
            Prepare for the upcoming board/class challenge with this tailored mock assessment sheet. This exam covers core concepts, question templates, and pattern outlines.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-bold font-mono text-foreground/75 pt-2">
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>{exam.duration}</span>
            </span>
            <span className="flex items-center space-x-1">
              <HelpCircle className="h-4 w-4 text-blue-500" />
              <span>{exam.questions} Questions</span>
            </span>
            <span className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4 text-blue-500" />
              <span>{exam.subject}</span>
            </span>
          </div>
        </div>

        {/* Action side */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <Link
            href="/mock-tests"
            className="w-full md:w-auto text-center block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            Attempt Practice Mock Test
          </Link>
        </div>
      </div>

      {/* Syllabus Grid Outline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Syllabus Tracks */}
        <div className="md:col-span-2 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
            <h3 className="font-extrabold text-lg font-display flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Syllabus Chapters Outline</span>
            </h3>
            
            <ul className="space-y-3 text-xs leading-relaxed text-foreground/75">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Section A: Core Theories & Definitions</span>
                  <span className="text-foreground/50">Comprehensive evaluation of formulas, structures, and vocabularies.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Section B: Application & Word Scenarios</span>
                  <span className="text-foreground/50">Practical execution of theorems and logic loops.</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Section C: Multiple-choice & Matching Matrices</span>
                  <span className="text-foreground/50">Evaluating accuracy, logic, and speed metrics.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* FAQ Accordion block */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
            <h3 className="font-extrabold text-lg font-display flex items-center space-x-2">
              <FaqIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span>Assistance & FAQs</span>
            </h3>

            <div className="space-y-3">
              {pageFaqs.map((faq) => (
                <div key={faq.id} className="border-b border-zinc-200/30 dark:border-zinc-800/30 pb-3">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center text-left py-2 font-semibold text-xs md:text-sm text-foreground/80 hover:text-blue-500 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-4 w-4 transform transition-transform ${faqOpen[faq.id] ? "rotate-180 text-blue-500" : ""}`} />
                  </button>
                  {faqOpen[faq.id] && (
                    <p className="text-xs text-foreground/60 pl-1 pt-1 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Pattern Metrics Card */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4 text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Award className="h-6 w-6" />
            </div>
            
            <h4 className="font-extrabold text-base font-display">Exam Specifications</h4>
            
            <div className="space-y-3 text-xs text-left">
              <div className="flex justify-between border-b border-zinc-200/30 dark:border-zinc-800/30 pb-2">
                <span className="text-foreground/50">Total Questions:</span>
                <span className="font-bold font-mono">{exam.questions} MCQs</span>
              </div>
              <div className="flex justify-between border-b border-zinc-200/30 dark:border-zinc-800/30 pb-2">
                <span className="text-foreground/50">Duration limit:</span>
                <span className="font-bold font-mono">{exam.duration}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-200/30 dark:border-zinc-800/30 pb-2">
                <span className="text-foreground/50">Total Marks:</span>
                <span className="font-bold font-mono">{exam.questions * 2} Marks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/50">Passing Target:</span>
                <span className="font-bold font-mono">60%</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-3">
            <h4 className="font-bold text-sm">Download Guides</h4>
            <Link
              href="/study-material"
              className="w-full text-center block border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 py-2 rounded-xl text-xs font-bold transition-all text-foreground/80"
            >
              Get Revision Notes
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
