"use client";

import React from "react";

export default function CommunityHubSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-primary/3 to-transparent border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-8xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
            Sanskrit Community Hub
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto font-bold">
            Let&apos;s gather together to learn and spread Sanskrit across the boundaries and be a part of a noble cause.
          </p>
          <span className="text-[#007799] font-display text-lg font-bold block select-none">
            तेजस्विनावधीतमस्तु
          </span>
        </div>

        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-900 flex flex-col">
          <div className="relative object-contain overflow-hidden">
            <img
              src="/img/old_olympiads.gif"
              alt="Community Gatherings GIF"
              width="100%"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
