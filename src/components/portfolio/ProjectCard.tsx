import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
  viewProjectLabel?: string;
}

export function ProjectCard({ project, reverse = false, viewProjectLabel = "View project" }: ProjectCardProps) {
  return (
    <article className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Image */}
      <div className={`relative group ${reverse ? "lg:order-2" : ""}`}>
        <div
          className="absolute inset-0 rounded-2xl blur-2xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "radial-gradient(ellipse at center, rgba(79,142,247,0.08), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative rounded-2xl overflow-hidden aspect-[5/3]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-700 shadow-xl group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-5 ${reverse ? "lg:order-1" : ""}`}>
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-[#4F8EF7]/60 mb-3">
            {project.label}
          </p>
          <h3 className="text-3xl font-bold tracking-tight text-white/95 mb-4">
            {project.title}
          </h3>
          <p className="text-base text-white/45 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.08] text-white/50">
              {tag}
            </span>
          ))}
        </div>

        {project.href && (
          <Link href={project.href} className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 w-fit mt-2">
            {viewProjectLabel}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}
