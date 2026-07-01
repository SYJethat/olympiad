"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/img/event-gallery7.png",
    title: "National Gathering",
  },
  {
    src: "/img/event-gallery6.png",
    title: "Inauguration Ceremony",
  },
  {
    src: "/img/event-gallery3.png",
    title: "CSU Launch Event",
  },
  {
    src: "/img/community1.png",
    title: "Student Gathering",
  },
  {
    src: "/img/csu_lounch.png",
    title: "Accreditation Ceremony",
  },
  {
    src: "/img/event-gallery1.png",
    title: "Faculty Summit",
  },
  {
    src: "/img/event-gallery2.png",
    title: "Interactive Workshop",
  },
  {
    src: "/img/event-gallery8.png",
    title: "Olympiad Level 1",
  },
  {
    src: "/img/event-gallery9.png",
    title: "Medals Certification",
  },
  {
    src: "/img/so_welcome.jpg",
    title: "Olympiad Welcome",
  },
];

export default function CommunityHubSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#007799]/5 to-transparent border-t border-zinc-200/40 relative select-none">
      <div className="max-w-8xl mx-auto space-y-12 text-center">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#007799]/10 text-[#007799] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Users size={13} /> Event Gallery
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
            Sanskrit Community Hub & Events
          </h2>

          <p className="text-xs text-zinc-500 font-semibold max-w-xl mx-auto leading-relaxed">
            Peek inside our active training centers, digital modules, and community olympiad arenas.
          </p>
        </motion.div>

        {/* 10-Image Gallery Ribbon arranged in 2 Rows of 5 Columns each */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-7xl mx-auto overflow-hidden   grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1"
        >
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-[15px]  group aspect-[4/3] bg-zinc-950 border-r border-b border-white/10"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full  h-full rounded-[10px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
              />

              {/* Overlay Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Hover Badge Text */}
              <div className="absolute bottom-3 left-3 right-3 text-left z-10 transition-transform duration-500 group-hover:translate-y-[-2px]">
                <span className="text-[8px] font-extrabold text-[#EEA410] uppercase tracking-wider block mb-0.5">
                  CSU Event
                </span>
                <h4 className="font-extrabold text-[10px] md:text-[11px] leading-tight text-white">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dynamic Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-4"
        >
          <span className="text-[#007799] font-display text-lg md:text-xl font-extrabold tracking-wide block animate-pulse-slow">
            तेजस्विनावधीतमस्तु
          </span>
          <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-extrabold mt-1">
            May our learning be radiant and purposeful
          </p>
        </motion.div>

      </div>
    </section>
  );
}
