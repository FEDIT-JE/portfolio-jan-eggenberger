"use client";

import { useTranslation } from "@/lib/LanguageContext";
import { Container } from "./Container";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 border-t border-white/[0.05]">
      <Container size="md">
        <div className="reveal-scale relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[#0F1525]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(79,142,247,0.18) 0%, transparent 60%)" }}
            aria-hidden
          />
          <div className="absolute inset-0 rounded-3xl border border-white/[0.08]" />

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-24 text-center">
            <p className="reveal text-xs font-medium tracking-widest uppercase text-[#4F8EF7]/70 mb-6">
              {t.cta.label}
            </p>
            <h2
              className="reveal reveal-delay-1 font-bold tracking-tight text-white mx-auto mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: "16ch" }}
            >
              {t.cta.heading}
            </h2>
            <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:jan@eggenberger.biz"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-medium bg-white text-[#0B0F1A] hover:bg-white/90 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                {t.cta.cta1}
              </a>
              <a
                href="mailto:jan@eggenberger.biz"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-white/60 hover:text-white border border-white/[0.1] hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200"
              >
                {t.cta.cta2}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
