import type { Project } from "../types/portfolio";
import arquitetoImage from "../assets/portfolio/arquiteto.png";
import converterImage from "../assets/portfolio/ConverterImg.png";
import drFarolImage from "../assets/portfolio/drfarol-retro.png";
import quizImage from "../assets/portfolio/quizImg.png";

export const projects: readonly Project[] = [
  {
    id: "01",
    title: "CodeQuest",
    description: "Quiz interativo de programacao com React, Node.js e PostgreSQL.",
    tech: ["React", "TS", "JS", "Prisma", "PG", "CSS", "HTML"],
    variant: "forest",
    image: quizImage,
    imageAlt: "Interface pixel art do projeto DevQuiz",
    imagePosition: "left center",
    liveUrl: "https://code-quest-web-navy.vercel.app/",
    githubUrl: "https://github.com/bastos88/CodeQuest",
  },
  {
    id: "02",
    title: "Currency Converter",
    description: "Conversor de moedas com integracao a API externa.",
    tech: ["Node", "JS", "API", "React"],
    variant: "world",
    image: converterImage,
    imageAlt: "Interface pixel art do conversor de moedas",
    liveUrl: "https://converter-beta-blush.vercel.app/",
    githubUrl: "https://github.com/bastos88/Converter",
  },
  {
    id: "03",
    title: "Arquiteto Portifólio",
    description: "Landing page de um arquiteto.",
    tech: ["HTML", "JS", "CSS", "TailwindCSS"],
    variant: "arquiteto",
    image: arquitetoImage,
    imageAlt: "Interface pixel art do portfolio de arquitetura Alan Macedo",
    liveUrl: "https://alanportifolio.vercel.app/",
    githubUrl: "https://github.com/bastos88/Alan-Arquitetura",
  },
  {
    id: "04",
    title: "REST API Users",
    description: "LandingPage de uma loja de revitalização de faróis.",
    tech: ["React", "TailwindCSS", "TS"],
    variant: "server",
    image: drFarolImage,
    imageAlt: "Interface pixel art do projeto Dr. Farol",
    imagePosition: "center",
    liveUrl: "https://www.drfarol.pt/",
    githubUrl: "",
  },
];
