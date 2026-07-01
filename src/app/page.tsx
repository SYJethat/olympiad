"use client";

import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import NoticeTicker from "@/components/landing/NoticeTicker";
import StatsMetricBar from "@/components/landing/StatsMetricBar";
import MottoSection from "@/components/landing/MottoSection";
import GamesShowcase from "@/components/GameCrasoul";
import WhyAttemptSection from "@/components/landing/WhyAttemptSection";
import CommunityHubSection from "@/components/landing/CommunityHubSection";
import SyllabusSection from "@/components/landing/SyllabusSection";
import VCMessageSection from "@/components/landing/VCMessageSection";
import FAQSection from "@/components/landing/FAQSection";

export default function Home() {
  return (
    <div className="bg-mesh min-h-screen pb-16">
      {/* 1. Hero video banner */}
      <HeroSection />

      {/* 2. Scrolling updates notice bar */}
      <NoticeTicker />

      {/* 3. Core university key stats */}
      {/* <StatsMetricBar /> */}

      {/* 4. Sanskrit motto block */}
      <MottoSection />

      {/* 5. Gamified learning modules console showcase */}
      <GamesShowcase />

      {/* 6. Cognitive & syllabus benefits */}
      <WhyAttemptSection />

      {/* 7. Previous gatherings and community hub */}
      <CommunityHubSection />

      {/* 8. Download syllabus and previous year questions */}
      <SyllabusSection />

      {/* 9. Official VC Endorsement */}
      <VCMessageSection />

      {/* 10. Frequently asked questions accordions */}
      <FAQSection />
    </div>
  );
}
