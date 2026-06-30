"use client";

import { useState } from "react";
import { 
  User, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Flame, 
  ShieldAlert,
  ChevronRight,
  Plus
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [checklist, setChecklist] = useState([
    { id: 1, task: "Complete Class 10 Physics Practice Test", done: true },
    { id: 2, task: "Download Chemistry Organic Cheat Sheet", done: false },
    { id: 3, task: "Practice 15 minutes of Algebra Formulas", done: false },
    { id: 4, task: "Unlock Weekly Speed Champion Badge", done: true },
  ]);

  const toggleChecklist = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const student = {
    name: "Aryan Sharma",
    class: "Class 10",
    rollNo: "SEH-2026-88",
    email: "aryan.sharma@stud.smartexamhub.in",
    avatar: "AS",
    level: 12,
    xp: 2840,
    targetXp: 3500,
  };

  const performance = [
    { subject: "Mathematics", score: 94, color: "stroke-blue-500 text-blue-500" },
    { subject: "Physics", score: 85, color: "stroke-purple-500 text-purple-500" },
    { subject: "Chemistry", score: 72, color: "stroke-orange-500 text-orange-500" },
    { subject: "Biology", score: 90, color: "stroke-emerald-500 text-emerald-500" },
  ];

  const recentActivities = [
    { type: "Exam Practice", title: "Algebra Mock Test 2", date: "Today, 02:40 PM", score: "92%" },
    { type: "File Download", title: "Organic Chemistry Trends Notes", date: "Yesterday, 04:15 PM" },
    { type: "Badge Unlocked", title: "Completed 5 mock sessions", date: "2 days ago", icon: "🏆" },
  ];

  const badges = [
    { title: "Daily Streak", icon: "🔥", desc: "Practiced 7 days in a row", unlocked: true },
    { title: "Exam Ace", icon: "🎓", desc: "Scored 90%+ in 5 mock tests", unlocked: true },
    { title: "Speed Champion", icon: "⚡", desc: "Finished test in under 30m", unlocked: true },
    { title: "Grandmaster", icon: "🛡️", desc: "Mastered all subjects syllabus", unlocked: false },
  ];

  return (
    <div className="bg-mesh min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Student Profile Overview Row */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-indigo-200/10 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Profile Card */}
        <div className="flex items-center space-x-4 text-left w-full md:w-auto">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold font-display shadow-md shadow-blue-500/10 flex-shrink-0">
            {student.avatar}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-extrabold font-display">{student.name}</h2>
              <span className="text-[9px] bg-blue-500/15 text-blue-600 px-2 py-0.5 rounded-full font-bold uppercase font-mono">{student.class}</span>
            </div>
            <p className="text-xs text-foreground/50 mt-0.5">{student.email}</p>
            <p className="text-[10px] text-foreground/40 font-semibold font-mono">Roll: {student.rollNo}</p>
          </div>
        </div>

        {/* Level and XP progress */}
        <div className="w-full md:w-80 space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="flex items-center space-x-1">
              <Flame className="h-4 w-4 text-orange-500 fill-orange-500" />
              <span>Level {student.level} Learner</span>
            </span>
            <span className="font-mono">{student.xp} / {student.targetXp} XP</span>
          </div>
          
          <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${(student.xp / student.targetXp) * 100}%` }}
            />
          </div>
        </div>

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Stats and Performance charts */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Visual SVG Subject Progress Gauges */}
          <div className="glass-panel p-6 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-6">
            <h3 className="font-extrabold text-base font-display flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Subject Performance Metrics</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {performance.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-3">
                  
                  {/* Circular SVG Gauge */}
                  <div className="relative h-24 w-24">
                    <svg className="h-full w-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="stroke-zinc-200 dark:stroke-zinc-800 fill-transparent"
                        strokeWidth="8"
                      />
                      {/* Foreground gauge circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className={`${item.color} fill-transparent transition-all duration-1000`}
                        strokeWidth="8"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * item.score) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Percent Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-extrabold font-mono text-foreground">
                      {item.score}%
                    </div>
                  </div>

                  <span className="text-xs font-bold text-foreground/80">{item.subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity List */}
          <div className="glass-panel p-6 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
            <h3 className="font-extrabold text-base font-display">Recent Activity Logs</h3>
            
            <div className="space-y-3">
              {recentActivities.map((act, idx) => (
                <div 
                  key={idx}
                  className="flex justify-between items-center p-4 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/30 dark:border-zinc-800/30"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">
                      {act.icon ? act.icon : act.type === "File Download" ? "📄" : "📝"}
                    </span>
                    <div>
                      <h4 className="font-bold text-xs md:text-sm text-foreground">{act.title}</h4>
                      <p className="text-[10px] text-foreground/45 font-semibold mt-0.5">{act.type} • {act.date}</p>
                    </div>
                  </div>
                  {act.score && (
                    <span className="text-xs font-bold font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
                      {act.score}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Tasks Checklist & Badges */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Weekly Checklist Expander */}
          <div className="glass-panel p-6 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
            <h3 className="font-extrabold text-base font-display">Weekly Study Checklist</h3>
            
            <div className="space-y-2.5">
              {checklist.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className="w-full flex items-center space-x-3 text-left p-3.5 rounded-xl border border-zinc-200/20 dark:border-zinc-800/20 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer"
                >
                  <span className={`h-4 w-4 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${
                    item.done
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-zinc-400/50"
                  }`}>
                    {item.done && <CheckCircle2 className="h-3 w-3" />}
                  </span>
                  <span className={`text-xs font-semibold leading-snug ${item.done ? "line-through text-foreground/40" : "text-foreground"}`}>
                    {item.task}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Achievement badges */}
          <div className="glass-panel p-6 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
            <h3 className="font-extrabold text-base font-display">Achievement Badges</h3>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, idx) => (
                <div 
                  key={idx}
                  className={`p-3 rounded-2xl border text-center flex flex-col items-center justify-center space-y-2 transition-all duration-300 ${
                    badge.unlocked
                      ? "glass-panel bg-gradient-to-tr from-yellow-500/5 to-amber-500/5 border-amber-500/20 shadow-sm"
                      : "opacity-40 border-zinc-200/50 dark:border-zinc-800/50"
                  }`}
                  title={badge.desc}
                >
                  <span className="text-3xl filter drop-shadow-md">{badge.icon}</span>
                  <h4 className="font-bold text-[10px] text-foreground tracking-wide leading-none">{badge.title}</h4>
                  <span className="text-[8px] text-foreground/45 font-semibold leading-tight">{badge.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
