import { cn } from "../lib/cn";

export interface SegmentedToggleOption {
  value: string;
  label: string;
}

export interface SegmentedToggleProps {
  options: SegmentedToggleOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SegmentedToggle({ options, value, onChange, className }: SegmentedToggleProps) {
  return (
    <div
      role="tablist"
      className={cn("inline-flex items-center rounded-md border border-neutral-200 bg-neutral-0 p-0.5", className)}
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-sm px-3.5 py-1.5 text-xs font-medium transition-colors",
              active
                ? "bg-brand-500 text-white"
                : "text-neutral-500 hover:text-neutral-800"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
