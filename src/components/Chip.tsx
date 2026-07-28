import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  onRemove?: () => void;
}

export function Chip({
  selected,
  onRemove,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        selected
          ? "border-brand-500 bg-brand-50 text-brand-700"
          : "border-neutral-200 bg-neutral-0 text-neutral-700"
      )}
    >
      <button type="button" className={cn(className)} {...props}>
        {children}
      </button>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="제거"
          className="text-neutral-400 hover:text-neutral-700"
        >
          <Icon name="close" size={12} />
        </button>
      )}
    </span>
  );
}
