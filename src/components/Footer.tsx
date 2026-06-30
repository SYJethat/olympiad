"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Partner Organizations Logo Bar */}
      <section className="py-12 bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-900 select-none">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-[10px] uppercase font-black tracking-widest text-[#007799] mb-8 font-display">
            Partner Organizations &amp; Companies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-75 dark:opacity-90">
            <a href="https://www.sanskrit.nic.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <img src="/csu.png" alt="CSU Logo" className="h-8 md:h-11 w-auto object-contain dark:brightness-200" />
            </a>
            <a href="https://jethat.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <img src="/jethat.png" alt="JetHat Logo" className="h-8 md:h-11 w-auto object-contain dark:brightness-200" />
            </a>
            <a href="https://www.msp.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <img src="/msp.png" alt="MSP Logo" className="h-8 md:h-11 w-auto object-contain dark:brightness-200" />
            </a>
            <a href="https://www.education.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <img src="/ministry.png" alt="Ministry of Education" className="h-8 md:h-11 w-auto object-contain dark:brightness-200" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#150a1b] text-white/70 py-12 px-6 border-t border-secondary/15">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Logo brand footer image */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="relative h-12 w-28">
            <Image 
              src="/img/logo1.png" 
              alt="Sanskrit Olympiad Logo" 
              fill 
              className="object-contain brightness-110"
            />
          </div>
          <p className="max-w-md text-xs text-white/50 italic font-display">
            संस्कृतं नाम दैवी वागन्वाख्याता महर्षिभिः ।
          </p>
        </div>

        {/* Navigation list matching the original site */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-semibold mb-8">
          <li>
            <Link href="/" className="hover:text-secondary-light transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-secondary-light transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <a 
              href="https://sanskritolympiad.in/so_faq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary-light transition-colors"
            >
              FAQ
            </a>
          </li>
          <li>
            <a 
              href="https://sanskritolympiad.in/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary-light transition-colors"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a 
              href="https://sanskritolympiad.in/term" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary-light transition-colors"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>

        {/* Separator line */}
        <div className="w-full max-w-4xl h-[1px] bg-white/10 mb-8" />

        {/* Subfooter details */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl text-[10px] text-white/45 space-y-4 md:space-y-0">
          <p>Copyright © Sanskrit Olympiad 2023. All rights reserved</p>
          <div className="flex space-x-2 items-center">
            <span>Powered by Central Sanskrit University & Little Guru</span>
          </div>
        </div>

      </div>
    </footer>
    </>
  );
}
