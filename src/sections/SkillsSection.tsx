import PixelPanel from "../components/portfolio/PixelPanel";
import PixelSectionTitle from "../components/portfolio/PixelSectionTitle";
import SkillCard from "../components/portfolio/SkillCard";
import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <PixelPanel id="skills">
      <PixelSectionTitle number="02" title="Skills Unlocked" />
      <div className="grid auto-rows-fr grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </PixelPanel>
  );
}
