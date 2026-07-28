import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface RatingProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
}

export function Rating({
  value,
  max = 5,
  onChange,
  readOnly,
  className,
  ...props
}: RatingProps) {
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      role={readOnly ? "img" : "radiogroup"}
      aria-label={`${value} / ${max}`}
      {...props}
    >
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => onChange?.(star)}
          aria-label={`${star}점`}
          className={cn(
            "text-warning-500",
            readOnly ? "cursor-default" : "cursor-pointer hover:scale-110 transition-transform"
          )}
        >
          <Icon
            name="star"
            size={18}
            fill={star <= value ? "currentColor" : "none"}
            className={star <= value ? "" : "text-neutral-300"}
          />
        </button>
      ))}
    </div>
  );
}
