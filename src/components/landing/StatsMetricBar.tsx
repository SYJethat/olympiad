"use client";

import React from "react";
import { Award, BookOpen, MapPin, CheckCircle } from "lucide-react";

export default function StatsMetricBar() {
  return (
    <section className="py-12 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-primary/5 border-b border-zinc-200/50 dark:border-zinc-800/50 relative z-10 select-none">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        
        <div className="text-center space-y-2.5">
          <div className="text-3xl md:text-4xl font-extrabold text-orange-650 font-display">1,50,000+</div>
          <div className="flex flex-col items-center gap-1">
            <Award className="h-4.5 w-4.5 text-orange-700 dark:text-orange-400" />
            <span className="text-[10px] text-zinc-700 dark:text-zinc-300 font-bold uppercase tracking-wider">Registrations</span>
          </div>
        </div>

        <div className="text-center space-y-2.5">
          <div className="text-3xl md:text-4xl font-extrabold text-orange-655 font-display">2025</div>
          <div className="flex flex-col items-center gap-1">
            <BookOpen className="h-4.5 w-4.5 text-orange-700 dark:text-orange-400" />
            <span className="text-[10px] text-zinc-700 dark:text-zinc-300 font-bold uppercase tracking-wider">Established</span>
          </div>
        </div>

        <div className="text-center space-y-2.5">
          <div className="text-3xl md:text-4xl font-extrabold text-orange-650 font-display">Delhi</div>
          <div className="flex flex-col items-center gap-1">
            <MapPin className="h-4.5 w-4.5 text-orange-700 dark:text-orange-400" />
            <span className="text-[10px] text-zinc-700 dark:text-zinc-300 font-bold uppercase tracking-wider">Headquarters</span>
          </div>
        </div>

        <div className="text-center space-y-2.5">
          <div className="text-3xl md:text-4xl font-extrabold text-orange-650 font-display">100%</div>
          <div className="flex flex-col items-center gap-1">
            <CheckCircle className="h-4.5 w-4.5 text-orange-700 dark:text-orange-400" />
            <span className="text-[10px] text-zinc-700 dark:text-zinc-300 font-bold uppercase tracking-wider">Govt Sponsored</span>
          </div>
        </div>

      </div>
    </section>
  );
}
