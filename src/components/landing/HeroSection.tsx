"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col justify-start items-center overflow-hidden pt-16 pb-16 px-4">
      {/* Loop video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover "
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/90" />
      </div>

      {/* Hero Overlay Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-20">

        {/* Brand/University attribution banner */}
        <div className="flex flex-col items-center space-y-4 max-w-5xl mx-auto relative group">
          {/* Subtle colorful aura backdrop glow */}
          <div className="absolute -inset-10 bg-gradient-to-r from-[#FF9933]/20 via-[#EEA410]/25 to-[#9C2A73]/20 rounded-full blur-3xl opacity-75 pointer-events-none" />

          <span className="relative inline-flex items-center gap-2 px-4 py-1.5 text-[10px] sm:text-[12px] font-extrabold uppercase tracking-[0.25em] text-[#EEA410] ">
            <span className="w-2 h-2 rounded-full bg-[#EEA410] animate-pulse" />
            Organized & Supported By
          </span>

          <h2 className="relative text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight select-none font-display">
            <span className="block py-2 bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
              केन्द्रीय संस्कृत विश्वविद्यालय
            </span>
            <span className="block mt-2 bg-gradient-to-r from-red-900  via-red-600 to-red-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(238,164,16,0.3)]">
              Central Sanskrit University
            </span>
          </h2>

          <p className="relative text-[11px] sm:text-sm text-zinc-300/90 font-bold tracking-widest uppercase flex flex-wrap justify-center gap-2 items-center">
            <span>Established by an Act of Parliament</span>
            <span className="text-[#EEA410] hidden sm:inline">&bull;</span>
            <span className="text-[#EEA410]">Ministry of Education, Govt. of India</span>
          </p>
        </div>

        {/* Main 3-column Layout Row (Gita, Heading, IKS) - Rendered DIRECTLY without boxy cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center max-w-5xl w-full px-4 pt-4">

          {/* Bhagavad Gita Game Banner */}
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-[1.05] transition-transform duration-300 flex flex-col items-center space-y-2 group"
          >
            <div className="relative w-44 h-16 md:w-56 md:h-20 drop-shadow-lg">
              <Image src="/img/season_title_4bg.png" alt="Gita Game Title" fill className="object-contain" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#EEA410] opacity-80 group-hover:opacity-100 transition-opacity">Explore Gita Portal</span>
          </a> */}

          {/* Heading Logo Graphic */}
          {/* <div className="hover:scale-[1.02] transition-transform duration-500 flex justify-center">
            <div className="relative w-64 h-24 md:w-80 md:h-32 min-w-[200px] md:min-w-[280px] drop-shadow-2xl">
              <Image
                src="/img/heading6.png"
                alt="Sanskrit Olympiad Season 4"
                fill
                className="object-contain"
              />
            </div>
          </div> */}

          {/* IKS Game Banner */}
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-[1.05] transition-transform duration-300 flex flex-col items-center space-y-2 group"
          >
            <div className="relative w-44 h-16 md:w-56 md:h-20 drop-shadow-lg">
              <Image src="/img/season_title_1bg.png" alt="IKS Title" fill className="object-contain" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#EEA410] opacity-80 group-hover:opacity-100 transition-opacity">Indian Knowledge System</span>
          </a> */}

        </div>

       
      </div>
    </section>
  );
}
