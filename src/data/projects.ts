import type { Project } from "../types/portfolio";
import arquiteto360 from "../assets/portfolio/optimized/arquiteto-360.webp";
import arquiteto640 from "../assets/portfolio/optimized/arquiteto-640.webp";
import arquiteto900 from "../assets/portfolio/optimized/arquiteto-900.webp";
import coffeeDelivery360 from "../assets/portfolio/optimized/coffee-delivery-360.webp";
import coffeeDelivery640 from "../assets/portfolio/optimized/coffee-delivery-640.webp";
import coffeeDelivery900 from "../assets/portfolio/optimized/coffee-delivery-900.webp";
import converter360 from "../assets/portfolio/optimized/converter-360.webp";
import converter640 from "../assets/portfolio/optimized/converter-640.webp";
import converter900 from "../assets/portfolio/optimized/converter-900.webp";
import drFarol360 from "../assets/portfolio/optimized/drfarol-retro-360.webp";
import drFarol640 from "../assets/portfolio/optimized/drfarol-retro-640.webp";
import drFarol900 from "../assets/portfolio/optimized/drfarol-retro-900.webp";
import quiz360 from "../assets/portfolio/optimized/quiz-360.webp";
import quiz640 from "../assets/portfolio/optimized/quiz-640.webp";
import quiz900 from "../assets/portfolio/optimized/quiz-900.webp";
import type { ResponsiveImage } from "../types/portfolio";

const projectImageSizes = "(min-width: 1024px) 420px, (min-width: 640px) calc((100vw - 56px) / 2), 285px";

function projectImage(
  sources: [small: string, medium: string, large: string],
  width: number,
  height: number,
): ResponsiveImage {
  const [small, medium, large] = sources;

  return {
    src: medium,
    srcSet: `${small} 360w, ${medium} 640w, ${large} 900w`,
    sizes: projectImageSizes,
    width,
    height,
  };
}

export const projects: readonly Project[] = [
  {
    id: "01",
    title: "CodeQuest",
    description: "Quiz interativo de programação com React, Node.js e PostgreSQL.",
    tech: ["React", "TS", "JS", "Prisma", "PG", "CSS", "HTML"],
    variant: "forest",
    image: projectImage([quiz360, quiz640, quiz900], 900, 600),
    imageAlt: "Interface pixel art do projeto DevQuiz",
    imagePosition: "left center",
    liveUrl: "https://code-quest-web-navy.vercel.app/",
    githubUrl: "https://github.com/bastos88/CodeQuest",
  },
  {
    id: "02",
    title: "Currency Converter",
    description: "Conversor de moedas com integração a API externa.",
    tech: ["Node", "JS", "API", "React"],
    variant: "world",
    image: projectImage([converter360, converter640, converter900], 900, 441),
    imageAlt: "Interface pixel art do conversor de moedas",
    liveUrl: "https://converter-beta-blush.vercel.app/",
    githubUrl: "https://github.com/bastos88/Converter",
  },
  {
    id: "03",
    title: "Arquiteto Portfólio",
    description: "Landing page de um arquiteto.",
    tech: ["HTML", "JS", "CSS", "TailwindCSS"],
    variant: "arquiteto",
    image: projectImage([arquiteto360, arquiteto640, arquiteto900], 900, 600),
    imageAlt: "Interface pixel art do portfolio de arquitetura Alan Macedo",
    liveUrl: "https://alanportifolio.vercel.app/",
    githubUrl: "https://github.com/bastos88/Alan-Arquitetura",
  },
  {
    id: "04",
    title: "Dr. Farol",
    description: "Landing page de uma loja de revitalização de faróis.",
    tech: ["React", "TailwindCSS", "TS"],
    variant: "server",
    image: projectImage([drFarol360, drFarol640, drFarol900], 900, 604),
    imageAlt: "Interface pixel art do projeto Dr. Farol",
    imagePosition: "center",
    liveUrl: "https://www.drfarol.pt/",
    githubUrl: "",
  },
  {
    id: "05",
    title: "Coffee Delivery",
    description: "Plataforma full stack de delivery de cafés com carrinho, checkout, pagamentos e pedidos integrados ao backend",
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    variant: "server",
    image: projectImage([coffeeDelivery360, coffeeDelivery640, coffeeDelivery900], 900, 578),
    imageAlt: "Interface do projeto Coffee Delivery com catálogo de cafés e checkout",
    imagePosition: "center",
    liveUrl: "https://coffeeshop-delivery.vercel.app/",
    githubUrl: "https://github.com/bastos88/coffee-delivery",
  },
];
