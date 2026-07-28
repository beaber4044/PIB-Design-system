import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type Side = "top" | "bottom" | "left" | "right";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
  side?: Side;
  children: ReactNode;
}

const sideClasses: Record<Side, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({
  content,
  side = "top",
  children,
  className,
  ...props
}: TooltipProps) {
  return (
    <span className={cn("relative inline-flex group", className)} {...props}>
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-10 whitespace-nowrap rounded-sm bg-neutral-900 px-2 py-1 text-xs text-neutral-0",
          "opacity-0 scale-95 transition-all group-hover:opacity-100 group-hover:scale-100",
          sideClasses[side]
        )}
      >
        {content}
      </span>
    </span>
  );
}
