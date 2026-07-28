import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon, type IconName } from "./Icon";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  icon?: IconName;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({
  icon = "package",
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center py-12 px-6",
        className
      )}
      {...props}
    >
      <span className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
        <Icon name={icon} size={22} />
      </span>
      <p className="text-sm font-medium text-neutral-900 mb-1">{title}</p>
      {description && (
        <p className="text-xs text-neutral-500 max-w-xs mb-4">{description}</p>
      )}
      {action}
    </div>
  );
}
