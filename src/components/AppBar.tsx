import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface AppBarProps extends HTMLAttributes<HTMLElement> {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  right?: ReactNode;
}

export function AppBar({
  title,
  showBack,
  onBack,
  right,
  className,
  ...props
}: AppBarProps) {
  return (
    <header
      className={cn(
        "relative flex items-center justify-center h-12 px-2 border-b border-neutral-200 bg-neutral-0",
        className
      )}
      {...props}
    >
      {showBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="뒤로가기"
          className="absolute left-2 w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100"
        >
          <Icon name="chevronLeft" size={20} />
        </button>
      )}

      <span className="text-[15px] font-medium text-neutral-900 truncate max-w-[60%]">
        {title}
      </span>

      <div className="absolute right-2 flex items-center gap-1 text-neutral-700">
        {right}
      </div>
    </header>
  );
}
