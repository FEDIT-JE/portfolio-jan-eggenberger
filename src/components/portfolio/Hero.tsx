"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/LanguageContext";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle at center, #4F8EF7 0%, transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-60 w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle at center, #818CF8 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 w-fit opacity-0 animate-[fadeUp_0.5s_ease_0.1s_forwards]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7]" />
              <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
                {t.hero.label}
              </span>
            </div>

            <h1
              className="opacity-0 animate-[fadeUp_0.6s_ease_0.2s_forwards]"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700 }}
            >
              {t.hero.headline1}{" "}
              <em className="not-italic" style={{
                background: "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.45) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}>
                {t.hero.headline2}
              </em>
            </h1>

            <p className="text-lg text-white/45 leading-relaxed max-w-[480px] opacity-0 animate-[fadeUp_0.6s_ease_0.35s_forwards]">
              {t.hero.subtext}
            </p>

            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-[fadeUp_0.6s_ease_0.5s_forwards]">
              <a href="#work" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium bg-white text-[#0B0F1A] hover:bg-white/90 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                {t.hero.cta1}
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200">
                {t.hero.cta2}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-2 opacity-0 animate-[fadeUp_0.6s_ease_0.65s_forwards]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-white/35 tracking-wide">{t.hero.available}</span>
            </div>
          </div>

          {/* Right mockup */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-[fadeIn_0.8s_ease_0.4s_forwards]">
            <div className="relative w-full max-w-[440px]">
              <div className="absolute inset-0 rounded-2xl blur-2xl scale-95"
                style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(79,142,247,0.1) 0%, transparent 70%)" }} />
              <div className="relative rounded-2xl border border-white/[0.08] bg-[#0F1525]/80 backdrop-blur-sm overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                <div className="flex items-center px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 h-6 w-full max-w-[200px] rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] text-white/25 justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                        <path d="M5 1.5C3.067 1.5 1.5 3.067 1.5 5S3.067 8.5 5 8.5 8.5 6.933 8.5 5 6.933 1.5 5 1.5z" stroke="currentColor" strokeWidth="1" />
                        <path d="M5 3.5v1.75l1 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                      jan-eggenberger.com
                    </div>
                  </div>
                  <div className="w-[54px] flex-shrink-0" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/[0.06] border border-white/[0.08] overflow-hidden flex-shrink-0">
                      <Image src="/images/avatar.jpg" alt="Jan Eggenberger" width={64} height={64} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1 pt-1">
                      <div className="text-sm font-semibold text-white/90">Jan Eggenberger</div>
                      <div className="text-xs text-white/40">{t.hero.label}</div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] uppercase tracking-widest text-white/25 font-medium">{t.hero.workExperience}</div>
                    {[
                      { company: "Federer Informatik AG", role: "Software Engineer", years: "2021 – Present" },
                      { company: "Raiffeisen Switzerland", role: "Software Developer Apprentice", years: "2017 – 2021" },
                    ].map((exp) => (
                      <div key={exp.company} className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                        <div>
                          <div className="text-xs font-medium text-white/70">{exp.company}</div>
                          <div className="text-[11px] text-white/35">{exp.role}</div>
                        </div>
                        <div className="text-[10px] text-white/25">{exp.years}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] uppercase tracking-widest text-white/25 font-medium">{t.hero.skills}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {["C#", "Blazor", "WPF", "SQL", "Next.js", "Supabase", "Stripe"].map((skill) => (
                        <span key={skill} className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.04] border border-white/[0.07] text-white/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-[fadeIn_1s_ease_1.5s_forwards] opacity-0" />
      </div>
    </section>
  );
}
