import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  name: string;
  description: string;
  favorited?: boolean;
  onFavoriteToggle?: () => void;
  onManage?: () => void;
}

export function AppCard({
  icon,
  name,
  description,
  favorited,
  onFavoriteToggle,
  onManage,
  className,
  ...props
}: AppCardProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-0 p-4",
        className
      )}
      {...props}
    >
      <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
        {icon ?? <Icon name="package" size={20} />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-neutral-900 truncate">{name}</p>
          <button
            type="button"
            onClick={onFavoriteToggle}
            aria-label={favorited ? "즐겨찾기 해제" : "즐겨찾기"}
            className="shrink-0 text-neutral-300 hover:text-warning-500"
          >
            <Icon
              name="star"
              size={16}
              fill={favorited ? "currentColor" : "none"}
              className={favorited ? "text-warning-500" : undefined}
            />
          </button>
        </div>
        <p className="text-xs text-neutral-500 mt-0.5 line-clamp-2">{description}</p>
        <button
          type="button"
          onClick={onManage}
          className="mt-3 text-xs font-medium text-neutral-700 border border-neutral-200 rounded-md px-3 py-1.5 hover:bg-neutral-50"
        >
          관리하기
        </button>
      </div>
    </div>
  );
}
