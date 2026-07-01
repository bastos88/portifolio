import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../../lib/cn";
import styles from "./SubmitButton.module.css";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
  loadingLabel?: string;
};

export default function SubmitButton({
  children,
  icon,
  loading = false,
  loadingLabel = "Sending...",
  className,
  disabled,
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        styles.button,
        "inline-flex min-h-[62px] items-center gap-3 self-start px-9 py-5 font-pixel text-[12px] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green",
        className,
      )}
      {...props}
    >
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : icon}
      {loading ? loadingLabel : children}
    </button>
  );
}
