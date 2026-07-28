import type { SelectHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export function Select({ error, className, children, ...props }: SelectProps) {
  return (
    <span className="relative inline-block w-full">
      <select
        className={cn(
          "h-10 w-full appearance-none rounded-md border bg-neutral-0 pl-3 pr-9 text-sm text-neutral-900",
          "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500 transition-colors",
          "disabled:opacity-50 disabled:pointer-events-none",
          error ? "border-danger-500 focus:outline-danger-500" : "border-neutral-300",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <Icon
        name="chevronDown"
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
      />
    </span>
  );
}
