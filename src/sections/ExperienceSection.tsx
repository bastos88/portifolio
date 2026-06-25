import PixelPanel from "../components/portfolio/PixelPanel";
import PixelSectionTitle from "../components/portfolio/PixelSectionTitle";
import TimelineStep from "../components/portfolio/TimelineStep";
import { timeline } from "../data/timeline";

export default function ExperienceSection() {
  return (
    <PixelPanel id="experience">
      <PixelSectionTitle number="05" title="Game Progress" />
      <div className="grid gap-6 md:grid-cols-4">
        {timeline.map((item) => (
          <TimelineStep key={item.year} item={item} />
        ))}
      </div>
    </PixelPanel>
  );
}
