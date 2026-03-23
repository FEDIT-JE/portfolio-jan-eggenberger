import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { ExpertiseSection } from "@/components/portfolio/ExpertiseSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { LongevitySection } from "@/components/portfolio/LongevitySection";
import { CTA } from "@/components/portfolio/CTA";
import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ExpertiseSection />
        <ProjectsSection />
        {/* <LongevitySection /> */}
        <CTA />
      </main>
      <Footer />
      <Analytics/>
    </div>
  );
}
