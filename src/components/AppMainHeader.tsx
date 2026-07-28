import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface AppMainHeaderProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  actions?: ReactNode;
}

export function AppMainHeader({
  logo,
  actions,
  className,
  ...props
}: AppMainHeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between h-12 px-4 border-b border-neutral-200 bg-neutral-0",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5">
        {logo ?? (
          <>
            <span className="w-5 h-5 rounded-md bg-brand-500 inline-block" />
            <span className="text-[15px] font-bold text-neutral-900">
              PIB
            </span>
          </>
        )}
      </div>

      <div className="flex items-center gap-4 text-neutral-700">
        {actions ?? (
          <>
            <Icon name="search" size={20} />
            <Icon name="bell" size={20} />
          </>
        )}
      </div>
    </header>
  );
}
