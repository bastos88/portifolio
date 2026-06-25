import type { PortfolioSkill } from "../../types/portfolio";

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
      className="group flex h-full min-h-[150px] flex-col items-center justify-between border-2 border-[#4A4028] bg-[#F0E3BE] px-3 py-4 text-center text-[#2E2A1F] shadow-[3px_3px_0_#25261C] transition-transform duration-150 hover:-translate-y-1 hover:shadow-[5px_5px_0_#25261C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C93A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0E3BE]"
      tabIndex={0}
    >
      <div
        className="flex size-12 items-center justify-center border-2 border-[#25261C] bg-[#171811] shadow-[2px_2px_0_rgba(0,0,0,0.45)] transition-colors duration-150 group-hover:border-arcade-greenDark"
        style={{ backgroundColor: badgeBackground }}
        aria-hidden="true"
      >
        <Icon className="size-7" style={{ color: skill.color }} />
      </div>

      <h3 className="mt-3 flex min-h-[34px] items-center justify-center font-pixel text-[8px] uppercase leading-relaxed sm:text-[9px]">
        {skill.name}
      </h3>

      <div className="mt-2 flex w-full flex-col items-center gap-1.5">
        <span className="font-pixel text-[7px] uppercase text-[#376D24]">LEVEL {levelLabel}</span>

        <div className="flex gap-1" aria-label={`Nível ${skill.level} de 10`}>
          {Array.from({ length: 10 }, (_, index) => (
            <span
              key={index}
              className={`size-1.5 border ${index < skill.level ? "border-[#376D24] bg-[#82C93A]" : "border-[#807852] bg-transparent"}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
