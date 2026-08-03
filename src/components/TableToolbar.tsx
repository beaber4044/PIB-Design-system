import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

export interface TableToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /** Row count, selection summary, etc. */
  left?: ReactNode;
  /** Primary actions (e.g. "+ 사용자 등록"). */
  right?: ReactNode;
}

/**
 * Spacing-safe action row for the gap between a FilterBar/panel above and a
 * table/list below — always use this instead of dropping a bare button
 * between the two, or they collide with no breathing room.
 */
export function TableToolbar({ left, right, className, ...props }: TableToolbarProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center justify-between gap-3 mt-4 mb-3", className)}
      {...props}
    >
      <div className="text-sm text-neutral-500">{left}</div>
      {right && <div className="flex items-center gap-2">{right}</div>}
    </div>
  );
}
