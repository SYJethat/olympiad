"use client";

import React, { useState, useEffect } from "react";
import { FileText, Clock } from "lucide-react";

export default function NoticeTicker() {
  const [dateStr, setDateStr] = useState("30 Jun 2026");

  useEffect(() => {
    try {
      setDateStr(new Date().toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' }));
    } catch (e) {
      // fallback if any SSR issue
    }
  }, []);

  return (
    <div className="bg-primary-dark text-white flex items-center h-10 text-xs font-semibold select-none overflow-hidden border-b border-accent/30 relative z-30 shadow-md">
      <div className="flex-shrink-0 flex items-center gap-1.5 bg-[#D32F2F] px-5 h-full z-10 shadow-lg select-none">
        <FileText className="h-3.5 w-3.5 text-white" />
        <span className="uppercase tracking-widest text-[9.5px] font-black whitespace-nowrap text-white">Latest Updates</span>
      </div>
      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <div className="absolute whitespace-nowrap animate-marquee hover:[animation-play-state:paused] text-white font-medium pl-4 text-[10.5px] tracking-wide cursor-default">
          📢 Registration for Sanskrit Olympiad Season 4 is now active! Complete your registration profile to generate student credentials. | 🏆 Win special gold/silver medals and scholarships certified by Central Sanskrit University & Little Guru. | 🎮 Experience the world&apos;s first gamified Sanskrit learning modules.
        </div>
      </div>
      <div className="flex-shrink-0 flex items-center gap-1.5 border-l border-white/10 px-5 h-full text-white/80 text-[10px] bg-primary-dark/95 font-mono">
        <Clock className="h-3.5 w-3.5 text-white/70" />
        <span>{dateStr}</span>
      </div>
    </div>
  );
}
