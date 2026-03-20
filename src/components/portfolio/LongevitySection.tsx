"use client";

import { useTranslation } from "@/lib/LanguageContext";
import { Container } from "./Container";
import { Section } from "./Section";

export function LongevitySection() {
  const { t } = useTranslation();

  return (
    <>
      <Section id="process" className="border-t border-white/[0.05]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-medium tracking-widest uppercase text-[#4F8EF7]/70 mb-4">
                {t.longevity.label}
              </p>
              <h2
                className="font-bold tracking-tight text-white/95 mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                {t.longevity.heading.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className="text-base text-white/40 leading-relaxed max-w-sm">
                {t.longevity.body}
              </p>
            </div>

            <div className="space-y-0">
              {t.longevity.pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className={`py-8 ${i < t.longevity.pillars.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                >
                  <h3 className="text-base font-semibold text-white/85 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/[0.05]">
        <Container>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-[#4F8EF7]/70 mb-3">
                {t.longevity.processLabel}
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white/90">
                {t.longevity.processHeading}
              </h2>
            </div>
            <span className="text-xs text-white/20 tracking-wider font-mono hidden md:block">PROTOCOL V2.4</span>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
            {t.longevity.steps.map((step, i) => (
              <div key={step.title} className="bg-[#0B0F1A] p-8 hover:bg-[#0F1525] transition-colors duration-300">
                <div className="text-4xl font-bold text-white/[0.06] font-mono mb-6 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-semibold text-white/85 mb-3">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
