import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

function Triangle({ up }: { up: boolean }) {
  return (
    <svg width="8" height="8" viewBox="0 0 10 10" fill="currentColor" className="shrink-0">
      <polygon points={up ? "5,0 10,10 0,10" : "0,0 10,0 5,10"} />
    </svg>
  );
}

type Tone = "neutral" | "brand";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  trend?: number;
  /** "brand" renders a solid-color highlight card (use for the one key metric on a dashboard). */
  tone?: Tone;
}

const toneClasses: Record<Tone, { card: string; label: string; value: string }> = {
  neutral: {
    card: "bg-neutral-0 border border-neutral-200 shadow-sm",
    label: "text-neutral-500",
    value: "text-neutral-900",
  },
  brand: { card: "bg-brand-500", label: "text-brand-50", value: "text-white" },
};

export function StatCard({ label, value, trend, tone = "neutral", className, ...props }: StatCardProps) {
  const style = toneClasses[tone];
  return (
    <div
      className={cn("rounded-lg p-4", style.card, className)}
      {...props}
    >
      <p className={cn("text-xs mb-1.5", style.label)}>{label}</p>
      <div className="flex items-baseline gap-2">
        <span className={cn("text-2xl font-semibold tabular-nums whitespace-nowrap", style.value)}>
          {value}
        </span>
        {trend !== undefined && (
          <span
            className={cn(
              "flex items-center gap-1 text-xs font-medium whitespace-nowrap",
              tone === "brand"
                ? "text-white/90"
                : trend >= 0
                ? "text-success-700"
                : "text-danger-500"
            )}
          >
            <Triangle up={trend >= 0} />
            {Math.abs(trend)}%
          </span>
        )}
      </div>
    </div>
  );
}
