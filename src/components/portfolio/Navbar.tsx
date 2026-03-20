"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [scrolled]); // eslint-disable-line react-hooks/exhaustive-deps

  const navLinks = [
    { label: t.nav.expertise, href: "/#expertise" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4 pointer-events-none">
      <nav
        style={{
          backgroundColor: scrolled ? "rgba(11,15,26,0.75)" : "rgba(11,15,26,0)",
          borderColor: scrolled ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.45)" : "none",
          maxWidth: scrolled ? "672px" : "1280px",
        }}
        className={`pointer-events-auto w-full flex items-center justify-between px-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 ease-out ${scrolled ? "h-18" : "h-14"}`}
      >
        {/* Wordmark */}
        <Link href="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors shrink-0">
          Jan Eggenberger
        </Link>

        {/* Desktop center links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="px-3 py-1.5 text-sm text-white/50 hover:text-white/90 rounded-lg transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/resume"
            className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-lg border border-white/[0.12] text-white/80 hover:text-white hover:border-white/25 hover:bg-white/[0.05] transition-all duration-200"
          >
            {t.nav.resume}
          </Link>
          {/* Language toggle */}
          <button
            onClick={() => setLocale(locale === "de" ? "en" : "de")}
            className="px-4 py-1.5 text-sm font-medium rounded-lg border border-white/[0.1] text-white/40 hover:text-white/80 hover:border-white/20 transition-all duration-200"
          >
            {locale === "de" ? "EN" : "DE"}
          </button>
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/resume"
            className="text-xs font-medium px-3 py-1.5 rounded-lg border border-white/[0.12] text-white/70 hover:text-white transition-colors"
          >
            {t.nav.resume}
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="pointer-events-auto flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span className={`block w-5 h-px bg-white/60 transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block w-5 h-px bg-white/60 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`pointer-events-auto md:hidden w-full max-w-sm mt-2 rounded-2xl border border-white/[0.09] bg-[#0B0F1A]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "opacity-100 translate-y-0 max-h-64" : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-3 text-sm text-white/55 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="border-t border-white/[0.06] mx-3 mt-1 pt-1">
            <button
              onClick={() => { setLocale(locale === "de" ? "en" : "de"); setMenuOpen(false); }}
              className="block w-full text-left px-2 py-3 text-sm text-white/55 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
            >
              {locale === "de" ? "English" : "Deutsch"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
