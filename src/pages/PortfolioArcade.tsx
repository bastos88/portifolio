import { lazy, Suspense } from "react";
import RetroNavbar from "../components/portfolio/RetroNavbar/index";
import StatusFooter from "../components/portfolio/StatusFooter/index";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import ExperienceSection from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";
import SourceCodeSection from "../sections/SourceCodeSection";

const RocketScrollTop = lazy(() => import("../components/portfolio/RocketScrollTop/index"));

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
