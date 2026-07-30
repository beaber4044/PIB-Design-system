import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon, type IconName } from "./Icon";

type Variant = "filled" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  variant?: Variant;
  size?: Size;
  rounded?: boolean;
  /** Required — an icon-only button must have an accessible name. */
  "aria-label": string;
}

const variantClasses: Record<Variant, string> = {
  filled:
    "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 focus-visible:outline-brand-500",
  outline:
    "border border-neutral-300 text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100 focus-visible:outline-neutral-400",
  ghost:
    "text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 focus-visible:outline-neutral-400",
};

const sizeClasses: Record<Size, { box: string; icon: number }> = {
  sm: { box: "w-8 h-8", icon: 16 },
  md: { box: "w-10 h-10", icon: 18 },
  lg: { box: "w-12 h-12", icon: 22 },
};

export function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  rounded,
  className,
  disabled,
  ...props
}: IconButtonProps) {
  const { box, icon: iconSize } = sizeClasses[size];
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        rounded ? "rounded-full" : "rounded-md",
        box,
        variantClasses[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
