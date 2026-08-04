import { cn } from "../lib/cn";
import { Icon } from "./Icon";
import { DateField } from "./DateField";

export interface DateRangeFieldProps {
  startValue?: string;
  endValue?: string;
  onStartChange?: (value: string) => void;
  onEndChange?: (value: string) => void;
  className?: string;
}

export function DateRangeField({
  startValue = "",
  endValue = "",
  onStartChange,
  onEndChange,
  className,
}: DateRangeFieldProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <DateField value={startValue} onChange={(v) => onStartChange?.(v)} aria-label="시작일" />
      <Icon name="arrowRight" size={14} className="text-neutral-400 shrink-0" />
      <DateField value={endValue} onChange={(v) => onEndChange?.(v)} aria-label="종료일" />
    </div>
  );
}
