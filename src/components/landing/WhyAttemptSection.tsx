"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyAttemptSection() {
  return (
    <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-955 overflow-hidden border-t border-b border-zinc-200/40 dark:border-zinc-800/40">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-105 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-sm font-medium">
            🌟 Ancient Wisdom. Modern Edge.
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-zinc-900 ">
            Why Attempt the <span className="text-[#007799]">Sanskrit Olympiad</span>?
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            Where timeless Paninian linguistics meets computational thinking.
            Unlock cognitive excellence through classical mastery.
          </p>
        </motion.div>

        {/* Animated Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

          {/* Left Card - Slides in from RIGHT-TO-LEFT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="group   overflow-hidden  transition-all duration-500"
          >
            <div className="relative overflow-hidden">
              <img
                src="/img/why_so_left.png"
                alt="Benefits of Sanskrit Olympiad"
                className="w-full h-auto object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" /> */}

              <div className="absolute bottom-8 left-32  ">
                <h3 className="text-2xl font-semibold mb-2">Key Benefits</h3>
                <p className="text-black text-sm font-medium">Memory • Logic • Analytical Thinking</p>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Slides in from RIGHT-TO-LEFT, staggered next in line */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group "
          >
            <div className="relative overflow-hidden">
              <img
                src="/img/why_so_right.png"
                alt="Sanskrit Olympiad syllabus and benchmarks"
                className="w-full h-auto object-cover "
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" /> */}

              <div className="absolute bottom-8 left-8 right-8 ">
                <h3 className="text-2xl font-semibold mb-2">Syllabus Excellence</h3>
                <p className="text-black text-sm font-medium">Structured levels with global benchmarks</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Text */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-500 via-pink-500 to-blue-600 p-8 md:p-10 shadow-2xl"
>
  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

  <div className="relative z-10">
    <p className="mx-auto max-w-3xl text-xl md:text-3xl font-extrabold justify-center items-center text-center leading-relaxed text-white">
  Join a growing community of students mastering one of the world’s most scientific languages.
    </p>
  </div>
</motion.div>      </div>
    </section>
  );
}
