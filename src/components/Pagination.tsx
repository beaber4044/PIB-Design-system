import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
}

export function Pagination({ page, totalPages, onChange, className }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        aria-label="이전 페이지"
        className="flex h-7 w-7 items-center justify-center rounded text-neutral-500 hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none"
      >
        <Icon name="chevronLeft" size={14} />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          aria-current={p === page ? "page" : undefined}
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded text-xs tabular-nums",
            p === page
              ? "bg-brand-500 text-white font-medium"
              : "text-neutral-600 hover:bg-neutral-100"
          )}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="다음 페이지"
        className="flex h-7 w-7 items-center justify-center rounded text-neutral-500 hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none"
      >
        <Icon name="chevronRight" size={14} />
      </button>
    </div>
  );
}
