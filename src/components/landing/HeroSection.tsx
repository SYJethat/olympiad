"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[60vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden py-16 px-4">
      {/* Loop video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover filter brightness-[0.4] dark:brightness-[0.3]"
        >
          <source src="/video/lg1_new.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
      </div>

      {/* Hero Overlay Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-10 pt-4">

        {/* Main 3-column Layout Row (Gita, Heading, IKS) - Rendered DIRECTLY without boxy cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center max-w-5xl w-full px-4 pt-4">

          {/* Bhagavad Gita Game Banner */}
          <a
            href="https://sanskritolympiad.in/gita_game"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-[1.05] transition-transform duration-300 flex flex-col items-center space-y-2 group"
          >
            <div className="relative w-44 h-16 md:w-56 md:h-20 drop-shadow-lg">
              <Image src="/img/season_title_4bg.png" alt="Gita Game Title" fill className="object-contain" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#EEA410] opacity-80 group-hover:opacity-100 transition-opacity">Explore Gita Portal</span>
          </a>

          {/* Heading Logo Graphic */}
          <div className="hover:scale-[1.02] transition-transform duration-500 flex justify-center">
            <div className="relative w-64 h-24 md:w-80 md:h-32 min-w-[200px] md:min-w-[280px] drop-shadow-2xl">
              <Image
                src="/img/heading6.png"
                alt="Sanskrit Olympiad Season 4"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* IKS Game Banner */}
          <a
            href="https://sanskritolympiad.in/ikyhome"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-[1.05] transition-transform duration-300 flex flex-col items-center space-y-2 group"
          >
            <div className="relative w-44 h-16 md:w-56 md:h-20 drop-shadow-lg">
              <Image src="/img/season_title_1bg.png" alt="IKS Title" fill className="object-contain" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#EEA410] opacity-80 group-hover:opacity-100 transition-opacity">Indian Knowledge System</span>
          </a>

        </div>

        {/* Circular Symbol Banner - Placed Centered Below */}
        <div className="flex justify-center">
          <div className="relative h-24 w-24 md:h-28 md:w-28 animate-spin-slow drop-shadow-xl">
            <Image src="/img/so_banner_icon.png" alt="Sanskrit Olympiad Emblem" fill className="object-contain" />
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md pt-2">
          <a
            href="https://sanskritolympiad.in/so_knownmore"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-secondary to-secondary-light text-zinc-950 font-extrabold text-xs tracking-wider px-8 py-3.5 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
          >
            KNOW MORE DETAILS
          </a>
          <a
            href="https://sanskritolympiad.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto glass-panel bg-white/15 text-white hover:bg-white/25 border border-white/20 font-bold text-xs tracking-wider px-8 py-3.5 rounded-2xl hover:scale-105 transition-all duration-300"
          >
            PORTAL LOGIN
          </a>
        </div>

      </div>
    </section>
  );
}
