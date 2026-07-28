import type { TextareaHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ error, className, rows = 4, ...props }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "w-full rounded-md border bg-neutral-0 px-3 py-2 text-sm text-neutral-900 resize-y",
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
