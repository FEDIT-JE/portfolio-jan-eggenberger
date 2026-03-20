"use client";

import { useTranslation } from "@/lib/LanguageContext";
import { expertise } from "@/lib/data";
import { Container } from "./Container";
import { Section } from "./Section";

const icons = {
  backend: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="12" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  data: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <ellipse cx="11" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 5v5c0 1.657 3.134 3 7 3s7-1.343 7-3V5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 10v5c0 1.657 3.134 3 7 3s7-1.343 7-3v-5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  frontend: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="2" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 9L5.5 11L8 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 9L16.5 11L14 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7.5L10 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

export function ExpertiseSection() {
  const { t } = useTranslation();

  return (
    <Section id="expertise" className="border-t border-white/[0.05]">
      <Container>
        <div className="reveal mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-[#4F8EF7]/70 mb-3">
            {t.expertise.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white/90">
            {t.expertise.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group relative rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 mb-5 group-hover:text-[#4F8EF7]/80 group-hover:border-[#4F8EF7]/20 transition-colors duration-300">
                {icons[item.icon as keyof typeof icons]}
              </div>
              <h3 className="text-base font-semibold text-white/90 mb-2">
                {t.expertise.items[i].title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-5">
                {t.expertise.items[i].description}
              </p>
              <ul className="space-y-1.5">
                {item.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2 text-xs text-white/35">
                    <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
