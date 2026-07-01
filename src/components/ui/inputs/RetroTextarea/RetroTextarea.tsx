import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../../../lib/cn";
import styles from "./RetroTextarea.module.css";

type RetroTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function RetroTextarea({ className, ...props }: RetroTextareaProps) {
  return (
    <textarea
      className={cn(
        styles.field,
        "min-h-[170px] w-full flex-1 resize-none border-[3px] border-arcade-border bg-[#f1dfaf] px-7 py-6 text-lg font-semibold text-arcade-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green",
        className,
      )}
      {...props}
    />
  );
}
