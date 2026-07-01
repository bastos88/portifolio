import type { ReactNode } from "react";
import { cn } from "../../../lib/cn";
import paperTextureStyles from "../_shared/paperTexture.module.css";

type PixelPanelProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function PixelPanel({ children, className = "", id }: PixelPanelProps) {
  return (
    <section
      id={id}
      className={cn(paperTextureStyles.paperTexture, "border-[3px] border-arcade-border px-6 py-10 shadow-pixelDark md:px-10 md:py-12 lg:px-12", className)}
    >
      {children}
    </section>
  );
}
