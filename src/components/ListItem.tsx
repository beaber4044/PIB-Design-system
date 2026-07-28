import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface ListItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  leading?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  trailing?: ReactNode;
  showChevron?: boolean;
}

export function ListItem({
  leading,
  title,
  description,
  trailing,
  showChevron,
  className,
  ...props
}: ListItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center gap-3 py-3 text-left",
        "border-b border-neutral-100 last:border-b-0",
        "hover:bg-neutral-50 disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      {leading && <span className="shrink-0 text-neutral-500">{leading}</span>}
      <span className="flex-1 min-w-0">
        <span className="block text-sm text-neutral-900 truncate">{title}</span>
        {description && (
          <span className="block text-xs text-neutral-500 truncate">
            {description}
          </span>
        )}
      </span>
      {trailing && <span className="shrink-0 text-neutral-500">{trailing}</span>}
      {showChevron && (
        <Icon name="chevronRight" size={16} className="shrink-0 text-neutral-400" />
      )}
    </button>
  );
}
