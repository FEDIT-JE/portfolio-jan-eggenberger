"use client";

import Image from "next/image";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { useTranslation } from "@/lib/LanguageContext";

function getAge(birthdate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) age--;
  return age;
}

const skills: Record<string, string[]> = {
  "Day Job (C# / .NET)": ["C#", "Blazor", "WPF", "ASP.NET", "SQL Server"],
  "Side Projects": ["Next.js", "Supabase", "Stripe", "TypeScript", "Tailwind CSS"],
};

export default function ResumePage() {
  const { t } = useTranslation();
  const age = getAge(new Date(2001, 8, 6));
  const r = t.resume;

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="mb-20 pb-12 border-b border-white/[0.06]">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-white/[0.08] mb-5 sm:hidden">
              <Image src="/images/avatar.jpg" alt="Jan Eggenberger" width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-6 mb-6">
              <div className="hidden sm:block w-24 h-24 rounded-full overflow-hidden border border-white/[0.08] flex-shrink-0">
                <Image src="/images/avatar.jpg" alt="Jan Eggenberger" width={96} height={96} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-[#4F8EF7]/70 mb-1">
                  {r.label}
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-white/95">
                  Jan Eggenberger
                </h1>
              </div>
            </div>
            <p className="text-base text-white/40 mb-6">{r.role}</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/35">
              <a href="mailto:jan@eggenberger.biz" className="hover:text-white/70 transition-colors">
                jan@eggenberger.biz
              </a>
              <span>·</span>
              <a href="https://github.com/FEDIT-JE" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                github.com/FEDIT-JE
              </a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/jan-eggenberger-903517179" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-20">
            <h2 className="text-xs font-medium tracking-widest uppercase text-white/25 mb-10">
              {r.workExperience}
            </h2>
            <div className="space-y-14">
              {r.experience.map((job) => (
                <div key={job.company} className="grid sm:grid-cols-[1fr_2fr] gap-6 sm:gap-12">
                  <div>
                    <p className="text-sm font-medium text-white/80">{job.period}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 text-[#4F8EF7]/80 tracking-wide uppercase">
                      {job.type}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white/90">{job.company}</h3>
                    <p className="text-sm text-white/40 mb-4">{job.role}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((a: string) => (
                        <li key={a} className="flex items-start gap-3 text-sm text-white/45 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-20 pb-12 border-b border-white/[0.06]">
            <h2 className="text-xs font-medium tracking-widest uppercase text-white/25 mb-10">
              {r.technicalSkills}
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs font-medium text-white/35 mb-3 tracking-wide">
                    {r.skillCategories[category as keyof typeof r.skillCategories] ?? category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] border border-white/[0.07] text-white/55">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages + Info */}
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xs font-medium tracking-widest uppercase text-white/25 mb-6">
                {r.languages}
              </h2>
              <div className="space-y-2">
                {(["Native", "Professional"] as const).map((level, i) => (
                  <div key={level} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{i === 0 ? "Deutsch" : "English"}</span>
                    <span className="text-white/25">{r.langLevels[level]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs font-medium tracking-widest uppercase text-white/25 mb-6">
                {r.details}
              </h2>
              <div className="space-y-2 text-sm text-white/40">
                <p>Switzerland · Argovia</p>
                <p>{age} years old</p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
