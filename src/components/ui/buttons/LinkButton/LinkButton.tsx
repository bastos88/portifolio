import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../../lib/cn";
import styles from "./LinkButton.module.css";

type LinkButtonVariant = "primary" | "secondary";

type LinkButtonBaseProps = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: LinkButtonVariant;
  disabled?: boolean;
};

type LinkAnchorProps = LinkButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type LinkFallbackButtonProps = LinkButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkButtonProps = LinkAnchorProps | LinkFallbackButtonProps;

const variantClasses: Record<LinkButtonVariant, { enabled: string; disabled: string }> = {
  primary: {
    enabled: styles.primary,
    disabled: styles.primaryDisabled,
  },
  secondary: {
    enabled: styles.secondary,
    disabled: styles.secondaryDisabled,
  },
};

export default function LinkButton(props: LinkButtonProps) {
  const { children, icon, variant = "primary", className, disabled = false } = props;
  const skin = variantClasses[variant];
  const classes = cn(
    styles.button,
    disabled ? skin.disabled : skin.enabled,
    "flex min-h-10 items-center justify-center gap-1 px-2 py-2 font-pixel text-[9px] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcade-green",
    disabled && "cursor-not-allowed",
    className,
  );

  if ("href" in props && props.href && !disabled) {
    const { href, children: _children, icon: _icon, variant: _variant, disabled: _disabled, className: _className, ...anchorProps } = props;

    return (
      <a href={href} className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  const {
    children: _children,
    icon: _icon,
    variant: _variant,
    disabled: _disabled,
    className: _className,
    href: _href,
    ...buttonProps
  } = props as LinkFallbackButtonProps;

  return (
    <button type="button" disabled className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
