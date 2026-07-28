import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
}

export function Radio({
  label,
  className,
  disabled,
  id,
  ...props
}: RadioProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-center gap-2 text-sm text-neutral-900",
        disabled ? "opacity-50 pointer-events-none" : "cursor-pointer",
        className
      )}
    >
      <span className="relative inline-flex w-5 h-5 shrink-0 items-center justify-center">
        <input
          type="radio"
          id={id}
          disabled={disabled}
          className="peer appearance-none w-5 h-5 rounded-full border border-neutral-300 bg-neutral-0 checked:border-[5px] checked:border-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-all"
          {...props}
        />
      </span>
      {label}
    </label>
  );
}
