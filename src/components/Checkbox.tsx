import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
}

export function Checkbox({
  label,
  className,
  disabled,
  id,
  ...props
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-center gap-2 text-sm text-neutral-900",
        disabled ? "opacity-50 pointer-events-none" : "cursor-pointer",
        className
      )}
    >
      <span className="relative inline-flex w-5 h-5 shrink-0">
        <input
          type="checkbox"
          id={id}
          disabled={disabled}
          className="peer appearance-none w-5 h-5 rounded-sm border border-neutral-300 bg-neutral-0 checked:bg-brand-500 checked:border-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors"
          {...props}
        />
        <Icon
          name="check"
          size={14}
          className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
        />
      </span>
      {label}
    </label>
  );
}
