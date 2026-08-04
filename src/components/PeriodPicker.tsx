import { cn } from "../lib/cn";
import { Icon } from "./Icon";
import { DateField } from "./DateField";

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
        <DateField value={startValue} onChange={onStartChange} aria-label="시작일" />
        <Icon name="arrowRight" size={14} className="text-neutral-400 shrink-0" />
        <DateField value={endValue} onChange={onEndChange} aria-label="종료일" />
      </div>
    </div>
  );
}
