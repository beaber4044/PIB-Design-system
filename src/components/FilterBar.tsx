import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

export interface FilterBarProps extends HTMLAttributes<HTMLDivElement> {
  actions?: ReactNode;
}

export function FilterBar({ children, actions, className, ...props }: FilterBarProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-wrap items-end gap-4">{children}</div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  );
}

export interface FilterFieldProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

export function FilterField({ label, children, className, ...props }: FilterFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      <label className="text-xs font-medium text-neutral-500">{label}</label>
      {children}
    </div>
  );
}
