import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";
import { ProgressBar } from "./ProgressBar";

export interface ChecklistItem {
  label: string;
  done: boolean;
}

export interface SetupChecklistCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  items: ChecklistItem[];
  onSkip?: () => void;
  skipLabel?: string;
}

export function SetupChecklistCard({
  title,
  items,
  onSkip,
  skipLabel = "이 단계 건너뛰기",
  className,
  ...props
}: SetupChecklistCardProps) {
  const doneCount = items.filter((item) => item.done).length;

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border border-neutral-200 bg-neutral-0 p-5",
        className
      )}
      {...props}
    >
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      <p className="mt-1 text-xs text-neutral-500 tabular-nums">
        {doneCount}/{items.length}개 완료
      </p>
      <ProgressBar value={doneCount} max={items.length} className="mt-2.5" />

      <ul className="mt-4 flex-1 space-y-2.5">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span
              className={cn(
                "flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                item.done ? "bg-brand-500 text-white" : "bg-neutral-200 text-neutral-400"
              )}
            >
              {item.done ? (
                <Icon name="check" size={11} stroke={2.5} />
              ) : (
                <Icon name="minus" size={11} stroke={2.5} />
              )}
            </span>
            <span
              className={cn(
                "text-sm",
                item.done ? "text-neutral-500 line-through decoration-neutral-300" : "text-neutral-700"
              )}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      {onSkip && (
        <button
          type="button"
          onClick={onSkip}
          className="mt-4 self-start text-xs text-neutral-400 hover:text-neutral-600"
        >
          {skipLabel}
        </button>
      )}
    </div>
  );
}
