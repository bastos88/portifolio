import type { Project } from "../types/portfolio";
import converterImage from "../assets/portfolio/ConverterImg.png";
import coffeeShopImage from "../assets/portfolio/coffeeshop.png";
import quizImage from "../assets/portfolio/quizImg.png";
import restApiImage from "../assets/portfolio/retro_monitor_plant_transparent_no_halo.png";

export const projects: readonly Project[] = [
  {
    id: "01",
    title: "DevQuiz",
    description: "Quiz interativo de programacao com React, Node.js e PostgreSQL.",
    tech: ["React", "TS", "JS", "Prisma", "PG", "CSS", "HTML"],
    variant: "forest",
    image: quizImage,
    imageAlt: "Interface pixel art do projeto DevQuiz",
    imagePosition: "left center",
  },
  {
    id: "02",
    title: "Currency Converter",
    description: "Conversor de moedas com integracao a API externa.",
    tech: ["Node", "JS", "API", "React"],
    variant: "world",
    image: converterImage,
    imageAlt: "Interface pixel art do conversor de moedas",
  },
  {
    id: "03",
    title: "Coffee Shop",
    description: "Aplicacao de cafeteria com catalogo e carrinho.",
    tech: ["React", "TS", "CSS"],
    variant: "coffee",
    image: coffeeShopImage,
    imageAlt: "Interface pixel art do projeto Coffee Shop",
  },
  {
    id: "04",
    title: "REST API Users",
    description: "API de usuarios usando Node.js, Express e banco de dados.",
    tech: ["React", "EX", "PG"],
    variant: "server",
    image: restApiImage,
    imageAlt: "Monitor retro representando uma API REST",
    imagePosition: "center",
  },
];
