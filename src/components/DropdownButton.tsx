import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface DropdownButtonItem {
  label: string;
  onClick?: () => void;
  danger?: boolean;
}

type Variant = "primary" | "outline";

export interface DropdownButtonProps {
  label: string;
  items: DropdownButtonItem[];
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-600",
  outline: "border border-neutral-300 text-neutral-800 hover:bg-neutral-50",
};

export function DropdownButton({ label, items, variant = "outline", className }: DropdownButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-md px-3.5 text-sm font-medium transition-colors",
          variantClasses[variant]
        )}
      >
        {label}
        <Icon name="chevronDown" size={15} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-10 mt-1.5 min-w-[9rem] overflow-hidden rounded-md border border-neutral-200 bg-neutral-0 py-1 shadow-md"
        >
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className={cn(
                "block w-full px-3.5 py-2 text-left text-sm hover:bg-neutral-50",
                item.danger ? "text-danger-500" : "text-neutral-700"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
