import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  label?: string;
}

export function Divider({
  orientation = "horizontal",
  label,
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("w-px self-stretch bg-neutral-200", className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        className={cn("flex items-center gap-3 text-xs text-neutral-400", className)}
        {...props}
      >
        <span className="h-px flex-1 bg-neutral-200" />
        {label}
        <span className="h-px flex-1 bg-neutral-200" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn("h-px w-full bg-neutral-200", className)}
      {...props}
    />
  );
}
