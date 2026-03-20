"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/LanguageContext";
import { Container } from "./Container";

export function CTA() {
  const { t } = useTranslation();
  const f = t.cta.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message, _trap: trap }),
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/90 placeholder-white/20 text-sm focus:outline-none focus:border-[#4F8EF7]/50 focus:bg-white/[0.06] transition-all duration-200";

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

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="reveal text-xs font-medium tracking-widest uppercase text-[#4F8EF7]/70 mb-6">
                {t.cta.label}
              </p>
              <h2
                className="reveal reveal-delay-1 font-bold tracking-tight text-white mx-auto"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: "20ch" }}
              >
                {t.cta.heading}
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="reveal reveal-delay-2 max-w-lg mx-auto space-y-4">
              {/* Honeypot — hidden from humans, bots fill it */}
              <input
                type="text"
                name="website"
                value={trap}
                onChange={(e) => setTrap(e.target.value)}
                tabIndex={-1}
                aria-hidden="true"
                style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, width: 0 }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/35 mb-1.5 font-medium tracking-wide">{f.name}</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/35 mb-1.5 font-medium tracking-wide">{f.email}</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="max.mustermann@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/35 mb-1.5 font-medium tracking-wide">{f.subject}</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={inputClass}
                  placeholder={f.subjectPlaceholder}
                />
              </div>

              <div>
                <label className="block text-xs text-white/35 mb-1.5 font-medium tracking-wide">{f.message}</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass + " resize-none"}
                  placeholder={f.messagePlaceholder}
                />
              </div>

              {status === "success" && (
                <p className="text-sm text-emerald-400/80 text-center py-1">{f.success}</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400/80 text-center py-1">{f.error}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl text-sm font-medium bg-white text-[#0B0F1A] hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              >
                {status === "sending" ? f.sending : f.send}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
