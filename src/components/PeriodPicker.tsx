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

function DateInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <span className="relative inline-block">
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "h-9 w-36 rounded-md border border-neutral-300 bg-neutral-0 pl-3 pr-8 text-xs text-neutral-900",
          "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500",
          // Hide the native calendar glyph but stretch it over the whole
          // field, so clicking anywhere in the box opens the date picker.
          "[&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0",
          "[&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full",
          "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
        )}
      />
      <Icon
        name="calendar"
        size={14}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
      />
    </span>
  );
}

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
        <DateInput value={startValue} onChange={onStartChange} />
        <Icon name="arrowRight" size={14} className="text-neutral-400 shrink-0" />
        <DateInput value={endValue} onChange={onEndChange} />
      </div>
    </div>
  );
}
