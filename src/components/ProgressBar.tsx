import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
}

export function ProgressBar({
  value,
  max = 100,
  showLabel,
  className,
  ...props
}: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn("w-full", className)} {...props}>
      {showLabel && (
        <div className="flex justify-between text-xs text-neutral-500 mb-1.5">
          <span>진행률</span>
          <span className="tabular-nums">{Math.round(percent)}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden"
      >
        <div
          className="h-full rounded-full bg-brand-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
