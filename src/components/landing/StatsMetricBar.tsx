"use client";

import React from "react";
import { Award, BookOpen, MapPin, CheckCircle } from "lucide-react";

export default function StatsMetricBar() {
  const stats = [
    {
      value: "1,50,000+",
      label: "Registrations",
      icon: Award,
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-50/80 border-orange-200/50 dark:bg-orange-950/20 dark:border-orange-900/40 text-orange-600 dark:text-orange-400",
    },
    {
      value: "2025",
      label: "Established",
      icon: BookOpen,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50/80 border-purple-200/50 dark:bg-purple-950/20 dark:border-purple-900/40 text-purple-600 dark:text-purple-400",
    },
    {
      value: "Delhi",
      label: "Headquarters",
      icon: MapPin,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50/80 border-emerald-200/50 dark:bg-emerald-950/20 dark:border-emerald-900/40 text-emerald-600 dark:text-emerald-400",
    },
    {
      value: "100%",
      label: "Govt Sponsored",
      icon: CheckCircle,
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-50/80 border-cyan-200/50 dark:bg-cyan-950/20 dark:border-cyan-900/40 text-cyan-600 dark:text-cyan-400",
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-transparent to-[#007799]/5 border-b border-zinc-200/40 dark:border-zinc-800/40 relative z-10 select-none">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm bg-white/70 dark:bg-zinc-900/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-row items-center gap-3.5"
              >
                {/* Compact Icon Container */}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0 ${item.bg}`}>
                  <Icon className="h-4.5 w-4.5" />
                </div>
                
                {/* Metric Texts Side-by-Side */}
                <div className="text-left min-w-0">
                  <div className={`text-base md:text-lg font-black tracking-tight leading-tight ${item.color}`}>
                    {item.value}
                  </div>
                  <span className="text-[9px] text-zinc-500 dark:text-zinc-400 font-extrabold uppercase tracking-wider block mt-0.5 truncate">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
