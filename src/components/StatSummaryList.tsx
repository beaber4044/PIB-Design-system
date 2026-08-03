import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon, type IconName } from "./Icon";

export interface StatSummaryRow {
  label: string;
  value: string | number;
  indent?: boolean;
  unit?: string;
}

type Tone = "brand" | "success" | "warning" | "info" | "danger" | "neutral";

export interface StatSummaryListProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: IconName;
  tone?: Tone;
  timestamp?: string;
  rows: StatSummaryRow[];
}

const toneClasses: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-600",
  success: "bg-success-50 text-success-700",
  warning: "bg-warning-50 text-warning-700",
  info: "bg-info-50 text-info-700",
  danger: "bg-danger-50 text-danger-500",
  neutral: "bg-neutral-100 text-neutral-600",
};

export function StatSummaryList({
  title,
  icon,
  tone = "brand",
  timestamp,
  rows,
  className,
  ...props
}: StatSummaryListProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-200 bg-neutral-0 p-5",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && (
            <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-md", toneClasses[tone])}>
              <Icon name={icon} size={16} />
            </span>
          )}
          <p className="text-sm font-semibold text-neutral-900">{title}</p>
        </div>
        {timestamp && <span className="text-[11px] text-neutral-400">{timestamp}</span>}
      </div>

      <ul className="mt-3 space-y-2.5">
        {rows.map((row) => (
          <li
            key={row.label}
            className={cn("flex items-center justify-between text-sm", row.indent && "pl-4")}
          >
            <span className={cn(row.indent ? "text-xs text-neutral-500" : "text-neutral-600")}>
              {row.label}
            </span>
            <span className="tabular-nums font-medium text-neutral-900">
              {row.value}
              {row.unit && <span className="ml-0.5 font-normal text-neutral-400">{row.unit}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
