import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface DateRangeFieldProps {
  startValue?: string;
  endValue?: string;
  onStartChange?: (value: string) => void;
  onEndChange?: (value: string) => void;
  className?: string;
}

export function DateRangeField({
  startValue,
  endValue,
  onStartChange,
  onEndChange,
  className,
}: DateRangeFieldProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="relative">
        <input
          type="text"
          placeholder="시작일"
          value={startValue}
          onChange={(e) => onStartChange?.(e.target.value)}
          className="h-9 w-32 rounded-md border border-neutral-300 bg-neutral-0 pl-3 pr-8 text-xs text-neutral-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500"
        />
        <Icon
          name="chevronDown"
          size={12}
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
        />
      </span>
      <Icon name="arrowRight" size={14} className="text-neutral-400 shrink-0" />
      <span className="relative">
        <input
          type="text"
          placeholder="종료일"
          value={endValue}
          onChange={(e) => onEndChange?.(e.target.value)}
          className="h-9 w-32 rounded-md border border-neutral-300 bg-neutral-0 pl-3 pr-8 text-xs text-neutral-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500"
        />
        <Icon
          name="chevronDown"
          size={12}
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
        />
      </span>
    </div>
  );
}
