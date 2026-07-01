import { lazy, Suspense } from "react";
import RetroNavbar from "../components/portfolio/RetroNavbar/RetroNavbar";
import StatusFooter from "../components/portfolio/StatusFooter/StatusFooter";
import AboutSection from "../sections/AboutSection/AboutSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import ExperienceSection from "../sections/ExperienceSection/ExperienceSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection";
import SkillsSection from "../sections/SkillsSection/SkillsSection";
import SourceCodeSection from "../sections/SourceCodeSection/SourceCodeSection";

const RocketScrollTop = lazy(() => import("../components/portfolio/RocketScrollTop/RocketScrollTop"));

export default function PortfolioArcade() {
  return (
    <div className="min-h-screen bg-arcade-page text-arcade-light">
      <RetroNavbar />

      <main>
        <HeroSection />
        <div className="mx-auto max-w-[1360px] space-y-0 px-4 pb-10">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <SourceCodeSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>

      <StatusFooter />
      <Suspense fallback={null}>
        <RocketScrollTop targetId="home" triggerId="game-progress" />
      </Suspense>
    </div>
  );
}
