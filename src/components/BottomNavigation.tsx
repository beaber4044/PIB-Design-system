import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon, type IconName } from "./Icon";

export interface BottomNavigationItem {
  value: string;
  label: string;
  icon: IconName;
}

export interface BottomNavigationProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  items: BottomNavigationItem[];
  value: string;
  onChange: (value: string) => void;
}

export function BottomNavigation({
  items,
  value,
  onChange,
  className,
  ...props
}: BottomNavigationProps) {
  return (
    <nav
      className={cn(
        "flex items-center justify-around h-14 border-t border-neutral-200 bg-neutral-0",
        className
      )}
      {...props}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className="flex flex-col items-center gap-0.5 flex-1 h-full justify-center"
          >
            <Icon
              name={item.icon}
              size={20}
              className={active ? "text-brand-500" : "text-neutral-400"}
            />
            <span
              className={cn(
                "text-[10px]",
                active ? "text-brand-500 font-medium" : "text-neutral-400"
              )}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
