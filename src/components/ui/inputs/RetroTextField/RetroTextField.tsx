import type { InputHTMLAttributes } from "react";
import { cn } from "../../../../lib/cn";
import styles from "./RetroTextField.module.css";

type RetroTextFieldProps = InputHTMLAttributes<HTMLInputElement>;

export default function RetroTextField({ className, ...props }: RetroTextFieldProps) {
  return (
    <input
      className={cn(
        styles.field,
        "min-h-[66px] border-[3px] border-arcade-border bg-[#f1dfaf] px-3 py-5 text-md font-semibold text-arcade-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green",
        className,
      )}
      {...props}
    />
  );
}
