import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface ListItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  leading?: ReactNode;
  thumbnail?: string;
  title: ReactNode;
  description?: ReactNode;
  trailing?: ReactNode;
  showChevron?: boolean;
  selectable?: boolean;
  selected?: boolean;
}

export function ListItem({
  leading,
  thumbnail,
  title,
  description,
  trailing,
  showChevron,
  selectable,
  selected,
  className,
  ...props
}: ListItemProps) {
  return (
    <button
      type="button"
      aria-pressed={selectable ? selected : undefined}
      className={cn(
        "flex w-full items-center gap-3 py-3 text-left",
        "border-b border-neutral-100 last:border-b-0",
        "hover:bg-neutral-50 disabled:opacity-50 disabled:pointer-events-none",
        selectable && selected && "bg-brand-50/60",
        className
      )}
      {...props}
    >
      {selectable && (
        <span
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border",
            selected
              ? "border-brand-500 bg-brand-500 text-white"
              : "border-neutral-300 bg-neutral-0"
          )}
        >
          {selected && <Icon name="check" size={13} stroke={3} />}
        </span>
      )}

      {thumbnail ? (
        <img
          src={thumbnail}
          alt=""
          className="h-11 w-11 shrink-0 rounded-md object-cover bg-neutral-100"
        />
      ) : (
        leading && <span className="shrink-0 text-neutral-500">{leading}</span>
      )}

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
