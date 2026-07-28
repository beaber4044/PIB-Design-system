import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  trend?: number;
}

export function StatCard({ label, value, trend, className, ...props }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-neutral-50 p-4",
        className
      )}
      {...props}
    >
      <p className="text-xs text-neutral-500 mb-1.5">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-neutral-900 tabular-nums">
          {value}
        </span>
        {trend !== undefined && (
          <span
            className={cn(
              "flex items-center gap-0.5 text-xs font-medium",
              trend >= 0 ? "text-success-700" : "text-danger-500"
            )}
          >
            <Icon
              name={trend >= 0 ? "chevronUp" : "chevronDown"}
              size={13}
            />
            {Math.abs(trend)}%
          </span>
        )}
      </div>
    </div>
  );
}
