"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, MessageSquare, ChevronDown, Menu, X, Sun, Moon, Search, Home as HomeIcon } from "lucide-react";
import ForgotCredentialsModal from "@/components/ForgotCredentialsModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentDateStr, setCurrentDateStr] = useState("Tuesday, June 30, 2026");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    // Generate dynamic date matching reference format
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDateStr(new Date().toLocaleDateString("en-US", options));

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Classes & Syllabus", href: "/classes" },
    { name: "Mock Tests", href: "/mock-tests" },
    { name: "Study Material", href: "/study-material" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* A. Non-sticky Upper Government Headers */}
      <header className="w-full relative z-40 bg-white transition-colors duration-300">

        {/* 1. GOVERNMENT TOPMOST BAR - Dark Teal Blue (#007799) */}
        <div className="bg-[#007799] text-white text-[10px] md:text-[11px] py-1.5 px-4 font-medium border-b border-white/10 select-none">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">

            {/* Left: Ministry / Govt designations */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="border-r border-white/35 pr-3 font-semibold">भारत सरकार | Government of India</span>
              <span className="font-semibold">शिक्षा मंत्रालय | Ministry of Education</span>
            </div>

            {/* Center: Dynamic Current Date */}
            <div className="hidden lg:block text-white/90 font-mono">
              {currentDateStr}
            </div>

            {/* Right: Accessibility Controls & Language switcher */}
            <div className="flex items-center gap-3.5">
              <a href="#main-content" className="hover:underline text-white/80">Skip to main content</a>
              <span className="text-white/30">|</span>
              <button
                onClick={() => setModalOpen(true)}
                className="hover:underline text-secondary-light font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>Recover Login</span>
              </button>
              <span className="text-white/30">|</span>
              <span className="font-bold text-secondary-light">EN</span>
            </div>

          </div>
        </div>

        {/* 2. SECONDARY TEAL LINKS ROW - Medium Teal (#0092bc) */}
        <div className="bg-[#0092bc] text-white text-[11px] py-2 px-4 font-semibold select-none">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-start gap-4 lg:gap-6">
            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            <span className="text-white/20">|</span>
            <Link href="/classes" className="hover:text-yellow-300 transition-colors">Downloads</Link>
            <span className="text-white/20">|</span>
            <Link href="/about" className="hover:text-yellow-300 transition-colors">Circulars</Link>
            <span className="text-white/20">|</span>
            <a href="https://sanskritolympiad.in/so_faq" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">FAQ</a>
            <span className="text-white/20">|</span>
            <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact Us</Link>
            <span className="text-white/20">|</span>
            <a href="https://sanskritolympiad.in/login" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors text-yellow-300 font-extrabold">Login Portal</a>
          </div>
        </div>

        {/* 3. MAIN UNIVERSITY BRANDING LOGO ROW - Solid White background */}
        <div className="w-full bg-white py-4 px-4 md:px-8 border-b border-zinc-100 select-none">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">

            {/* Left Side: Circular Logo and Sanskrit University text details */}
            <div className="flex items-center space-x-3.5 text-left">
              <Link href="/" className="relative h-16 w-16 md:h-18 md:w-18 flex-shrink-0">
                <Image
                  src="/img/logo1.png"
                  alt="CSU circular emblem"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
              <div>
                <h1 className="text-sm md:text-base font-extrabold text-blue-900 leading-tight">
                  केन्द्रीय संस्कृत विश्वविद्यालय
                </h1>
                <h2 className="text-xs md:text-sm font-bold text-red-700 leading-tight">
                  Central Sanskrit University
                </h2>
                <p className="text-[9px] text-zinc-500 font-semibold mt-0.5 leading-none">
                  संसद् के अधिनियम द्वारा स्थापित | Established by an Act of Parliament
                </p>
              </div>
            </div>

            {/* Center Column: Parliamentary details */}
            <div className="hidden lg:block text-center max-w-xs space-y-1">
              <p className="text-[10px] text-red-700 font-extrabold">
                A Central University Established by Parliament
              </p>
              <p className="text-[8px] text-zinc-500 font-semibold leading-relaxed">
                Under Ministry of Education, Govt. of India
              </p>
            </div>

            {/* Right Side: NAAC accreditation and Search Bar & Student portal button */}
            <div className="flex items-center gap-4 flex-wrap justify-center">

              {/* Accreditation details */}
              <div className="flex items-center space-x-2">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image src="/img/so_banner_icon.png" alt="Accreditation Seal" fill className="object-contain" />
                </div>
                <div className="text-[9px] text-zinc-600 font-extrabold leading-tight">
                  <span className="text-red-700 block">NAAC A++</span>
                  Grade Accredited
                </div>
              </div>

              {/* Search Box mockup and Login button */}
              <div className="flex items-center space-x-2">
                <div className="relative hidden sm:block">
                  <input
                    type="text"
                    placeholder="Search portal..."
                    className="bg-zinc-50 border border-zinc-200 rounded-lg pl-3 pr-8 py-1.5 text-xs text-zinc-700 focus:outline-none focus:border-[#007799]"
                  />
                  <Search className="h-3.5 w-3.5 text-zinc-400 absolute right-2.5 top-2" />
                </div>
                <a
                  href="https://sanskritolympiad.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#007799] hover:bg-[#005577] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
                >
                  Student Portal
                </a>
              </div>

            </div>

          </div>
        </div>

      </header>

      {/* B. Sticky Navigation Menu Bar (Sibling outside of header tag for smooth CSS stickiness) */}
      <nav className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3.5 px-4 md:px-8 select-none transition-shadow duration-300 ${scrolled ? "shadow-md" : ""
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo brand label */}
          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="h-4.5 w-4.5 text-[#007799]" />
            {/* <span className="font-extrabold text-sm text-[#007799] tracking-wider uppercase font-display">
              Sanskrit Olympiad Portal
            </span> */}
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-1 text-xs font-bold text-zinc-700 uppercase tracking-wider">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2.5 mt-4 rounded-lg transition-all duration-200 ${isActive
                        ? "text-[#007799] bg-zinc-50 font-black border-b-2 border-[#007799]"
                        : "hover:text-[#007799] hover:bg-zinc-50"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}

              {/* Olympiad results dropdown tab */}
              <li
                className="relative group"
                onMouseEnter={() => setActiveDropdown("results")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-3.5 py-2.5 hover:text-[#007799] hover:bg-zinc-50 rounded-lg cursor-pointer">
                  <span>Olympiad Results</span>
                  <ChevronDown className="h-3.5 w-3.5 ml-1" />
                </button>
                {activeDropdown === "results" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-white p-2 shadow-xl border border-zinc-200">
                    <a
                      href="https://sanskritolympiad.in/result?quiz_id=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg px-4 py-2.5 text-xs text-zinc-700 hover:bg-zinc-50 hover:text-[#007799] transition-colors font-bold"
                    >
                      Sanskrit Olympiad Result
                    </a>
                    <a
                      href="https://sanskritolympiad.in/result?quiz_id=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg px-4 py-2.5 text-xs text-zinc-700 hover:bg-zinc-50 hover:text-[#007799] transition-colors font-bold"
                    >
                      Geeta Olympiad Result
                    </a>
                    <a
                      href="https://sanskritolympiad.in/result?quiz_id=3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg px-4 py-2.5 text-xs text-zinc-700 hover:bg-zinc-50 hover:text-[#007799] transition-colors font-bold"
                    >
                      Indian Knowledge System
                    </a>
                  </div>
                )}
              </li>
            </ul>

            <span className="h-5 w-[1px] bg-zinc-200" />

            {/* Portal Action Buttons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://sanskritolympiad.in/so_knownmore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EEA410] hover:bg-[#EEA410]/95 text-zinc-950 font-extrabold text-xs tracking-wider px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200"
              >
                REGISTER NOW
              </a>
            </div>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 cursor-pointer"
              aria-label="Toggle Navigation Drawer"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mobile menu block */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-zinc-200 space-y-4 animate-fade-in bg-zinc-50 p-4 rounded-xl">
            <ul className="space-y-1 font-semibold text-sm text-zinc-700">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-lg hover:bg-zinc-100 hover:text-[#007799]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full text-left px-4 py-2.5 text-amber-600 hover:underline font-bold"
                >
                  Forgot Login Credentials?
                </button>
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-200">
              <a
                href="https://sanskritolympiad.in/login"
                className="text-center border border-zinc-300 text-zinc-700 px-4 py-2.5 rounded-lg text-xs font-bold"
              >
                Login
              </a>
              <a
                href="https://sanskritolympiad.in/so_knownmore"
                className="text-center bg-[#007799] text-white px-4 py-2.5 rounded-lg text-xs font-bold shadow-sm"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Credentials recovery backdrop modal */}
      <ForgotCredentialsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
