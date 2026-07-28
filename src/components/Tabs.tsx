import { cn } from "../lib/cn";
import { Badge } from "./Badge";

export interface TabItem {
  value: string;
  label: string;
  count?: number;
}

export type TabsVariant = "underline" | "pill" | "bordered";

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  variant?: TabsVariant;
  className?: string;
}

export function Tabs({
  items,
  value,
  onChange,
  variant = "underline",
  className,
}: TabsProps) {
  if (variant === "pill") {
    return (
      <div
        role="tablist"
        className={cn(
          "inline-flex items-center gap-1 rounded-full bg-neutral-100 p-1",
          className
        )}
      >
        {items.map((item) => {
          const active = item.value === value;
          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(item.value)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition-colors",
                active
                  ? "bg-neutral-0 text-neutral-900 shadow-sm font-medium"
                  : "text-neutral-500 hover:text-neutral-800"
              )}
            >
              {item.label}
              {item.count !== undefined && (
                <Badge tone={active ? "brand" : "neutral"}>{item.count}</Badge>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  if (variant === "bordered") {
    return (
      <div
        role="tablist"
        className={cn("flex items-center gap-2", className)}
      >
        {items.map((item) => {
          const active = item.value === value;
          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(item.value)}
              className={cn(
                "flex items-center gap-1.5 rounded-md border px-3.5 py-1.5 text-sm transition-colors",
                active
                  ? "border-brand-500 bg-brand-50 text-brand-700 font-medium"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
              )}
            >
              {item.label}
              {item.count !== undefined && (
                <Badge tone={active ? "brand" : "neutral"}>{item.count}</Badge>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="tablist"
      className={cn("flex items-center gap-6 border-b border-neutral-200", className)}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.value)}
            className={cn(
              "relative flex items-center gap-1.5 py-3 text-sm transition-colors",
              active
                ? "text-brand-600 font-medium"
                : "text-neutral-500 hover:text-neutral-800"
            )}
          >
            {item.label}
            {item.count !== undefined && (
              <Badge tone={active ? "brand" : "neutral"}>{item.count}</Badge>
            )}
            {active && (
              <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-brand-500" />
            )}
          </button>
        );
      })}
    </div>
  );
}
