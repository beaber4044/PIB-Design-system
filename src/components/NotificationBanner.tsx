import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon, type IconName } from "./Icon";

type Tone = "info" | "success" | "warning" | "danger";

export interface NotificationBannerProps extends HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
  title: string;
  description?: string;
  onClose?: () => void;
}

const toneStyles: Record<Tone, { bg: string; text: string; icon: IconName }> = {
  info: { bg: "bg-info-50", text: "text-info-700", icon: "info" },
  success: { bg: "bg-success-50", text: "text-success-700", icon: "check" },
  warning: { bg: "bg-warning-50", text: "text-warning-700", icon: "alert" },
  danger: { bg: "bg-danger-50", text: "text-danger-700", icon: "alert" },
};

export function NotificationBanner({
  tone = "info",
  title,
  description,
  onClose,
  className,
  ...props
}: NotificationBannerProps) {
  const style = toneStyles[tone];
  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-md px-4 py-3",
        style.bg,
        className
      )}
      {...props}
    >
      <Icon name={style.icon} size={18} className={cn("mt-0.5 shrink-0", style.text)} />
      <div className="flex-1 min-w-0">
        <p className={cn("text-sm font-medium", style.text)}>{title}</p>
        {description && (
          <p className="text-xs text-neutral-600 mt-0.5">{description}</p>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className={cn("shrink-0 opacity-70 hover:opacity-100", style.text)}
        >
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  );
}
