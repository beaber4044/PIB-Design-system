import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  nav?: ReactNode;
  actions?: ReactNode;
  onSearch?: (value: string) => void;
}

export function Header({
  logo,
  nav,
  actions,
  onSearch,
  className,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center gap-6 h-16 px-6 border-b border-neutral-200 bg-neutral-0",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5 shrink-0">
        {logo ?? (
          <>
            <span className="w-6 h-6 rounded-md bg-brand-500 inline-block" />
            <span className="font-bold text-lg text-neutral-900">PIB</span>
          </>
        )}
      </div>

      {nav && (
        <nav className="hidden md:flex items-center gap-5 text-sm text-neutral-700 shrink-0">
          {nav}
        </nav>
      )}

      <div className="flex-1 max-w-md">
        <div className="relative">
          <Icon
            name="search"
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={(e) => onSearch?.(e.target.value)}
            className={cn(
              "h-9 w-full rounded-full border border-neutral-300 bg-neutral-50 pl-9 pr-4 text-sm",
              "placeholder:text-neutral-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-500"
            )}
          />
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0 text-neutral-600">
        {actions ?? (
          <>
            <Icon name="bell" className="cursor-pointer hover:text-neutral-900" />
            <Icon name="cart" className="cursor-pointer hover:text-neutral-900" />
            <Icon name="user" className="cursor-pointer hover:text-neutral-900" />
          </>
        )}
      </div>
    </header>
  );
}
