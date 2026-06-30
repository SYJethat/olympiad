"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MottoSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#007799]/5 relative overflow-hidden select-none">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-[#EEA410]/45 shadow-2xl bg-gradient-to-br from-[#fefbf6] to-[#fdf2df] text-center space-y-6 relative overflow-hidden"
        >
          {/* Animated background seal watermark effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#eea4100d_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.04] pointer-events-none select-none animate-spin-slow">
            <Image src="/img/logo1.png" alt="Emblem Watermark" fill className="object-contain" />
          </div>

          {/* Sanskrit Quote - Styled in deep university purple */}
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#9C2A73] dark:text-[#9C2A73] font-display text-2xl md:text-3xl font-extrabold block tracking-wide select-none drop-shadow-sm"
          >
            संस्कृतं नाम दैवी वागन्वाख्याता महर्षिभिः ।
          </motion.span>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#9C2A73] to-transparent mx-auto"
          />

          {/* Introduction Text - Styled in high-contrast charcoal for light mode readability */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-zinc-800 dark:text-zinc-800 text-xs md:text-sm leading-relaxed font-sans max-w-2xl mx-auto font-bold text-justify md:text-center"
          >
            Sanskrit is considered as an ancient and divine language across the world. Many foreign languages are originated from Sanskrit. This Sanskrit Olympiad is going to be a pioneer in the Sanskrit world. Central Sanskrit University and Little Guru have come along with a great and unique opportunity for all Sanskrit students by giving them the world&apos;s first gamified Sanskrit Olympiad. We follow the motto: <span className="text-[#9C2A73] font-black">Play is the new Learn</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
