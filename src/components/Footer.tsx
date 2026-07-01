"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Animated floating particle component for decorative background    */
/* ------------------------------------------------------------------ */
function FloatingParticle({ delay, size, left, duration }: { delay: number; size: number; left: string; duration: number }) {
  return (
    <div
      className="absolute rounded-full opacity-20 pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        bottom: "-20px",
        background: "linear-gradient(135deg, #EEA410 0%, #FDF229 100%)",
        animation: `floatUp ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Newsletter email capture (visual-only, no backend)                */
/* ------------------------------------------------------------------ */
function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-2 max-w-sm">
      <div className="relative flex-1">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-2.5 text-sm text-white/90 placeholder-white/30 focus:outline-none focus:border-[#EEA410]/50 focus:ring-1 focus:ring-[#EEA410]/30 transition-all duration-300 backdrop-blur-sm"
        />
      </div>
      <button
        type="submit"
        className="group relative overflow-hidden bg-gradient-to-r from-[#EEA410] to-[#d4920e] hover:from-[#FDF229] hover:to-[#EEA410] text-zinc-900 font-bold text-xs tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-[#EEA410]/20 hover:shadow-[#EEA410]/40 transition-all duration-300 cursor-pointer"
      >
        <span className="relative z-10">{submitted ? "✓ SUBSCRIBED" : "SUBSCRIBE"}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDF229] to-[#EEA410] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Social icon SVGs                                                  */
/* ------------------------------------------------------------------ */
const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/CentralSanskritUniversity",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/CSanskritUni",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@CentralSanskritUniversity",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/centralsanskrituniversity",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Footer quick link columns                                         */
/* ------------------------------------------------------------------ */
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Classes & Syllabus", href: "/classes" },
  { label: "Mock Tests", href: "/mock-tests" },
  { label: "Study Material", href: "/study-material" },
];

const resourceLinks = [
  { label: "FAQ", href: "https://sanskritolympiad.in/so_faq", external: true },
  { label: "Privacy Policy", href: "https://sanskritolympiad.in/privacy", external: true },
  { label: "Terms & Conditions", href: "https://sanskritolympiad.in/term", external: true },
  { label: "Student Portal", href: "https://sanskritolympiad.in/login", external: true },
  { label: "Register Now", href: "https://sanskritolympiad.in/so_knownmore", external: true },
];

const partners = [
  { src: "/csu.png", alt: "Central Sanskrit University", href: "https://www.sanskrit.nic.in/" },
  { src: "/jethat.png", alt: "JetHat", href: "https://jethat.in/" },
  { src: "/msp.png", alt: "MSP", href: "https://www.msp.ac.in/" },
  { src: "/ministry.png", alt: "Ministry of Education", href: "https://www.education.gov.in/" },
];

/* ================================================================== */
/*  Main Footer Component                                             */
/* ================================================================== */
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ============================================================ */}
      {/*  PARTNER ORGANISATIONS LOGO BAR                              */}
      {/* ============================================================ */}
      <section className="relative py-14 bg-white border-t border-zinc-200/50 select-none overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #9C2A73 1px, transparent 1px), radial-gradient(circle at 75% 50%, #EEA410 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#EEA410]/40" />
            <h3 className="text-[10px] uppercase font-black tracking-[0.3em] text-[#007799] font-display">
              Partner Organizations &amp; Companies
            </h3>
            <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#EEA410]/40" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {partners.map((partner) => (
              <a
                key={partner.alt}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative "
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-9 md:h-12 w-auto object-contain"
                />
                {/* Hover glow */}
                <div className="absolute -inset-4 bg-[#EEA410]/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  MAIN FOOTER                                                 */}
      {/* ============================================================ */}
      <footer
        ref={footerRef}
        className="relative overflow-hidden bg-gradient-to-b from-[#0e0515] via-[#120a1a] to-[#0a0410] text-white/70 select-none"
      >
        {/* ── Decorative background layer ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#9C2A73]/8 blur-[120px]" />
          <div className="absolute top-1/2 -right-20 w-72 h-72 rounded-full bg-[#EEA410]/6 blur-[100px]" />
          <div className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-[#007799]/6 blur-[100px]" />

          {/* Floating particles */}
          <FloatingParticle delay={0} size={4} left="10%" duration={8} />
          <FloatingParticle delay={2} size={3} left="25%" duration={10} />
          <FloatingParticle delay={4} size={5} left="45%" duration={7} />
          <FloatingParticle delay={1} size={3} left="65%" duration={9} />
          <FloatingParticle delay={3} size={4} left="85%" duration={11} />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* ── Top accent line ── */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#EEA410]/60 to-transparent" />

        {/* ── Content container ── */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">

          {/* ====== ROW 1: Multi-column grid ====== */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Column 1 – Brand & Mission */}
            <div className="lg:col-span-1 space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12  rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/logo-1.png"
                    alt="Sanskrit Olympiad Logo"
                    fill
                    className="object-contain rounded-full brightness-110"
                  />
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-sm tracking-wide font-display">
                    Sanskrit Olympiad
                  </h4>
                  <p className="text-[10px] text-white/40 font-medium">
                    By Central Sanskrit University
                  </p>
                </div>
              </div>

              {/* <p className="text-xs text-white/50 leading-relaxed max-w-xs">
                Promoting the timeless wisdom of Sanskrit through competitive excellence. Empowering students across India with knowledge, tradition, and academic distinction.
              </p> */}

              {/* Sanskrit shloka */}
              <div className="relative pl-4 border-l-2 border-[#EEA410]/30">
                <p className="text-xs text-[#EEA410]/70 italic font-display leading-relaxed">
                  &quot;संस्कृतं नाम दैवी वाग्&quot;
                </p>
                <p className="text-[10px] text-white/30 mt-1">— The divine language of the sages</p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2 pt-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="group relative w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/50 hover:text-white hover:bg-[#EEA410]/20 hover:border-[#EEA410]/40 transition-all duration-300"
                  >
                    {social.icon}
                    <div className="absolute inset-0 rounded-xl bg-[#EEA410]/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 – Quick Links */}
            <div className="space-y-5">
              <h5 className="text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 font-display">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#EEA410] to-transparent rounded-full" />
                Quick Links
              </h5>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-xs text-white/50 hover:text-[#EEA410] transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#EEA410] mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 – Resources */}
            <div className="space-y-5">
              <h5 className="text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 font-display">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#9C2A73] to-transparent rounded-full" />
                Resources
              </h5>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-xs text-white/50 hover:text-[#EEA410] transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#EEA410] mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                      <svg
                        className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 – Contact & Newsletter */}
            <div className="space-y-5">
              <h5 className="text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 font-display">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#007799] to-transparent rounded-full" />
                Stay Connected
              </h5>

              {/* Contact info */}
              <div className="space-y-3">
                <a
                  href="mailto:info@sanskritolympiad.in"
                  className="flex items-center gap-3 text-xs text-white/50 hover:text-[#EEA410] transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] group-hover:bg-[#EEA410]/10 group-hover:border-[#EEA410]/30 transition-all duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  info@sanskritolympiad.in
                </a>

                <a
                  href="tel:+911124174050"
                  className="flex items-center gap-3 text-xs text-white/50 hover:text-[#EEA410] transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] group-hover:bg-[#EEA410]/10 group-hover:border-[#EEA410]/30 transition-all duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  +91 11-2417-4050
                </a>

                <div className="flex items-start gap-3 text-xs text-white/50 group">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">
                    56-57, Institutional Area,<br />
                    Janakpuri, New Delhi - 110058
                  </span>
                </div>
              </div>

              {/* Newsletter */}
              {/* <div className="pt-2">
                <p className="text-[11px] text-white/40 mb-1">Get updates on upcoming olympiads</p>
                <NewsletterSignup />
              </div> */}
            </div>
          </div>

          {/* ====== ROW 2: Bottom divider with decorative elements ====== */}
          <div className="relative mb-8">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
            {/* Center diamond accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-[#EEA410]/30 rotate-45 bg-[#0e0515]" />
          </div>

          {/* ====== ROW 3: Copyright bar ====== */}
          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <div className="flex items-center gap-3 text-[11px] text-white/35">
              <span>© {new Date().getFullYear()} Sanskrit Olympiad. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[10px] text-white/30">
              <a
                href="https://sanskritolympiad.in/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors duration-300"
              >
                Privacy
              </a>
              <span className="text-white/10">|</span>
              <a
                href="https://sanskritolympiad.in/term"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors duration-300"
              >
                Terms
              </a>
              <span className="text-white/10">|</span>
              <span>Powered by Anuchanam & Jethat  </span>
            </div>
          </div>
        </div>

        {/* ── Bottom accent gradient line ── */}
        <div className="h-1 w-full bg-gradient-to-r from-[#9C2A73] via-[#EEA410] to-[#007799]" />
      </footer>

      {/* ── Floating particle keyframes (injected once) ── */}
      <style jsx global>{`
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-180px) scale(1.5);
            opacity: 0.05;
          }
        }
      `}</style>
    </>
  );
}
