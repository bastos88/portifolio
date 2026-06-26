import { BriefcaseBusiness, Code2, Rocket, Trophy } from "lucide-react";
import type { TimelineItem } from "../types/portfolio";

export const timeline: readonly TimelineItem[] = [
  {
    year: "2021",
    title: "Starting Quest",
    description:
      "Início da jornada em desenvolvimento web, construindo bases em HTML, CSS, JavaScript e interfaces responsivas.",
    Icon: Code2,
  },
  {
    year: "2022",
    title: "First Deployment",
    description:
      "Estágio em desenvolvimento web na Hollow, criando e mantendo interfaces institucionais com HTML, CSS, Bootstrap, JavaScript, PostgreSQL, Django, Git e GitHub.",
    Icon: BriefcaseBusiness,
  },
  {
    year: "2024",
    title: "Freelance Mode",
    description:
      "Atuação freelance no desenvolvimento de aplicações web, landing pages e interfaces responsivas com React, TypeScript, Tailwind CSS, APIs REST e deploys.",
    Icon: Rocket,
  },
  {
    year: "2026",
    title: "Leveling Up",
    description:
      "Evolução para projetos Full Stack com Node.js, Express, PostgreSQL, Prisma, autenticação, modelagem de dados e arquitetura cliente-servidor.",
    Icon: Trophy,
  },
];
