import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
}

export function Switch({
  label,
  className,
  disabled,
  id,
  ...props
}: SwitchProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-center gap-2 text-sm text-neutral-900",
        disabled ? "opacity-50 pointer-events-none" : "cursor-pointer",
        className
      )}
    >
      <span className="relative inline-flex w-10 h-6 shrink-0">
        <input
          type="checkbox"
          id={id}
          disabled={disabled}
          className="peer appearance-none w-10 h-6 rounded-full bg-neutral-300 checked:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors"
          {...props}
        />
        <span className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-neutral-0 shadow-sm transition-transform peer-checked:translate-x-4 pointer-events-none" />
      </span>
      {label}
    </label>
  );
}
