import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface DateFieldProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  "aria-label"?: string;
}

/**
 * A single date input with a calendar icon that opens the native date
 * picker on click anywhere in the field (not just the tiny native glyph).
 * Use this instead of a plain text input for any date entry — never
 * hand-roll a text input with a decorative chevron.
 */
export function DateField({ value, onChange, className, ...props }: DateFieldProps) {
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
          "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer",
          className
        )}
        {...props}
      />
      <Icon
        name="calendar"
        size={14}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
      />
    </span>
  );
}
