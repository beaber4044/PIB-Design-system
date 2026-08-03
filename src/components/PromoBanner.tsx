import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon, type IconName } from "./Icon";

type Tone = "brand" | "warning" | "info" | "dark";

export interface PromoBannerProps extends HTMLAttributes<HTMLDivElement> {
  icon?: IconName;
  title: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
  tone?: Tone;
}

const toneClasses: Record<Tone, { bg: string; text: string; iconBg: string }> = {
  brand: { bg: "bg-brand-50", text: "text-brand-800", iconBg: "bg-brand-500 text-white" },
  warning: { bg: "bg-warning-50", text: "text-warning-800", iconBg: "bg-warning-500 text-white" },
  info: { bg: "bg-info-50", text: "text-info-800", iconBg: "bg-info-500 text-white" },
  dark: { bg: "bg-neutral-900", text: "text-white", iconBg: "bg-white/15 text-white" },
};

export function PromoBanner({
  icon,
  title,
  actionLabel,
  onAction,
  onClose,
  tone = "brand",
  className,
  ...props
}: PromoBannerProps) {
  const style = toneClasses[tone];
  return (
    <div
      className={cn(
        "relative flex items-center gap-3 overflow-hidden rounded-lg px-4 py-3.5",
        style.bg,
        className
      )}
      {...props}
    >
      {icon && (
        <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full", style.iconBg)}>
          <Icon name={icon} size={16} />
        </span>
      )}
      <p className={cn("flex-1 text-sm font-medium leading-snug", style.text)}>{title}</p>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className={cn(
            "shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold",
            tone === "dark" ? "bg-white text-neutral-900" : "bg-neutral-0 text-neutral-800 shadow-sm"
          )}
        >
          {actionLabel}
        </button>
      )}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className={cn("shrink-0 opacity-60 hover:opacity-100", style.text)}
        >
          <Icon name="close" size={15} />
        </button>
      )}
    </div>
  );
}
