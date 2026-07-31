import { useState, type KeyboardEvent, type SelectHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export function Select({
  error,
  className,
  children,
  onMouseDown,
  onChange,
  onBlur,
  onKeyDown,
  ...props
}: SelectProps) {
  const [open, setOpen] = useState(false);

  // Native <select> doesn't expose an "options list closed" event, so this
  // approximates it: mousedown toggles (opening/closing the listbox),
  // change and blur always force it closed (picking a value or tabbing
  // away both close the listbox even though focus can remain).
  function close() {
    setOpen(false);
  }

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
        onMouseDown={(e) => {
          setOpen((v) => !v);
          onMouseDown?.(e);
        }}
        onChange={(e) => {
          close();
          onChange?.(e);
        }}
        onBlur={(e) => {
          close();
          onBlur?.(e);
        }}
        onKeyDown={(e: KeyboardEvent<HTMLSelectElement>) => {
          if (e.key === "Escape" || e.key === "Enter" || e.key === "Tab") close();
          onKeyDown?.(e);
        }}
        {...props}
      >
        {children}
      </select>
      <Icon
        name="chevronDown"
        size={16}
        className={cn(
          "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 transition-transform",
          open && "rotate-180"
        )}
      />
    </span>
  );
}
