import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  onChange?: (value: string) => void;
  onClear?: () => void;
}

export function SearchBar({
  onChange,
  onClear,
  className,
  value,
  ...props
}: SearchBarProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Icon
        name="search"
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "h-10 w-full rounded-full border border-neutral-200 bg-neutral-50 pl-9 pr-9 text-sm",
          "placeholder:text-neutral-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500"
        )}
        {...props}
      />
      {onClear && value ? (
        <button
          type="button"
          onClick={onClear}
          aria-label="검색어 지우기"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
        >
          <Icon name="close" size={14} />
        </button>
      ) : null}
    </div>
  );
}
