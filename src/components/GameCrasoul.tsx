"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Star, Trophy, Volume2, Play, ChevronRight, Crown } from "lucide-react";

const GAMES = [
    {
        title: "Bhagavad Gita Module",
        description: "Match slokas, decode ancient translation puzzles, and earn achievements.",
        img: "/img/so_games/game1.png",
        tag: "IGO Season 4",
        color: "#EEA410", // Saffron Gold
        soft: "bg-amber-50/90 border-amber-300 dark:bg-amber-950/20 dark:border-amber-900 text-amber-900 dark:text-amber-400",
        border: "border-l-4 border-l-[#EEA410]",
        hover: "hover:border-amber-300",
        badge: "🎈 Gita Quest",
        level: "Level 1 · Scholar",
    },
    {
        title: "Sanskrit Grammar Quest",
        description: "Master Vibhakti, Sandhi, and grammatical loops using adaptive quiz missions.",
        img: "/img/so_games/game2.png",
        tag: "Olympiad Level 1",
        color: "#9C2A73", // Purple
        soft: "bg-purple-50/90 border-purple-300 dark:bg-purple-950/20 dark:border-purple-900 text-purple-900 dark:text-purple-400",
        border: "border-l-4 border-l-[#9C2A73]",
        hover: "hover:border-purple-300",
        badge: "🚀 Grammar Quest",
        level: "Level 2 · Explorer",
    },
    {
        title: "Vocabulary Matching",
        description: "Learn core Sanskrit nouns, pronouns, and verbs through drag-and-drop mechanics.",
        img: "/img/so_games/game3.png",
        tag: "Olympiad Level 2",
        color: "#10B981", // Emerald
        soft: "bg-emerald-50/90 border-emerald-300 dark:bg-emerald-950/20 dark:border-emerald-900 text-emerald-900 dark:text-emerald-400",
        border: "border-l-4 border-l-[#10B981]",
        hover: "hover:border-emerald-300",
        badge: "🎓 Vocab Builder",
        level: "Level 3 · Beginner",
    },
    {
        title: "Speech & Audio Guide",
        description: "Phonetic checks and pronunciation guides built into interactive levels.",
        img: "/img/so_games/game4.png",
        tag: "Olympiad Special",
        color: "#06B6D4", // Cyan
        soft: "bg-cyan-50/90 border-cyan-300 dark:bg-cyan-950/20 dark:border-cyan-900 text-cyan-900 dark:text-cyan-400",
        border: "border-l-4 border-l-[#06B6D4]",
        hover: "hover:border-cyan-300",
        badge: "🧠 Phonics Master",
        level: "Level 4 · Expert",
    },
];

const STICKERS = ["🪷", "✨", "🪔", "🕉️", "⭐", "🎉"];

