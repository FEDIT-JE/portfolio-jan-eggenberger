import type { Metadata } from "next";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";

export const metadata: Metadata = {
  title: "HelvetiBill Jan Eggenberger",
  description: "A Swiss business cockpit for freelancers and SMEs — QR invoices, quotes, and automated billing.",
};

export default function HelvetiBillPage() {
  return (
    <ProjectDetail
      slug="helvetibill"
      label="Swiss Business Cockpit"
      title="HelvetiBill"
      tags={["Next.js", "Supabase", "Stripe", "TypeScript", "Tailwind CSS"]}
      href="https://helvetibill.ch"
      coverImage="/images/helvetibill.png"
      role="Founder & Software Engineer"
      year="2026 — Present"
      highlights={[
        { value: "5–8h", label: "Weekly time saved" },
        { value: "2 min", label: "Setup time" },
        { value: "CHF 12", label: "Starting price / month" },
        { value: "100%", label: "Swiss QR-invoice compliant" },
      ]}
    />
  );
}
