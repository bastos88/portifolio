import type { PortfolioSkill } from "../types/portfolio";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export const skills: readonly PortfolioSkill[] = [
  { id: "html", name: "HTML5", level: 10, icon: SiHtml5, color: "#E34F26" },
  { id: "css", name: "CSS3", level: 9, icon: SiCss, color: "#1572B6" },
  { id: "javascript", name: "JAVASCRIPT", level: 9, icon: SiJavascript, color: "#F7DF1E" },
  { id: "typescript", name: "TYPESCRIPT", level: 8, icon: SiTypescript, color: "#3178C6" },
  { id: "react", name: "REACT", level: 8, icon: SiReact, color: "#61DAFB" },
  { id: "node", name: "NODE.JS", level: 7, icon: SiNodedotjs, color: "#5FA04E" },
  { id: "express", name: "EXPRESS", level: 7, icon: SiExpress, color: "#252525" },
  { id: "postgresql", name: "POSTGRESQL", level: 7, icon: SiPostgresql, color: "#4169E1" },
  { id: "prisma", name: "PRISMA", level: 6, icon: SiPrisma, color: "#2D3748" },
  { id: "git", name: "GIT", level: 8, icon: SiGit, color: "#F05032" },
  { id: "github", name: "GITHUB", level: 8, icon: SiGithub, color: "#181717" },
  { id: "figma", name: "FIGMA", level: 5, icon: SiFigma, color: "#F24E1E" },
];
