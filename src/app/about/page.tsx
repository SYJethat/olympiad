"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  ChevronRight, 
  Home, 
  Target, 
  Cpu, 
  Award, 
  Gamepad2, 
  GraduationCap, 
  Trophy
} from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-mesh py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex text-slate-500 text-xs font-bold items-center gap-1 mb-4">
            <a href="/" className="hover:text-[#0092BC] transition-colors">
              <Home className="h-4 w-4" />
            </a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-400">About</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0092BC] tracking-tight">
            About Sanskrit Olympiad
          </h1>
          <p className="text-sm md:text-base text-[#0092BC]/80 mt-3 max-w-3xl leading-relaxed">
            The Sanskrit Olympiad is a national initiative by Central Sanskrit University to make Sanskrit learning accessible, interactive, and relevant for students across the globe.
          </p>
        </div>
      </section>

      {/* Motto & Intro Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden text-center space-y-6"
        >
          {/* Decorative watermark logo */}
          <div className="absolute right-6 bottom-6 w-36 h-36 opacity-10 pointer-events-none select-none">
            <Image src="/logo-1.png" alt="CSU Emblem" fill className="object-contain" />
          </div>

          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[#9C2A73] font-display text-xl md:text-2xl lg:text-3xl font-extrabold block tracking-wide select-none drop-shadow-sm"
          >
            संस्कृतं नाम दैवी वागन्वाख्याता महर्षिभिः ।
          </motion.span>

          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#9C2A73] to-transparent w-24 mx-auto" />

          <p className="text-slate-700 text-xs md:text-sm leading-relaxed max-w-5xl mx-auto font-medium">
            Sanskrit is considered as an ancient and divine language across the world. Many foreign languages originated from Sanskrit. This Sanskrit Olympiad is going to be a pioneer in the Sanskrit world. Central Sanskrit University and Little Guru have come along with a great and unique opportunity for all Sanskrit students by giving them the world's first gamified Sanskrit Olympiad. We follow the motto: 
            <span className="text-[#9C2A73] font-black block mt-2 text-sm md:text-base">"Play is the new Learn"</span>
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="pb-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between"
        >
          <div>
            <div className="h-12 w-12 rounded-2xl bg-[#0092BC]/10 flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-[#0092BC]" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3">Our Mission</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              To democratize Sanskrit learning by blending traditional pedagogy with gamification and computational concepts, allowing students to enjoy, master, and test their proficiency on a nationwide standardized platform.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between"
        >
          <div>
            <div className="h-12 w-12 rounded-2xl bg-[#9C2A73]/10 flex items-center justify-center mb-6">
              <GraduationCap className="h-6 w-6 text-[#9C2A73]" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3">Our Vision</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              To cultivate a new generation of Sanskrit learners who appreciate both the cultural richness of the language and its logical syntax, establishing a foundation for artificial intelligence and linguistics research.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Key Pillars */}
      <section className="pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wider">Key Pillars</h2>
          <p className="text-xs text-slate-500 mt-2">How we are revolutionizing Sanskrit learning and evaluation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Gamepad2 className="h-6 w-6 text-indigo-600" />,
              bg: "bg-indigo-50",
              title: "Gamified Learning",
              desc: "Solve crosswords, match shlokas, and complete quizzes to earn rewards while mastering core concepts."
            },
            {
              icon: <Cpu className="h-6 w-6 text-emerald-600" />,
              bg: "bg-emerald-50",
              title: "Computational Syntax",
              desc: "Explore Sanskrit's mathematical structure and discover why it is highly compatible with programming languages."
            },
            {
              icon: <Award className="h-6 w-6 text-amber-600" />,
              bg: "bg-amber-50",
              title: "National Certification",
              desc: "Receive digital certificates verified directly by Central Sanskrit University to boost your academic credentials."
            },
            {
              icon: <Trophy className="h-6 w-6 text-rose-600" />,
              bg: "bg-rose-50",
              title: "Grand Rewards",
              desc: "Compete with peers nationwide to rank on the leaderboard and win exciting prizes, scholarships, and awards."
            }
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
            >
              <div className={`h-10 w-10 rounded-xl ${pillar.bg} flex items-center justify-center mb-4`}>
                {pillar.icon}
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-2">{pillar.title}</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Partners */}
      {/* <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wider">Strategic Partners</h2>
          <p className="text-xs text-slate-500 mt-2">Driven by premium institutions working in unity</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {[
            { name: "Central Sanskrit University", src: "/csu.png" },
            { name: "Anuchanam", src: "/anuchanam.png" },
            { name: "JetHat", src: "/jethat.png" },
            { name: "MSP", src: "/msp.png" }
          ].map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 h-28 border border-slate-100 shadow-sm flex items-center justify-center relative group overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={partner.src} 
                  alt={partner.name} 
                  fill 
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}
    </div>
  )
}