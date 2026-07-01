"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const GAMES = [
  {
    title: "Sanskrit Skill Development",
    description: "Our Sanskrit Education Programs offer a complete learning ecosystem from foundational courses to advanced research. We provide structured undergraduate and postgraduate degrees professional certificates and doctoral research opportunities. Our curriculum combines traditional Sanskrit scholarship with modern pedagogical methods ensuring students gain both deep knowledge and practical skills.",
    img: "/skill-development.png",
    tag: "IGO Season 4",
    color: "text-zinc-900", // Charcoal black heading
    hoverColor: "hover:text-[#0087CD]",
    linkColor: "text-[#0087CD]", // Blue Link
    badge: "Gita Quest",
  },
  {
    title: "Innovation and Startup ",
    description: "Our Sanskrit Innovation Programs deliver a comprehensive ecosystem from introductory learning to advanced interdisciplinary research. We offer structured undergraduate and postgraduate pathways professional certifications and doctoral research opportunities. Our curriculum integrates classical Sanskrit knowledge with modern pedagogical methods ensuring learners develop both conceptual depth and practical skills.",
    img: "/startup.png",
    tag: "Olympiad Level 1",
    color: "text-[#0087CD]", // Blue Heading
    hoverColor: "hover:text-[#005F9E]",
    linkColor: "text-[#0087CD]",
    badge: "Grammar Quest",
  },
  {
    title: "Classical Vocabulary Matching",
    description: "Learn core Sanskrit nouns, pronouns, and verbs through interactive drag-and-drop levels. The vocabulary track bridges the gap between historical literature and modern application, helping students build strong translation and synthesis capabilities, guided by expert pronunciation and memory benchmarks.",
    img: "/classic.png",
    tag: "Olympiad Level 2",
    color: "text-[#D32F2F]", // Crimson Heading
    hoverColor: "hover:text-[#B71C1C]",
    linkColor: "text-[#D32F2F]",
    badge: "Vocab Builder",
  },
  {
    title: "Phonetics & Audio Guides",
    description: "Explore the acoustics, phonetic structures, and speech synthesis systems of ancient Sanskrit. This module features real-time speech analytics, feedback loops, and audio benchmarks to help students master accurate pronunciation, certified by leading Central Sanskrit University faculties.",
    img: "/phonetics.png",
    tag: "Olympiad Special",
    color: "text-[#FFC107]", // Gold Heading
    hoverColor: "hover:text-[#E0A800]",
    linkColor: "text-[#FFC107]",
    badge: "Phonics Master",
  },
];

export default function GamesShowcase() {
  return (
    <section className="py-20  bg-gradient-to-b from-[#FFFDF9] to-transparent relative select-none">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EEA410]/10 text-[#EEA410] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles size={12} /> Interactive Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-zinc-900 tracking-tight">
            Sanskrit Olympiad Gamified Programs
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-zinc-500 font-semibold leading-relaxed">
            Timeless Indian knowledge meets modern computational loops. Peek into our specialized study and learning modules.
          </p>
        </div>

        {/* 2x2 Grid of Beautiful Cards matching the uploaded image style */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {GAMES.map((game, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-zinc-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_-6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Card Image at Top */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={game.img}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  priority={idx < 2}
                />

                {/* Floating Tag */}
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[9px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                  {game.tag}
                </span>
              </div>

              {/* Card Content Area */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-5 text-left bg-white">
                <div className="space-y-3">
                  {/* Card Title */}
                  <h3 className={`text-md md:text-sm font-bold tracking-tight transition-colors duration-300 ${game.color} ${game.hoverColor}`}>
                    {game.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[10px] md:text-[12px] text-zinc-500 font-medium">
                    {game.description?.length > 100
                      ? `${game.description.slice(0, 100)}...`
                      : game.description}
                  </p>
                </div>

                {/* Explore Service Link */}
                <div className="pt-2">
                  <a
                    href="https://sanskritolympiad.in/learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 font-bold text-xs uppercase tracking-wider ${game.linkColor} hover:underline transition-all cursor-pointer`}
                  >
                    Explore Service <ChevronRight size={13} className="mt-0.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
