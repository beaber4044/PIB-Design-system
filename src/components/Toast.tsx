import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

type Tone = "neutral" | "success" | "warning" | "danger";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
  message: string;
  onClose?: () => void;
}

const toneIcon: Record<Tone, "check" | "alert" | "info"> = {
  neutral: "info",
  success: "check",
  warning: "alert",
  danger: "alert",
};

const toneClasses: Record<Tone, string> = {
  neutral: "bg-neutral-900 text-neutral-0",
  success: "bg-success-500 text-white",
  warning: "bg-warning-500 text-white",
  danger: "bg-danger-500 text-white",
};

export function Toast({
  tone = "neutral",
  message,
  onClose,
  className,
  ...props
}: ToastProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex items-center gap-2 rounded-md px-4 py-3 text-sm shadow-md max-w-sm",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      <Icon name={toneIcon[tone]} size={18} className="shrink-0" />
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="shrink-0 opacity-80 hover:opacity-100"
        >
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  );
}
