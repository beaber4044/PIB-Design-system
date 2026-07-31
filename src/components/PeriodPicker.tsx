import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface PeriodPreset {
  label: string;
  value: string;
}

export interface PeriodPickerProps {
  startValue: string;
  endValue: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
  preset?: string;
  onPresetChange?: (value: string) => void;
  presets?: PeriodPreset[];
  className?: string;
}

const defaultPresets: PeriodPreset[] = [
  { label: "오늘", value: "today" },
  { label: "7일", value: "7d" },
  { label: "1개월", value: "1m" },
  { label: "3개월", value: "3m" },
  { label: "전체", value: "all" },
];

export function PeriodPicker({
  startValue,
  endValue,
  onStartChange,
  onEndChange,
  preset,
  onPresetChange,
  presets = defaultPresets,
  className,
}: PeriodPickerProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {onPresetChange && (
        <div className="inline-flex items-center gap-1 rounded-full bg-neutral-100 p-1">
          {presets.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => onPresetChange(p.value)}
              className={cn(
                "rounded-full px-3 py-1 text-xs transition-colors",
                preset === p.value
                  ? "bg-neutral-0 text-neutral-900 shadow-sm font-medium"
                  : "text-neutral-500 hover:text-neutral-800"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2">
        <span className="relative">
          <Icon
            name="calendar"
            size={14}
            className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <input
            type="date"
            value={startValue}
            onChange={(e) => onStartChange(e.target.value)}
            className="h-9 w-36 rounded-md border border-neutral-300 bg-neutral-0 pl-8 pr-2 text-xs text-neutral-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500"
          />
        </span>
        <Icon name="arrowRight" size={14} className="text-neutral-400 shrink-0" />
        <span className="relative">
          <Icon
            name="calendar"
            size={14}
            className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <input
            type="date"
            value={endValue}
            onChange={(e) => onEndChange(e.target.value)}
            className="h-9 w-36 rounded-md border border-neutral-300 bg-neutral-0 pl-8 pr-2 text-xs text-neutral-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500"
          />
        </span>
      </div>
    </div>
  );
}
