import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 focus-visible:outline-brand-500",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300 focus-visible:outline-neutral-400",
  outline:
    "border border-neutral-300 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 focus-visible:outline-neutral-400",
  ghost:
    "text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus-visible:outline-neutral-400",
  danger:
    "bg-danger-500 text-white hover:bg-danger-700 focus-visible:outline-danger-500",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-xs rounded-sm gap-1.5",
  md: "h-10 px-4 text-sm rounded-md gap-2",
  lg: "h-12 px-6 text-base rounded-md gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}
