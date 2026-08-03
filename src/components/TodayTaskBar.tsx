import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Badge } from "./Badge";

export interface TodayTaskItem {
  label: string;
  value: number;
}

export interface TodayTaskBarProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  items: TodayTaskItem[];
}

export function TodayTaskBar({ title, items, className, ...props }: TodayTaskBarProps) {
  const total = items.reduce((sum, item) => sum + item.value, 0);

  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-200 bg-neutral-0 p-5",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <Badge tone={total > 0 ? "brand" : "neutral"}>{total}</Badge>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-sm">
            <span className="text-neutral-500">{item.label}</span>
            <span
              className={cn(
                "tabular-nums font-semibold",
                item.value > 0 ? "text-brand-600" : "text-neutral-400"
              )}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
