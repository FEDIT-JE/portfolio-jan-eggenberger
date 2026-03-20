import type { Metadata } from "next";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";

export const metadata: Metadata = {
  title: "CVolution Jan Eggenberger",
  description: "A Swiss career services platform helping 1,000+ job seekers land their next role.",
};

export default function CvolutionPage() {
  return (
    <ProjectDetail
      slug="cvolution"
      label="HR & Career Platform"
      title="CVolution"
      tags={["Next.js", "Supabase", "Tailwind CSS", "TypeScript"]}
      href="https://cvolution.ch"
      coverImage="/images/cvolution.png"
      role="CTO & Software Engineer"
      year="2025 — Present"
      highlights={[
        { value: "1,000+", label: "Clients supported" },
        { value: "10+", label: "Years recruiting expertise" },
        { value: "CHF 49", label: "Entry-level document review" },
        { value: "2025", label: "Launched" },
      ]}
    />
  );
}
