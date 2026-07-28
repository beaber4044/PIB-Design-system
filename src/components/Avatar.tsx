import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

type Size = "sm" | "md" | "lg";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  name?: string;
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const chars = parts.length > 1 ? [parts[0][0], parts[1][0]] : [parts[0]?.[0]];
  return chars.join("").toUpperCase();
}

export function Avatar({ src, name, size = "md", className, ...props }: AvatarProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-brand-100 text-brand-700 font-medium",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={name ?? ""} className="w-full h-full object-cover" />
      ) : (
        name && initials(name)
      )}
    </span>
  );
}
