"use client";

import React from "react";

export default function MottoSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[#EEA410]/35 shadow-2xl bg-gradient-to-br from-[#9C2A73] to-[#7a1d59] text-center space-y-6 relative overflow-hidden">
          
          {/* Background seal watermark effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#eea4100d_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          
          <span className="text-[#FFC83D] font-display text-2xl md:text-3xl font-extrabold block tracking-wide select-none drop-shadow-sm animate-pulse-slow">
            संस्कृतं नाम दैवी वागन्वाख्याता महर्षिभिः ।
          </span>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#FFC83D] to-transparent mx-auto" />
          <p className="text-white/95 text-xs md:text-sm leading-relaxed font-sans max-w-2xl mx-auto font-medium">
            Sanskrit is considered as an ancient and divine language across the world. Many foreign languages are originated from Sanskrit. This Sanskrit Olympiad is going to be a pioneer in the Sanskrit world. Central Sanskrit University and Little Guru have come along with a great and unique opportunity for all Sanskrit students by giving them the world&apos;s first gamified Sanskrit Olympiad. We follow the motto: <span className="text-[#FFC83D] font-extrabold">Play is the new Learn</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
