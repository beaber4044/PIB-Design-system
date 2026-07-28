import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circle" | "rect";
}

export function Skeleton({
  variant = "rect",
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-neutral-200",
        variant === "text" && "h-3.5 rounded-sm",
        variant === "circle" && "rounded-full",
        variant === "rect" && "rounded-md",
        className
      )}
      {...props}
    />
  );
}
