import type { AnchorHTMLAttributes, ReactNode } from "react";

type RetroButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "dark" | "download";
};

const variants = {
  primary: "border-arcade-greenDark bg-arcade-green text-arcade-hero hover:bg-[#9bdf4f]",
  outline: "border-arcade-yellow bg-transparent text-arcade-yellow hover:bg-arcade-yellow hover:text-arcade-hero",
  dark: "border-arcade-border bg-arcade-dark text-arcade-light hover:border-arcade-green hover:text-arcade-green",
  download:
    "border-[#8d7850] bg-[#fff5d6]/10 text-[#fff5d6] hover:border-arcade-yellow hover:bg-arcade-yellow hover:text-arcade-hero",
};

export default function RetroButton({ children, variant = "primary", className = "", ...props }: RetroButtonProps) {
  return (
    <a
      className={`retro-button inline-flex min-h-10 items-center justify-center gap-2 border-2 px-4 py-3 font-pixel text-[10px] uppercase leading-none shadow-pixel transition-colors active:translate-y-1 active:shadow-[2px_2px_0_rgba(0,0,0,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
