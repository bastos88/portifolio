import { Code2, Home, Mail } from "lucide-react";
import type { NavItem } from "../types/portfolio";

export const navItems: readonly NavItem[] = [
  { href: "#home", label: "Home", Icon: Home },
  { href: "#about", label: "About", Icon: Code2 },
  { href: "#skills", label: "Skills", Icon: Code2 },
  { href: "#projects", label: "Projects", Icon: Code2 },
  { href: "#experience", label: "Experience", Icon: Code2 },
  { href: "#contact", label: "Contact", Icon: Mail },
];
