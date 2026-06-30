"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  BookOpen,
  HelpCircle,
  Award,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  FileText,
  HelpCircle as FaqIcon,
  ChevronDown,
  Download
} from "lucide-react";
import faqData from "@/data/faqs.json";
import { FAQ } from "@/types";
import GamesShowcase from "@/components/GameCrasoul";
import { motion } from 'framer-motion';

export default function Home() {
  const [activeGameIndex, setActiveGameIndex] = useState(0);
  const [syllabusTab, setSyllabusTab] = useState("all");
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  // Autoplay game carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGameIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const games = [
    {
      title: "Bhagavad Gita Module",
      description: "Match slokas, decode ancient translation puzzles, and earn achievements.",
      img: "/img/so_games/game1.png",
      tag: "IGO Season 4",
    },
    {
      title: "Sanskrit Grammar Quest",
      description: "Master Vibhakti, Sandhi, and grammatical loops using adaptive quiz missions.",
      img: "/img/so_games/game2.png",
      tag: "Olympiad Level 1",
    },
    {
      title: "Vocabulary Matching",
      description: "Learn core Sanskrit nouns, pronouns, and verbs through drag-and-drop mechanics.",
      img: "/img/so_games/game3.png",
      tag: "Olympiad Level 2",
    },
    {
      title: "Speech & Audio Guide",
      description: "Phonetic checks and pronunciation guides built into interactive levels.",
      img: "/img/so_games/game4.png",
      tag: "Olympiad Special",
    },
  ];

  const syllabusData = [
    { class: "Primary Track (Class 1-5)", badge: "🎈 Primary Learners", color: "text-teal-600 bg-teal-50 border-teal-200 dark:bg-teal-950/20 dark:text-teal-400 dark:border-teal-900", desc: "Alphabet structures, moral stories, simple word mappings, and introductory pronunciation.", link: "https://sanskritolympiad.in/learning" },
    { class: "Middle Track (Class 6-8)", badge: "🚀 Middle Explorers", color: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900", desc: "Subhashitas, word forms, basic sentence conjugation, and grammar quizzes.", link: "https://sanskritolympiad.in/learning" },
    { class: "Secondary Track (Class 9-10)", badge: "🎓 Secondary Scholars", color: "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900", desc: "Sandhi conjugation, Samasa principles, epic literature, and boards revision sheets.", link: "https://sanskritolympiad.in/learning" },
    { class: "Senior Secondary (Class 11-12)", badge: "🧠 Senior Achievers", color: "text-indigo-600 bg-indigo-50 border-indigo-200 dark:bg-indigo-950/20 dark:text-indigo-400 dark:border-indigo-900", desc: "Paninian grammar logic, computational linguistic values, and advanced literature.", link: "https://sanskritolympiad.in/learning" },
  ];

  const faqs = [
    {
      q: "What is the Sanskrit Olympiad?",
      a: "The Sanskrit Olympiad is a pioneer initiative organized by Central Sanskrit University in collaboration with Little Guru. It uses the world's first gamified learning platform to help students learn the language and culture playfully.",
    },
    {
      q: "Who is eligible to participate?",
      a: "Students from school classes (Primary Class 1 to Class 12) as well as university students (Graduation and Post-Graduation) are eligible to register in their respective category brackets.",
    },
    {
      q: "What are the prizes and medals?",
      a: "All active participants receive joint completion certificates signed by CSU and Little Guru. High-ranking toppers will win special national-grade medals and scholarship opportunities.",
    },
    {
      q: "How does the gamified exam system work?",
      a: "Instead of traditional written exams, students play gamified learning modules consisting of vocabulary quests, Gita matching, and audio speech models. Results and speeds are computed automatically.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setFaqOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="bg-mesh min-h-screen pb-16">

      {/* 1. Hero Video Loop Section */}
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

      {/* 2. Official CSU Motto & Introduction */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-secondary/20 shadow-2xl bg-gradient-to-br from-orange-800/90 to-orange-700/90 dark:from-zinc-950 dark:to-primary/5 text-center space-y-6 relative overflow-hidden">

            {/* Background seal watermark effect */}
            <div className="absolute inset-0 bg-orange-400/50  pointer-events-none" />

            <span className="text-secondary dark:text-secondary-light font-display text-2xl md:text-3xl font-extrabold block tracking-wide select-none drop-shadow-sm">
              संस्कृतं नाम दैवी वागन्वाख्याता महर्षिभिः ।
            </span>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
            <p className="text-foreground/80 text-xs md:text-sm leading-relaxed font-sans max-w-2xl mx-auto font-medium">
              Sanskrit is considered as an ancient and divine language across the world. Many foreign languages are originated from Sanskrit. This Sanskrit Olympiad is going to be a pioneer in the Sanskrit world. Central Sanskrit University and Little Guru have come along with a great and unique opportunity for all Sanskrit students by giving them the world&apos;s first gamified Sanskrit Olympiad. We follow the motto: <span className="text-primary dark:text-secondary font-extrabold">Play is the new Learn</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Games Carousel Showcase */}

      <GamesShowcase />

      {/* 4. Why Attempt Sanskrit Olympiad? */}
      {/* 4. Why Attempt Sanskrit Olympiad? */}
      {/* 4. Why Attempt Sanskrit Olympiad? */}


      {/* 4. Why Attempt Sanskrit Olympiad? */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-sm font-medium">
              🌟 Ancient Wisdom. Modern Edge.
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-zinc-900 dark:text-white">
              Why Attempt the <span className="text-[#007799]">Sanskrit Olympiad</span>?
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
              Where timeless Paninian linguistics meets computational thinking.
              Unlock cognitive excellence through classical mastery.
            </p>
          </motion.div>

          {/* Animated Image Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {/* Left Card - Slides in from LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative  overflow-hidden">
                <img
                  src="/img/why_so_left.png"
                  alt="Benefits of Sanskrit Olympiad"
                  width={"100%"}
                  height={"100%"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-semibold mb-2">Key Benefits</h3>
                  <p className="text-white/90">Memory • Logic • Analytical Thinking</p>
                </div>
              </div>
            </motion.div>

            {/* Right Card - Slides in from RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative  overflow-hidden">
                <img
                  src="/img/why_so_right.png"
                  alt="Sanskrit Olympiad syllabus and benchmarks"
                  width={"100%"}
                  height={"100%"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-semibold mb-2">Syllabus Excellence</h3>
                  <p className="text-white/90">Structured levels with global benchmarks</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center pt-8"
          >
            <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
              Join a growing community of students mastering one of the world’s most scientific languages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Sanskrit Community Hub GIF */}
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
            {/* <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2.5 border-b border-zinc-200/50 dark:border-zinc-700/50 flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="mx-auto text-[10px] text-zinc-400 dark:text-zinc-500 font-mono font-bold truncate max-w-xs select-none">
                sanskritolympiad.in/community/gatherings
              </div>
            </div> */}
            <div className="relative  object-contain  overflow-hidden">
              <img
                src="/img/old_olympiads.gif"
                alt="Community Gatherings GIF"
                width="100%"
                height={400}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. Help Banner Details */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950/20 border-t border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-900 flex flex-col">
            <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-1.5 border-b border-zinc-200/30 dark:border-zinc-700/30 flex items-center space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="relative w-full aspect-[21/9] overflow-hidden">
              <Image
                src="/img/help_banner.png"
                alt="Helpline details banner"
                fill
                className="object-contain bg-white dark:bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Syllabus & PYQ Tab Filters */}
      <section id="syllabus" className="py-20 px-6 bg-gradient-to-b from-[#007799]/5 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
              Syllabus Guidelines & PYQ Downloads
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-xs font-semibold">
              Check the curriculum structures or download previous year question papers.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 justify-center space-x-8 mb-8">
            <button
              onClick={() => setSyllabusTab("all")}
              className={`pb-3 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${syllabusTab === "all"
                ? "border-b-2 border-[#007799] text-[#007799]"
                : "text-zinc-500 hover:text-zinc-800"
                }`}
            >
              Category Syllabi
            </button>
            <button
              onClick={() => setSyllabusTab("pyq")}
              className={`pb-3 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${syllabusTab === "pyq"
                ? "border-b-2 border-[#007799] text-[#007799]"
                : "text-zinc-500 hover:text-zinc-800"
                }`}
            >
              Olympiad PYQs
            </button>
          </div>

          {/* Tab Contents */}
          <div className="mt-6">
            {syllabusTab === "all" ? (
              <div className="space-y-4">
                {syllabusData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-[#007799] dark:hover:border-[#007799] transition-all duration-300 shadow-sm"
                  >
                    <div className="mb-4 sm:mb-0 max-w-xl space-y-2 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md border tracking-wider ${item.color}`}>
                          {item.badge}
                        </span>
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 font-mono">
                          {item.class}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#007799] hover:bg-[#005577] text-white px-5 py-2.5 rounded-lg text-[10px] font-extrabold shadow-sm transition-all duration-200"
                    >
                      Download Syllabus
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { title: "Sanskrit Olympiad 2023", link: "https://sanskritolympiad.in/prev_ques_papers/sanskrit_olympiad_2023" },
                  { title: "International Gita Olympiad 2024", link: "https://sanskritolympiad.in/prev_ques_papers/international_gita_olympiad_2024" },
                  { title: "Sanskrit Olympiad 2024", link: "https://sanskritolympiad.in/prev_ques_papers/sanskrit_olympiad_2024" },
                ].map((pyq, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 hover:border-[#007799] transition-all duration-300 flex flex-col justify-between shadow-sm"
                  >
                    <div className="space-y-2">
                      <span className="text-[9px] bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400 font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        PDF Paper
                      </span>
                      <h4 className="font-extrabold text-xs md:text-sm text-zinc-900 dark:text-zinc-100 mt-3">{pyq.title}</h4>
                    </div>
                    <a
                      href={pyq.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 text-center border-2 border-zinc-200 dark:border-zinc-800 hover:border-[#007799] text-zinc-700 dark:text-zinc-300 hover:text-[#007799] dark:hover:text-[#007799] py-2.5 rounded-lg text-[10px] font-bold transition-all"
                    >
                      Get Paper PDF
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. Official Hindi Testimonial Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/5 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
              Vice Chancellor&apos;s Message (संवाद)
            </h2>
          </div>

          {/* Quote Card */}
          <div className="relative bg-[#fdfbf7] dark:bg-zinc-950 rounded-3xl p-6 md:p-12 border-l-8 border-l-[#EEA410] border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl overflow-hidden">
            {/* Decorative background crest watermark */}
            <div className="absolute right-4 bottom-4 w-36 h-36 opacity-5 pointer-events-none select-none">
              <Image src="/img/logo1.png" alt="CSU Emblem Watermark" fill className="object-contain" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">

              {/* Profile Image with Gold Frame */}
              <div className="relative h-28 w-28 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#EEA410] shadow-xl">
                <Image
                  src="/img/auth_user.png"
                  alt="Prof. Shrinivasa Varakhedi"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hindi Endorsement Content */}
              <div className="space-y-5 text-center md:text-left flex-1">
                <span className="text-5xl text-[#EEA410]/20 font-serif leading-none block -mb-6">
                  “
                </span>
                <p className="text-zinc-800 dark:text-zinc-200 text-xs md:text-sm leading-relaxed font-sans font-medium text-justify">
                  राष्ट्रीय शिक्षा नीति 2020 भारतीय ज्ञान परंपरा और आधुनिक विज्ञान को जोड़ने वाली एक दूरदर्शी पहल है। इसके सफल क्रियान्वयन में संस्कृत सेवी संस्थानों और तकनीकी संगठनों का सहयोग अत्यंत महत्त्वपूर्ण है। मुझे अत्यंत हर्ष है कि केन्द्रीय संस्कृत विश्वविद्यालय और लिटिल गुरु के संयुक्त तत्त्वावधान में ऑनलाइन संस्कृत ओलंपियाड का आयोजन किया जा रहा है। यह ओलंपियाड अखिल भारतीय स्तर पर माध्यमिक तथा उच्च शिक्षा के विद्यार्थियों के लिए एक अभिनव अवसर प्रदान करेगा, जिसके माध्यम से वे नवीनतम यान्त्रिक बुद्धिमत्ता (AI) संचालित प्रौद्योगिकियों और परंपरागत शिक्षण पद्धतियों के समन्वय से, सरल एवं आनंदपूर्ण ढंग से संस्कृत भाषा का अध्ययन कर सकेंगे।
                </p>
                <p className="text-zinc-800 dark:text-zinc-200 text-xs md:text-sm leading-relaxed font-sans font-medium text-justify">
                  विशेष रूप से, संस्कृत भाषा की ध्वन्यात्मक शुद्धता, तार्किक संरचना और संक्षिप्त अभिव्यक्ति क्षमता इसे कंप्यूटर विज्ञान एवं कृत्रिम बुद्धिमत्ता (AI) के क्षेत्र में भी उपयोगी बनाती है। यही कारण है कि विश्वभर के अनेक विश्वविद्यालय और अनुसंधान संस्थान संस्कृत को भविष्य की विज्ञान–अनुकूल भाषा मानते हैं।
                </p>

                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-2">
                  <div>
                    <h4 className="font-extrabold text-sm text-[#007799] font-display">
                      प्रो. श्रीनिवास वरखेडी
                    </h4>
                    <p className="text-[10px] text-zinc-500 font-semibold mt-0.5">
                      कुलपति, केन्‍द्रीय संस्‍कृत विश्‍वविद्यालय, नई दिल्‍ली
                    </p>
                  </div>
                  <span className="text-[9px] bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400 font-bold px-2.5 py-1 rounded-md">
                    Official Endorsement
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs Accordion */}
      <section className="py-20 px-6 bg-background border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-[#007799]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#007799] max-w-xl mx-auto text-xs font-bold">
              Check here for details regarding eligibility, exam platforms, and medal criteria.
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-zinc-900 overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-extrabold text-xs md:text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
                >
                  <span className="font-display pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform duration-300 ${faqOpen[idx] ? "rotate-180 text-[#007799]" : "text-zinc-400"}`} />
                </button>

                {faqOpen[idx] && (
                  <div className="px-5 pb-5 pt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-850 font-semibold">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div >
  );
}
