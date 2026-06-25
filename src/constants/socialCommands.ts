import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialCommand } from "../types/portfolio";

export const socialCommands: readonly SocialCommand[] = [
  { label: "github", href: "#contact", Icon: Github },
  { label: "linkedin", href: "#contact", Icon: Linkedin },
  { label: "email", href: "mailto:leonardo@example.com", Icon: Mail },
];
