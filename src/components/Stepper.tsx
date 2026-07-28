import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface StepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
}

export function Stepper({
  value,
  min = 0,
  max = Infinity,
  onChange,
  className,
}: StepperProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-neutral-200",
        className
      )}
    >
      <button
        type="button"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        aria-label="수량 감소"
        className="w-8 h-8 flex items-center justify-center text-neutral-600 disabled:opacity-30"
      >
        <Icon name="minus" size={14} />
      </button>
      <span className="w-8 text-center text-sm tabular-nums text-neutral-900">
        {value}
      </span>
      <button
        type="button"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        aria-label="수량 증가"
        className="w-8 h-8 flex items-center justify-center text-neutral-600 disabled:opacity-30"
      >
        <Icon name="plus" size={14} />
      </button>
    </div>
  );
}
