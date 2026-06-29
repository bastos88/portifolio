import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type SectionId = "home" | "about" | "skills" | "projects" | "game-progress" | "contact";

export type ProjectVariant = "forest" | "world" | "arquiteto" | "server";

export interface ResponsiveImage {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: readonly string[];
  variant: ProjectVariant;
  image: ResponsiveImage;
  imageAlt: string;
  imagePosition?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface PortfolioSkill {
  id: string;
  name: string;
  level: number;
  icon: IconType;
  color: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface ProfileBar {
  label: string;
  value: number;
}

export interface NavItem {
  href: `#${SectionId}`;
  label: string;
  Icon: LucideIcon;
}

export interface SocialCommand {
  label: string;
  href: string;
  Icon: LucideIcon;
}
