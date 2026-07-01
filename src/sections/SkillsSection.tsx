import PixelPanel from "../components/portfolio/PixelPanel";
import PixelSectionTitle from "../components/portfolio/PixelSectionTitle";
import PixelGhost from "../components/portfolio/PixelGhost";
import SkillCard from "../components/portfolio/SkillCard";
import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <PixelPanel id="skills">
      <PixelSectionTitle number="02" title="Skills Unlocked" />
      <div className="skills-grid-shell">
        <div className="grid grid-cols-2 gap-7 md:grid-cols-3 md:justify-center md:[grid-template-columns:repeat(3,minmax(0,190px))] lg:[grid-template-columns:repeat(5,minmax(0,180px))] xl:[grid-template-columns:repeat(5,minmax(0,200px))]">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
        <PixelGhost id="red" bodyColor="#C74B31" initialNodeIndex={0} startDelayMs={250} />
        <PixelGhost id="blue" bodyColor="#3178C6" initialNodeIndex={2} startDelayMs={650} />
        <PixelGhost id="green" bodyColor="#82C93A" initialNodeIndex={4} startDelayMs={1050} />
      </div>
    </PixelPanel>
  );
}
