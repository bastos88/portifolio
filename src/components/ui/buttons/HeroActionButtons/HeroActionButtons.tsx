import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Download, Gamepad2, Play } from "lucide-react";
import { cn } from "../../../../lib/cn";
import styles from "./HeroActionButtons.module.css";

type HeroActionButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
};

function HeroActionButton({ children, icon, className, ...props }: HeroActionButtonProps) {
  return (
    <a className={className} {...props}>
      {icon}
      {children}
    </a>
  );
}

export function StartGameButton({ className, ...props }: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">) {
  return (
    <HeroActionButton
      className={cn(styles.startButton, className)}
      icon={<Play size={14} aria-hidden="true" />}
      {...props}
    >
      Start Game
    </HeroActionButton>
  );
}

export function ViewProjectsButton({ className, ...props }: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">) {
  return (
    <HeroActionButton
      className={cn(styles.projectsButton, className)}
      icon={<Gamepad2 size={14} aria-hidden="true" />}
      {...props}
    >
      View Projects
    </HeroActionButton>
  );
}

export function DownloadCvButton({ className, ...props }: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">) {
  return (
    <HeroActionButton
      className={cn(styles.downloadButton, className)}
      icon={<Download size={14} aria-hidden="true" />}
      {...props}
    >
      Download CV
    </HeroActionButton>
  );
}
