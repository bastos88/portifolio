import { Crown, Shield, Swords, TreePine } from "lucide-react";
import type { TimelineItem } from "../types/portfolio";

export const timeline: readonly TimelineItem[] = [
  {
    year: "2021",
    title: "Starting Quest",
    description: "Primeiros estudos em desenvolvimento web.",
    Icon: TreePine,
  },
  {
    year: "2023",
    title: "Front-End Path",
    description: "Projetos com HTML, CSS, JavaScript e React.",
    Icon: Swords,
  },
  {
    year: "2025",
    title: "Leveling Up",
    description: "Estudo de TypeScript, Node.js, APIs e banco de dados.",
    Icon: Shield,
  },
  {
    year: "2026",
    title: "Next Level",
    description: "Construção de projetos completos e preparação para o mercado.",
    Icon: Crown,
  },
];
