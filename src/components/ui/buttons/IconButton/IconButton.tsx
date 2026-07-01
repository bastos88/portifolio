import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../../lib/cn";
import styles from "./IconButton.module.css";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function IconButton({ children, className, type = "button", ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        "inline-flex items-center justify-center font-pixel leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
