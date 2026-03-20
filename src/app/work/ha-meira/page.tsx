import type { Metadata } from "next";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";

export const metadata: Metadata = {
  title: "HA MEIRA Jan Eggenberger",
  description: "A Swiss web agency building performant, brand-aligned websites and web applications.",
};

export default function HaMeiraPage() {
  return (
    <ProjectDetail
      slug="ha-meira"
      label="Web Agency"
      title="HA MEIRA"
      tags={["Next.js", "Tailwind CSS", "Supabase", "TypeScript"]}
      href="https://ha-meira.ch"
      coverImage="/images/hameira.png"
      role="Co-Founder & Web Engineer"
      year="2025 — Present"
      highlights={[
        { value: "CHF 1,999", label: "Starting price for websites" },
        { value: "2", label: "Co-founders" },
        { value: "100%", label: "Swiss-made" },
        { value: "2025", label: "Founded" },
      ]}
    />
  );
}
