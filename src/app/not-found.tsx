"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen bg-[#0B0F1A] flex items-center justify-center px-6">
      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(79,142,247,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative text-center max-w-md w-full"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {/* Glowing 404 */}
        <div className="relative mb-8 select-none">
          <div
            className="text-[10rem] font-bold leading-none tabular-nums"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(79,142,247,0.2))",
            }}
          >
            404
          </div>
          {/* Accent line */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#4F8EF7]/60 to-transparent" />
        </div>

        {/* Glass card */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
          <h1 className="text-xl font-semibold text-white/90 mb-2">Page not found</h1>
          <p className="text-sm text-white/40 leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#4F8EF7] hover:bg-[#3d7de8] text-white text-sm font-medium transition-all duration-200 hover:shadow-[0_0_24px_rgba(79,142,247,0.35)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M11 7H3M3 7l3.5-3.5M3 7l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Go home
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-white/[0.12] text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.05] text-sm font-medium transition-all duration-200"
            >
              View resume
            </Link>
          </div>
        </div>

        {/* Subtle bottom nav links */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {[
            { label: "Work", href: "/#projects" },
            { label: "Expertise", href: "/#expertise" },
            { label: "Contact", href: "/#contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
