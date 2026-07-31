import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon, type IconName } from "./Icon";

type Tone = "neutral" | "brand" | "success" | "warning" | "danger" | "info";
type Size = "sm" | "md" | "lg";

export interface IconTileProps extends HTMLAttributes<HTMLSpanElement> {
  icon: IconName;
  tone?: Tone;
  size?: Size;
  shape?: "square" | "circle";
  /** Render the tile itself in a solid tone color with a white icon, instead of light-bg + tinted icon. */
  solid?: boolean;
}

const toneClasses: Record<Tone, { bg: string; fg: string; solidBg: string }> = {
  neutral: { bg: "bg-neutral-100", fg: "text-neutral-600", solidBg: "bg-neutral-600" },
  brand: { bg: "bg-brand-50", fg: "text-brand-700", solidBg: "bg-brand-500" },
  success: { bg: "bg-success-50", fg: "text-success-700", solidBg: "bg-success-500" },
  warning: { bg: "bg-warning-50", fg: "text-warning-700", solidBg: "bg-warning-500" },
  danger: { bg: "bg-danger-50", fg: "text-danger-700", solidBg: "bg-danger-500" },
  info: { bg: "bg-info-50", fg: "text-info-700", solidBg: "bg-info-500" },
};

const sizeClasses: Record<Size, { box: string; icon: number }> = {
  sm: { box: "w-8 h-8", icon: 16 },
  md: { box: "w-11 h-11", icon: 20 },
  lg: { box: "w-14 h-14", icon: 26 },
};

export function IconTile({
  icon,
  tone = "brand",
  size = "md",
  shape = "square",
  solid,
  className,
  ...props
}: IconTileProps) {
  const t = toneClasses[tone];
  const { box, icon: iconSize } = sizeClasses[size];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        shape === "circle" ? "rounded-full" : "rounded-xl",
        solid ? t.solidBg : t.bg,
        box,
        className
      )}
      {...props}
    >
      <Icon
        name={icon}
        size={iconSize}
        solid
        className={solid ? "text-white" : t.fg}
      />
    </span>
  );
}
