import { Code2, Play } from "lucide-react";
import type { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import {
  SiAngular,
  SiAstro,
  SiBootstrap,
  SiCss,
  SiCplusplus,
  SiCypress,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiJenkins,
  SiJest,
  SiKotlin,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRust,
  SiSass,
  SiSpringboot,
  SiSqlite,
  SiSupabase,
  SiSvelte,
  SiSwagger,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiVuedotjs,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import type { Project } from "../../types/portfolio";

type ProjectStageCardProps = {
  project: Project;
};

type TechIconConfig = {
  icon: IconType;
  iconClassName: string;
};

const techIcons: Record<string, TechIconConfig> = {
  // Front-end
  React: {
    icon: SiReact,
    iconClassName: "text-[#61DAFB]",
  },
  "React.js": {
    icon: SiReact,
    iconClassName: "text-[#61DAFB]",
  },
  TS: {
    icon: SiTypescript,
    iconClassName: "text-[#3178C6]",
  },
  TypeScript: {
    icon: SiTypescript,
    iconClassName: "text-[#3178C6]",
  },
  JS: {
    icon: SiJavascript,
    iconClassName: "text-[#F7DF1E]",
  },
  JavaScript: {
    icon: SiJavascript,
    iconClassName: "text-[#F7DF1E]",
  },
  HTML: {
    icon: SiHtml5,
    iconClassName: "text-[#E34F26]",
  },
  CSS: {
    icon: SiCss,
    iconClassName: "text-[#1572B6]",
  },
  Sass: {
    icon: SiSass,
    iconClassName: "text-[#CC6699]",
  },
  SCSS: {
    icon: SiSass,
    iconClassName: "text-[#CC6699]",
  },
  Tailwind: {
    icon: SiTailwindcss,
    iconClassName: "text-[#06B6D4]",
  },
  TailwindCSS: {
    icon: SiTailwindcss,
    iconClassName: "text-[#06B6D4]",
  },
  Bootstrap: {
    icon: SiBootstrap,
    iconClassName: "text-[#7952B3]",
  },
  Vite: {
    icon: SiVite,
    iconClassName: "text-[#646CFF]",
  },
  Next: {
    icon: SiNextdotjs,
    iconClassName: "text-white",
  },
  "Next.js": {
    icon: SiNextdotjs,
    iconClassName: "text-white",
  },
  Angular: {
    icon: SiAngular,
    iconClassName: "text-[#DD0031]",
  },
  Vue: {
    icon: SiVuedotjs,
    iconClassName: "text-[#4FC08D]",
  },
  Svelte: {
    icon: SiSvelte,
    iconClassName: "text-[#FF3E00]",
  },
  Astro: {
    icon: SiAstro,
    iconClassName: "text-[#FF5D01]",
  },

  // Back-end e APIs
  Node: {
    icon: SiNodedotjs,
    iconClassName: "text-[#5FA04E]",
  },
  "Node.js": {
    icon: SiNodedotjs,
    iconClassName: "text-[#5FA04E]",
  },
  EX: {
    icon: SiExpress,
    iconClassName: "text-[#E5E7EB]",
  },
  Express: {
    icon: SiExpress,
    iconClassName: "text-[#E5E7EB]",
  },
  "Express.js": {
    icon: SiExpress,
    iconClassName: "text-[#E5E7EB]",
  },
  Nest: {
    icon: SiNestjs,
    iconClassName: "text-[#E0234E]",
  },
  NestJS: {
    icon: SiNestjs,
    iconClassName: "text-[#E0234E]",
  },
  API: {
    icon: TbApi,
    iconClassName: "text-[#F59E0B]",
  },
  REST: {
    icon: TbApi,
    iconClassName: "text-[#F59E0B]",
  },
  GraphQL: {
    icon: SiGraphql,
    iconClassName: "text-[#E10098]",
  },
  Swagger: {
    icon: SiSwagger,
    iconClassName: "text-[#85EA2D]",
  },

  // Banco de dados
  Prisma: {
    icon: SiPrisma,
    iconClassName: "text-[#64B4C3]",
  },
  PG: {
    icon: SiPostgresql,
    iconClassName: "text-[#4169E1]",
  },
  PostgreSQL: {
    icon: SiPostgresql,
    iconClassName: "text-[#4169E1]",
  },
  Postgres: {
    icon: SiPostgresql,
    iconClassName: "text-[#4169E1]",
  },
  MySQL: {
    icon: SiMysql,
    iconClassName: "text-[#4479A1]",
  },
  MongoDB: {
    icon: SiMongodb,
    iconClassName: "text-[#47A248]",
  },
  SQLite: {
    icon: SiSqlite,
    iconClassName: "text-[#003B57]",
  },
  Firebase: {
    icon: SiFirebase,
    iconClassName: "text-[#FFCA28]",
  },
  Supabase: {
    icon: SiSupabase,
    iconClassName: "text-[#3ECF8E]",
  },
  Redis: {
    icon: SiRedis,
    iconClassName: "text-[#DC382D]",
  },
  RabbitMQ: {
    icon: SiRabbitmq,
    iconClassName: "text-[#FF6600]",
  },

  // Linguagens
  Python: {
    icon: SiPython,
    iconClassName: "text-[#3776AB]",
  },
  Java: {
    icon: SiOpenjdk,
    iconClassName: "text-[#ED8B00]",
  },
  "C++": {
    icon: SiCplusplus,
    iconClassName: "text-[#00599C]",
  },
  PHP: {
    icon: SiPhp,
    iconClassName: "text-[#777BB4]",
  },
  Kotlin: {
    icon: SiKotlin,
    iconClassName: "text-[#7F52FF]",
  },
  Rust: {
    icon: SiRust,
    iconClassName: "text-[#CE422B]",
  },

  // Ferramentas e deploy
  Git: {
    icon: SiGit,
    iconClassName: "text-[#F05032]",
  },
  GitHub: {
    icon: SiGithub,
    iconClassName: "text-white",
  },
  GitLab: {
    icon: SiGitlab,
    iconClassName: "text-[#FC6D26]",
  },
  Docker: {
    icon: SiDocker,
    iconClassName: "text-[#2496ED]",
  },
  Linux: {
    icon: SiLinux,
    iconClassName: "text-[#FCC624]",
  },
  Nginx: {
    icon: SiNginx,
    iconClassName: "text-[#009639]",
  },
  Jenkins: {
    icon: SiJenkins,
    iconClassName: "text-[#D24939]",
  },
  Terraform: {
    icon: SiTerraform,
    iconClassName: "text-[#7B42BC]",
  },
  Vercel: {
    icon: SiVercel,
    iconClassName: "text-white",
  },
  Netlify: {
    icon: SiNetlify,
    iconClassName: "text-[#00C7B7]",
  },

  // Testes e design
  Jest: {
    icon: SiJest,
    iconClassName: "text-[#C21325]",
  },
  Vitest: {
    icon: SiVitest,
    iconClassName: "text-[#6E9F18]",
  },
  Cypress: {
    icon: SiCypress,
    iconClassName: "text-[#69D3A7]",
  },
  Postman: {
    icon: SiPostman,
    iconClassName: "text-[#FF6C37]",
  },
  Insomnia: {
    icon: SiInsomnia,
    iconClassName: "text-[#5849BE]",
  },
  Figma: {
    icon: SiFigma,
    iconClassName: "text-[#F24E1E]",
  },

  // Frameworks adicionais
  Django: {
    icon: SiDjango,
    iconClassName: "text-[#44B78B]",
  },
  Flask: {
    icon: SiFlask,
    iconClassName: "text-white",
  },
  Laravel: {
    icon: SiLaravel,
    iconClassName: "text-[#FF2D20]",
  },
  Spring: {
    icon: SiSpringboot,
    iconClassName: "text-[#6DB33F]",
  },
};

export default function ProjectStageCard({
  project,
}: ProjectStageCardProps) {
  const projectLinkClassName =
    "flex min-h-10 items-center justify-center gap-1 border border-arcade-greenDark bg-arcade-green px-2 py-2 font-pixel text-[9px] uppercase text-arcade-hero transition-colors hover:bg-[#9bdf4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green";

  const disabledProjectLinkClassName =
    "flex min-h-10 cursor-not-allowed items-center justify-center gap-1 border border-arcade-greenDark bg-arcade-green/50 px-2 py-2 font-pixel text-[9px] uppercase text-arcade-hero/70";

  const codeLinkClassName =
    "flex min-h-10 items-center justify-center gap-1 border border-arcade-yellow bg-transparent px-2 py-2 font-pixel text-[9px] uppercase text-arcade-yellow transition-colors hover:bg-arcade-yellow hover:text-arcade-hero focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green";

  const disabledCodeLinkClassName =
    "flex min-h-10 cursor-not-allowed items-center justify-center gap-1 border border-arcade-yellow/50 bg-transparent px-2 py-2 font-pixel text-[9px] uppercase text-arcade-yellow/50";

  return (
    <article className="flex h-full min-h-[398px] min-w-0 flex-col overflow-hidden border-[3px] border-arcade-border bg-arcade-dark text-arcade-light shadow-pixel">
      <div className="relative h-40 shrink-0 overflow-hidden border-b-2 border-arcade-yellow bg-arcade-panel">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="pixelated h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          style={{ objectPosition: project.imagePosition ?? "center" }}
          loading="lazy"
        />

        <span className="absolute left-2 top-2 border border-arcade-border bg-[#f4edcf] px-1 font-pixel text-sm text-arcade-hero shadow-[2px_2px_0_rgba(0,0,0,0.35)]">
          {project.id}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex min-h-[52px] items-start">
          <h3 className="font-pixel text-base uppercase leading-6 text-arcade-yellow">
            {project.title}
          </h3>
        </div>

        <p className="mt-2 line-clamp-3 min-h-[72px] text-[15px] font-semibold leading-6">
          {project.description}
        </p>

        <div className="mt-4 flex min-h-[32px] flex-wrap gap-2">
          {project.tech.map((item) => {
            const tech = techIcons[item];
            const TechIcon = tech?.icon ?? FiCode;

            return (
              <span
                key={item}
                className="flex items-center gap-1.5 border border-arcade-greenDark bg-transparent px-2 py-1 font-pixel text-[10px] leading-none text-arcade-green transition-colors hover:border-arcade-green hover:text-arcade-light"
              >
                <TechIcon
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 shrink-0 ${
                    tech?.iconClassName ?? "text-arcade-yellow"
                  }`}
                />

                {item}
              </span>
            );
          })}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={projectLinkClassName}
            >
              <Play size={12} aria-hidden="true" />
              View Project
            </a>
          ) : (
            <button
              type="button"
              disabled
              className={disabledProjectLinkClassName}
            >
              <Play size={12} aria-hidden="true" />
              View Project
            </button>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={codeLinkClassName}
            >
              <Code2 size={12} aria-hidden="true" />
              View Code
            </a>
          ) : (
            <button type="button" disabled className={disabledCodeLinkClassName}>
              <Code2 size={12} aria-hidden="true" />
              View Code
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
