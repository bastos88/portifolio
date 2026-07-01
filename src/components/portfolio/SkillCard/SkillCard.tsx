import type { PortfolioSkill } from "../../../types/portfolio";
import { cn } from "../../../lib/cn";

type SkillCardProps = {
  skill: PortfolioSkill;
};

const darkLogoIds = new Set(["express", "github", "prisma"]);

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;
  const levelLabel = String(skill.level).padStart(2, "0");
  const badgeBackground = darkLogoIds.has(skill.id) ? "#F7E8B8" : "#171811";

  return (
    <article
      className="group flex aspect-square flex-col items-center justify-center gap-[clamp(0.45rem,1vw,0.85rem)] border-2 border-[#4A4028] bg-[#F0E3BE] p-[clamp(0.65rem,1.3vw,1.1rem)] text-center text-[#2E2A1F] shadow-[3px_3px_0_#25261C] transition-transform duration-150 hover:-translate-y-1 hover:shadow-[5px_5px_0_#25261C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C93A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0E3BE]"
      tabIndex={0}
    >
      <div
        className="flex size-[clamp(3rem,5.8vw,5.5rem)] items-center justify-center border-2 border-[#25261C] bg-[#171811] shadow-[2px_2px_0_rgba(0,0,0,0.45)] transition-colors duration-150 group-hover:border-arcade-greenDark"
        style={{ backgroundColor: badgeBackground }}
        aria-hidden="true"
      >
        <Icon className="size-[62%]" style={{ color: skill.color }} />
      </div>

      <h3 className="flex min-h-[2.25em] items-center justify-center font-pixel text-[clamp(0.52rem,0.95vw,0.78rem)] uppercase leading-relaxed">
        {skill.name}
      </h3>

      <div className="flex w-full flex-col items-center gap-[clamp(0.25rem,0.55vw,0.45rem)]">
        <span className="font-pixel text-[clamp(0.46rem,0.82vw,0.65rem)] uppercase text-[#376D24]">LEVEL {levelLabel}</span>

        <div className="flex w-full max-w-[9rem] justify-center gap-[clamp(0.18rem,0.35vw,0.35rem)]" aria-label={`Nível ${skill.level} de 10`}>
          {Array.from({ length: 10 }, (_, index) => (
            <span
              key={index}
              className={cn(
                "size-[clamp(0.3rem,0.55vw,0.48rem)] border",
                index < skill.level ? "border-[#376D24] bg-[#82C93A]" : "border-[#807852] bg-transparent",
              )}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
