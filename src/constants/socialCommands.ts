import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialCommand } from "../types/portfolio";

export const socialCommands: readonly SocialCommand[] = [
  { label: "github", href: "https://github.com/bastos88", Icon: Github },
  { label: "linkedin", href: "https://www.linkedin.com/in/leoonardobastos/", Icon: Linkedin },
  { label: "email", href: "mailto:bastos88leonardo@gmail.com", Icon: Mail },
];
