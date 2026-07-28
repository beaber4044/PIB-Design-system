import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-md border bg-neutral-0 px-3 text-sm text-neutral-900",
        "placeholder:text-neutral-400 transition-colors",
        "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500",
        "disabled:opacity-50 disabled:pointer-events-none",
        error
          ? "border-danger-500 focus:outline-danger-500"
          : "border-neutral-300",
        className
      )}
      {...props}
    />
  );
}
