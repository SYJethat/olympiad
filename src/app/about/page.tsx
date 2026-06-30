"use client";

import { Award, Compass, Heart, Users, Target, CheckCircle2 } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Satisfied Students", value: "15,000+" },
    { label: "Completed Tests", value: "84,000+" },
    { label: "Curated Courses", value: "400+" },
    { label: "Expert Advisors", value: "120+" },
  ];

  const team = [
    { name: "Dr. Vikram Seth", role: "Co-Founder & Academic Dean", bio: "Former educational board advisor with 20+ years of curriculum planning expertise.", avatar: "VS" },
    { name: "Sarah Jenkins", role: "Director of Technology", bio: "Pioneer in adaptive learning tech. Led engineering at top Silicon Valley EdTech firms.", avatar: "SJ" },
    { name: "Ramesh Nair", role: "Chief Content Officer", bio: "Author of multiple class K-12 guidebooks. Passionate about gamifying study models.", avatar: "RN" },
  ];

  return (
    <div className="bg-mesh min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 1. Header Banner */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Our Story</span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display">
          About Smart Exam Hub
        </h1>
        <p className="text-foreground/50 text-xs md:text-sm leading-relaxed">
          Bringing a new methodology to school examinations preparation. We integrate academic curriculum requirements with interactive tech loops.
        </p>
      </div>

      {/* 2. Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
          <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="font-extrabold text-xl font-display">Our Mission</h3>
          <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
            To make exam preparation accessible, interactive, and metrics-driven. We want to remove the stress from evaluations by empowering students with mock simulator tests, structured notes, and performance data gauges.
          </p>
        </div>

        {/* Vision */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
          <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Compass className="h-6 w-6" />
          </div>
          <h3 className="font-extrabold text-xl font-display">Our Vision</h3>
          <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
            To become the leading digital companion for secondary and primary K-12 scholars worldwide, bridging traditional classroom learning with intelligent, responsive assessment dashboards.
          </p>
        </div>

      </div>

      {/* 3. Platform Stats */}
      <div className="glass-panel p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-950/40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-gradient-purple">{stat.value}</div>
              <div className="text-xs font-bold text-foreground/50 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Leadership Team Grid */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display">
            Meet the Advisory Team
          </h2>
          <p className="text-foreground/50 max-w-sm mx-auto text-xs">
            Learn more about the educators and technologists piloting our platform content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 text-center space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center text-xl font-display">
                  {member.avatar}
                </div>
                <div>
                  <h4 className="font-extrabold text-base">{member.name}</h4>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider mt-0.5">{member.role}</p>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
