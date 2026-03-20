"use client";

import { useTranslation } from "@/lib/LanguageContext";
import { projects } from "@/lib/data";
import { Container } from "./Container";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { t } = useTranslation();

  const translatedProjects = projects.map((p) => ({
    ...p,
    label: t.projects.projectLabels[p.label as keyof typeof t.projects.projectLabels] ?? p.label,
    description: t.projects.projectDescriptions[p.title as keyof typeof t.projects.projectDescriptions] ?? p.description,
  }));

  return (
    <Section id="work" className="border-t border-white/[0.05]">
      <Container>
        <div className="reveal mb-20">
          <p className="text-xs font-medium tracking-widest uppercase text-[#4F8EF7]/70 mb-3">
            {t.projects.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white/90">
            {t.projects.heading}
          </h2>
        </div>

        <div className="space-y-28">
          {translatedProjects.map((project, i) => (
            <div key={project.title} className="reveal">
              <ProjectCard
                project={project}
                reverse={i % 2 !== 0}
                viewProjectLabel={t.projects.viewProject}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
