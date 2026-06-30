"use client";

import { useState, useEffect } from "react";
import { Clock, Play, BookOpen, Award, CheckCircle2, X } from "lucide-react";
import mockTestData from "@/data/mockTests.json";
import { MockTest } from "@/types";

export default function MockTests() {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  
  // Interactive test simulator states
  const [activeTest, setActiveTest] = useState<MockTest | null>(null);
  const [timerSeconds, setTimerSeconds] = useState(300); // 5 mins mock timer
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState<{ score: number; total: number } | null>(null);

  const tests = mockTestData as MockTest[];

  // Get filter lists
  const subjects = ["All", ...Array.from(new Set(tests.map((t) => t.subject)))];
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const filteredTests = tests.filter((test) => {
    const matchesSubject = selectedSubject === "All" || test.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === "All" || test.difficulty === selectedDifficulty;
    return matchesSubject && matchesDifficulty;
  });

  // Countdown timer effect
  useEffect(() => {
    if (!activeTest) return;
    if (timerSeconds <= 0) {
      handleExamSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimerSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [activeTest, timerSeconds]);

  const handleStartExam = (test: MockTest) => {
    setActiveTest(test);
    setTimerSeconds(300); // Reset to 5 mins
    setCurrentQuestion(0);
    setAnswers({});
    setScore(null);
  };

  const handleSelectAnswer = (qIdx: number, aIdx: number) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: aIdx }));
  };

  const handleExamSubmit = () => {
    if (!activeTest) return;
    // Mock calculate score: check how many questions answered
    const totalQ = 4;
    let correctCount = 0;
    for (let i = 0; i < totalQ; i++) {
      // Mock answers checking (e.g. answer index 2 is correct)
      if (answers[i] === (i % 3 === 0 ? 1 : 2)) {
        correctCount++;
      }
    }
    setScore({
      score: correctCount,
      total: totalQ,
    });
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const questions = [
    { q: "What is the value of 2x + 5 = 15?", options: ["x = 3", "x = 5", "x = 10", "x = 4"] },
    { q: "Which cell organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"] },
    { q: "What is the derivative of x^2 with respect to x?", options: ["2x", "x", "2x^2", "1"] },
    { q: "Identify the tense: 'She has been studying since morning.'", options: ["Present Perfect", "Present Perfect Continuous", "Past Continuous", "Future Perfect"] },
  ];

  return (
    <div className="bg-mesh min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center md:text-left space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display">
          Active Mock Test Portals
        </h1>
        <p className="text-foreground/50 max-w-xl text-xs md:text-sm">
          Simulate examination halls with active live timers. Choose a mock test sheet and click attempt to enter the portal.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Subject Filter */}
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-4 py-3 rounded-2xl glass-panel bg-white/50 border border-zinc-200/50 dark:border-zinc-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-foreground transition-all cursor-pointer font-semibold"
        >
          <option value="All">All Subjects</option>
          {subjects.filter(sub => sub !== "All").map((sub) => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>

        {/* Difficulty Filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-4 py-3 rounded-2xl glass-panel bg-white/50 border border-zinc-200/50 dark:border-zinc-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-foreground transition-all cursor-pointer font-semibold"
        >
          <option value="All">All Difficulties</option>
          {difficulties.filter(diff => diff !== "All").map((diff) => (
            <option key={diff} value={diff}>{diff}</option>
          ))}
        </select>
      </div>

      {/* Test list grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => (
          <div
            key={test.id}
            className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                  test.difficulty === "Hard"
                    ? "bg-red-500/10 text-red-600 dark:text-red-400"
                    : test.difficulty === "Medium"
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                }`}>
                  {test.difficulty}
                </span>
                <span className="text-[10px] bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                  {test.type}
                </span>
              </div>
              <h3 className="font-extrabold text-base text-foreground font-display mb-2">{test.title}</h3>
              <p className="text-xs text-foreground/50 font-semibold mb-6">Subject: {test.subject}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <div className="flex justify-between text-xs text-foreground/60 font-semibold font-mono">
                <span className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4 text-slate-400" />
                  <span>{test.questions} MCQs</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span>{test.duration}</span>
                </span>
              </div>

              <button
                onClick={() => handleStartExam(test)}
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer active:scale-95"
              >
                <Play className="h-3.5 w-3.5" />
                <span>Attempt Mock Exam</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Exam Simulation Modal Portal */}
      {activeTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

          {/* Modal Board */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-950 rounded-3xl shadow-2xl overflow-hidden glass-panel border border-primary/20 flex flex-col justify-between min-h-[500px]">
            
            {/* Header with timer */}
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
              <div>
                <h4 className="font-extrabold text-base tracking-tight">{activeTest.title}</h4>
                <p className="text-[10px] text-foreground/50 uppercase font-bold mt-0.5">{activeTest.subject} Simulator</p>
              </div>
              
              <div className="flex items-center space-x-2 bg-red-500/10 text-red-600 dark:text-red-400 px-3.5 py-1.5 rounded-xl font-bold font-mono text-sm">
                <Clock className="h-4 w-4 animate-pulse" />
                <span>Timer: {formatTimer(timerSeconds)}</span>
              </div>
            </div>

            {/* Questions Arena */}
            <div className="p-6 md:p-8 flex-1">
              {!score ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] bg-blue-500/10 text-blue-500 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <h5 className="font-extrabold text-base md:text-lg text-foreground">
                      {questions[currentQuestion].q}
                    </h5>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {questions[currentQuestion].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectAnswer(currentQuestion, idx)}
                        className={`w-full text-left p-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                          answers[currentQuestion] === idx
                            ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                            : "border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-foreground"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {/* Navigation footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-zinc-200/20 dark:border-zinc-800/20">
                    <button
                      disabled={currentQuestion === 0}
                      onClick={() => setCurrentQuestion(currentQuestion - 1)}
                      className="px-4 py-2 text-xs font-bold rounded-lg border border-zinc-200 dark:border-zinc-800 text-foreground disabled:opacity-30 cursor-pointer"
                    >
                      Back
                    </button>
                    {currentQuestion < questions.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuestion(currentQuestion + 1)}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-blue-500 cursor-pointer"
                      >
                        Next Question
                      </button>
                    ) : (
                      <button
                        onClick={handleExamSubmit}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg text-xs font-bold hover:opacity-90 cursor-pointer"
                      >
                        Submit Test
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div className="mx-auto h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
                    <Award className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-2xl">Mock Test Submitted!</h3>
                    <p className="text-sm text-foreground/60 max-w-sm mx-auto">
                      Congratulations on completing the assessment. Here is your mock score sheet:
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 p-6 max-w-sm mx-auto border border-zinc-200/50 dark:border-zinc-800/50 space-y-3">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Total Questions:</span>
                      <span className="font-mono">{score.total}</span>
                    </div>
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Correct Answers:</span>
                      <span className="font-mono text-emerald-500">{score.score}</span>
                    </div>
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Mock Percentage:</span>
                      <span className="font-mono text-blue-500">{(score.score / score.total) * 100}%</span>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3 max-w-xs mx-auto">
                    <button
                      onClick={() => handleStartExam(activeTest)}
                      className="flex-1 border border-zinc-200 dark:border-zinc-800 text-foreground py-2.5 rounded-xl text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer"
                    >
                      Retry Prep
                    </button>
                    <button
                      onClick={() => setActiveTest(null)}
                      className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-blue-500 cursor-pointer"
                    >
                      Portal Dashboard
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Exit top button */}
            <button
              onClick={() => setActiveTest(null)}
              className="absolute right-4 top-4 text-foreground/50 hover:text-foreground cursor-pointer border border-zinc-200 dark:border-zinc-800 p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900"
              aria-label="Exit Mock Simulator"
            >
              <X className="h-4 w-4" />
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
