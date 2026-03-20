"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useTranslation } from "@/lib/LanguageContext";

export type ProjectDetailProps = {
  slug: "ha-meira" | "cvolution" | "helvetibill";
  label: string;
  title: string;
  tags: string[];
  href?: string;
  coverImage: string;
  role: string;
  year: string;
  highlights: {
    value: string;
    label: string;
  }[];
  images?: string[];
};

export function ProjectDetail({
  slug,
  label,
  title,
  tags,
  href,
  coverImage,
  role,
  year,
  highlights,
  images = [],
}: ProjectDetailProps) {
  const { t } = useTranslation();
  const ui = t.projectDetail;
  const content = t.workPages[slug];

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-28">

        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-16">
          <Link
            href="/#work"
            className="reveal inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/70 transition-colors mb-12"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M11.5 7H2.5M6.5 3L2.5 7L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {ui.allProjects}
          </Link>

          <div className="grid lg:grid-cols-[1fr_280px] gap-16 items-start">
            <div>
              <p className="reveal text-xs font-medium tracking-widest uppercase text-[#4F8EF7]/70 mb-4">
                {label}
              </p>
              <h1
                className="reveal reveal-delay-1 font-bold tracking-tight text-white/95 mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", lineHeight: 1.06, letterSpacing: "-0.03em" }}
              >
                {title}
              </h1>
              <p className="reveal reveal-delay-2 text-lg text-white/45 leading-relaxed max-w-xl mb-8">
                {content.tagline}
              </p>
              <div className="reveal reveal-delay-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.08] text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta card */}
            <div className="reveal reveal-delay-2 space-y-6 pt-2">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 space-y-5">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/25 mb-1">{ui.role}</p>
                  <p className="text-sm text-white/70">{role}</p>
                </div>
                <div className="border-t border-white/[0.06]" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/25 mb-1">{ui.year}</p>
                  <p className="text-sm text-white/70">{year}</p>
                </div>
                {href && (
                  <>
                    <div className="border-t border-white/[0.06]" />
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#4F8EF7]/80 hover:text-[#4F8EF7] transition-colors"
                    >
                      {ui.visitSite}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Cover image */}
        <div className="reveal max-w-6xl mx-auto px-6 lg:px-8 mb-24">
          <div className="relative rounded-2xl aspect-[15/9]">
            <Image src={coverImage} alt={title} fill priority className="object-cover" sizes="(max-width: 1280px) 100vw, 1152px" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="border-y border-white/[0.05] mb-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05]">
                {highlights.map((h, i) => (
                  <div key={h.label} className={`reveal reveal-delay-${i + 1} py-10 px-8 first:pl-0 last:pr-0`}>
                    <p className="text-2xl font-bold text-white/90 mb-1">{h.value}</p>
                    <p className="text-xs text-white/35 tracking-wide">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-24">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24">
            <div className="space-y-14">
              <div className="reveal">
                <h2 className="text-xs font-medium tracking-widest uppercase text-white/25 mb-5">{ui.overview}</h2>
                <p className="text-base text-white/55 leading-relaxed">{content.overview}</p>
              </div>
              {content.sections.map((s: { title: string; body: string }, i: number) => (
                <div key={s.title} className={`reveal reveal-delay-${i + 1}`}>
                  <h2 className="text-xs font-medium tracking-widest uppercase text-white/25 mb-5">{s.title}</h2>
                  <p className="text-base text-white/55 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div />
          </div>
        </div>

        {/* Extra images */}
        {images.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-24">
            <div className="grid md:grid-cols-2 gap-6">
              {images.map((src, i) => (
                <div key={i} className="reveal relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3]">
                  <Image src={src} alt={`${title} screenshot ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer link */}
        <div className="border-t border-white/[0.05] py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/#work" className="inline-flex items-center gap-3 text-sm text-white/40 hover:text-white/80 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M11.5 7H2.5M6.5 3L2.5 7L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {ui.backToProjects}
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