export default function GamesShowcase() {
    const [active, setActive] = useState(0);
    const [isSwapping, setIsSwapping] = useState(false);
    const [autoplay, setAutoplay] = useState(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const goTo = (idx: number) => {
        if (idx === active) return;
        setIsSwapping(true);
        setTimeout(() => {
            setActive(idx);
            setIsSwapping(false);
        }, 220);
    };

    useEffect(() => {
        if (!autoplay) return;
        timerRef.current = setInterval(() => {
            setIsSwapping(true);
            setTimeout(() => {
                setActive((p) => (p + 1) % GAMES.length);
                setIsSwapping(false);
            }, 220);
        }, 4200);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [autoplay]);

    const game = GAMES[active];

    return (
        <div
            className="py-16 px-6 relative overflow-hidden border-t border-b border-zinc-200/50 dark:border-zinc-800/50 bg-gradient-to-b from-[#FFF9EC]/80 via-[#FFFDF9]/60 to-transparent dark:from-zinc-950/20 dark:via-zinc-950/10 dark:to-transparent"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
        >
            {/* Drifting background stickers */}
            {STICKERS.map((s, i) => (
                <span
                    key={i}
                    className="absolute select-none pointer-events-none text-3xl opacity-40 transition-transform duration-[6000ms] ease-in-out float-animation"
                    style={{
                        top: `${[8, 70, 18, 82, 38, 58][i]}%`,
                        left: `${[6, 4, 92, 90, 95, 3][i]}%`,
                        animationDelay: `${i * 0.7}s`,
                        fontSize: i % 2 === 0 ? "30px" : "22px",
                    }}
                >
                    {s}
                </span>
            ))}

            <style>{`
        @keyframes floatDrift {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(6deg); }
        }
        .float-animation {
          animation: floatDrift 6s ease-in-out infinite;
        }
        .gs-shine {
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 45%, transparent 60%);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400 px-4 py-1.5 rounded-full font-extrabold text-xs tracking-wider uppercase mb-3">
                        <Sparkles size={13} /> Interactive Arena
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
                        The Sanskrit Olympiad Game Arena 🎮
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto text-xs font-semibold mt-2.5">
                        Four gamified portals built by CSU to make learning Paninian grammar, moral shlokas, and phonetics fun. Tap to peek inside!
                    </p>
                </div>

                {/* Two-Column Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Interactive Cards (5 Columns) */}
                    <div className="lg:col-span-5 space-y-3.5 order-last lg:order-first">
                        {GAMES.map((g, idx) => {
                            const isActive = idx === active;
                            return (
                                <button
                                    key={g.title}
                                    onClick={() => goTo(idx)}
                                    className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer ${isActive
                                        ? `${g.soft} ${g.border} shadow-md translate-x-2`
                                        : "bg-white/70 dark:bg-zinc-900/30 border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white hover:translate-x-1"
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Badge Indicator */}
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm flex-shrink-0"
                                            style={{
                                                background: isActive ? g.color : "rgba(229, 231, 235, 0.5)",
                                                color: isActive ? "#fff" : "#4B5563",
                                            }}
                                        >
                                            {idx === 0 ? "📖" : idx === 1 ? "📝" : idx === 2 ? "🧩" : "🗣️"}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className={`text-[10px] font-extrabold uppercase tracking-wide`}>
                                                    {g.tag}
                                                </span>
                                                {isActive && (
                                                    <Star
                                                        size={13}
                                                        fill={g.color}
                                                        color={g.color}
                                                        className="animate-pulse"
                                                    />
                                                )}
                                            </div>
                                            <h3 className="font-extrabold text-sm text-zinc-900 dark:text-zinc-50 mb-1">
                                                {g.title}
                                            </h3>
                                            <p className="text-[10.5px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                                                {g.description}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Simulated Screen (7 Columns) */}
                    <div className="lg:col-span-7 flex justify-center">
                        <div className="w-full max-w-2xl  overflow-hidden shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-900 flex flex-col">

                            {/* Mock macOS browser title bar */}
                            {/* <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2.5 border-b border-zinc-200/50 dark:border-zinc-700/50 flex items-center space-x-2 select-none">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto text-[10px] text-zinc-400 dark:text-zinc-500 font-mono font-bold truncate max-w-xs">
                  sanskritolympiad.in/portal/game-arena
                </div>
                <Crown size={14} className="text-amber-500" />
              </div> */}

                            {/* Console screen area with image */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                                {/* Shimmer overlay */}
                                <div className="gs-shine absolute inset-0 z-10 pointer-events-none" />

                                {/* Fade image switcher */}
                                <div className={`absolute inset-0 transition-opacity duration-300 ${isSwapping ? "opacity-0" : "opacity-100"}`}>
                                    <Image
                                        src={game.img}
                                        alt={game.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-[1.015]"
                                        priority
                                    />
                                    {/* Subtle dark layout grid mask */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                </div>

                                {/* Play Button Overlay */}
                                <button
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 dark:bg-zinc-900/95 flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer z-20"
                                    style={{ color: game.color }}
                                    aria-label="Launch Game"
                                >
                                    <Play size={16} fill={game.color} className="ml-0.5" />
                                </button>

                                {/* Game Console metadata text */}
                                <div className={`absolute inset-x-0 bottom-0 p-6 z-20 transition-all duration-300 ${isSwapping ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
                                    <span className="inline-flex items-center gap-1.5 bg-white text-zinc-900 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide mb-2">
                                        <Trophy size={12} style={{ color: game.color }} /> {game.level}
                                    </span>
                                    <h4 className="text-lg font-extrabold text-white mb-1">
                                        {game.title}
                                    </h4>
                                    <p className="text-[11px] text-white/80 max-w-lg leading-relaxed select-none">
                                        {game.description}
                                    </p>
                                </div>
                            </div>

                            {/* Console status footer */}
                            <div className="bg-zinc-50 dark:bg-zinc-900 p-3.5 border-t border-zinc-200/50 dark:border-zinc-800/50 flex justify-between items-center px-5">
                                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-[10px] font-semibold">
                                    <Volume2 size={13} /> sound is recommended
                                </div>
                                {/* Dots indicator */}
                                <div className="flex gap-1.5">
                                    {GAMES.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => goTo(idx)}
                                            className={`h-2 rounded-full transition-all cursor-pointer ${idx === active ? "bg-[#007799] w-5" : "bg-zinc-300 dark:bg-zinc-700 w-2"
                                                }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
