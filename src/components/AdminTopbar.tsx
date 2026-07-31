import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export interface AdminTopbarProps extends HTMLAttributes<HTMLElement> {
  orgName?: string;
  userName?: string;
  onMenuClick?: () => void;
  actions?: ReactNode;
}

export function AdminTopbar({
  orgName = "PIB Cloud",
  userName = "관리자",
  onMenuClick,
  actions,
  className,
  ...props
}: AdminTopbarProps) {
  return (
    <header
      className={cn(
        "flex h-12 items-center gap-3 bg-neutral-900 px-4 text-neutral-0",
        className
      )}
      {...props}
    >
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="메뉴 열기"
        className="text-neutral-300 hover:text-white"
      >
        <Icon name="menu" size={18} />
      </button>

      <div className="flex items-center gap-1.5 shrink-0">
        <span className="w-5 h-5 rounded bg-brand-500 inline-block" />
        <span className="font-bold text-sm">Admin</span>
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-4 shrink-0">
        {actions}
        <button
          type="button"
          className="flex items-center gap-1 text-xs text-neutral-300 hover:text-white"
        >
          {orgName}
          <Icon name="chevronDown" size={13} />
        </button>
        <Icon name="info" size={17} className="text-neutral-400 hover:text-white cursor-pointer" />
        <Avatar name={userName} size="sm" />
      </div>
    </header>
  );
}
