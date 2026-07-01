import { Code2, Play } from "lucide-react";
import type { Project } from "../../../types/portfolio";
import LinkButton from "../../ui/buttons/LinkButton/LinkButton";
import { getProjectTechIcon } from "./projectTechIcons";

type ProjectStageCardProps = {
  project: Project;
};

type ProjectImageProps = {
  project: Project;
};

function ProjectImage({ project }: ProjectImageProps) {
  return (
    <div className="relative h-40 shrink-0 overflow-hidden border-b-2 border-arcade-yellow bg-arcade-panel">
      <img
        src={project.image.src}
        srcSet={project.image.srcSet}
        sizes={project.image.sizes}
        alt={project.imageAlt}
        width={project.image.width}
        height={project.image.height}
        className="pixelated h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        style={{ objectPosition: project.imagePosition ?? "center" }}
        loading="lazy"
        decoding="async"
      />

      <span className="absolute left-2 top-2 border border-arcade-border bg-[#f4edcf] px-1 font-pixel text-sm text-arcade-hero shadow-[2px_2px_0_rgba(0,0,0,0.35)]">
        {project.id}
      </span>
    </div>
  );
}

function ProjectTechList({ techItems }: { techItems: readonly string[] }) {
  return (
    <div className="mt-4 flex min-h-[32px] flex-wrap gap-2">
      {techItems.map((item) => {
        const tech = getProjectTechIcon(item);
        const TechIcon = tech.icon;

        return (
          <span
            key={item}
            className="flex items-center gap-1.5 border border-arcade-greenDark bg-transparent px-2 py-1 font-pixel text-[10px] leading-none text-arcade-green transition-colors hover:border-arcade-green hover:text-arcade-light"
          >
            <TechIcon aria-hidden="true" className={`h-3.5 w-3.5 shrink-0 ${tech.iconClassName}`} />
            {item}
          </span>
        );
      })}
    </div>
  );
}

function ProjectActions({ project }: ProjectStageCardProps) {
  return (
    <div className="mt-auto grid grid-cols-2 gap-3 pt-4">
      {project.liveUrl ? (
        <LinkButton href={project.liveUrl} target="_blank" rel="noreferrer" icon={<Play size={12} aria-hidden="true" />}>
          View Project
        </LinkButton>
      ) : (
        <LinkButton disabled icon={<Play size={12} aria-hidden="true" />}>
          View Project
        </LinkButton>
      )}

      {project.githubUrl ? (
        <LinkButton href={project.githubUrl} target="_blank" rel="noreferrer" variant="secondary" icon={<Code2 size={12} aria-hidden="true" />}>
          View Code
        </LinkButton>
      ) : (
        <LinkButton disabled variant="secondary" icon={<Code2 size={12} aria-hidden="true" />}>
          View Code
        </LinkButton>
      )}
    </div>
  );
}

export default function ProjectStageCard({ project }: ProjectStageCardProps) {
  return (
    <article className="flex h-full min-h-[398px] min-w-0 flex-col overflow-hidden border-[3px] border-arcade-border bg-arcade-dark text-arcade-light shadow-pixel">
      <ProjectImage project={project} />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex min-h-[52px] items-start">
          <h3 className="font-pixel text-base uppercase leading-6 text-arcade-yellow">{project.title}</h3>
        </div>

        <p className="mt-2 line-clamp-3 min-h-[72px] text-[15px] font-semibold leading-6">
          {project.description}
        </p>

        <ProjectTechList techItems={project.tech} />
        <ProjectActions project={project} />
      </div>
    </article>
  );
}
