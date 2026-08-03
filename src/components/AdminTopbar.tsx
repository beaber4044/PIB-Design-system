import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export interface TopbarMenuItem {
  label: string;
  onClick?: () => void;
  danger?: boolean;
}

interface TopbarDropdownProps {
  trigger: ReactNode;
  items: TopbarMenuItem[];
  align?: "left" | "right";
  triggerClassName?: string;
  ariaLabel: string;
}

function TopbarDropdown({ trigger, items, align = "right", triggerClassName, ariaLabel }: TopbarDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={ariaLabel}
        className={triggerClassName}
      >
        {trigger}
      </button>
      {open && (
        <div
          role="menu"
          className={cn(
            "absolute z-20 mt-2 min-w-[10rem] overflow-hidden rounded-md border border-neutral-200 bg-neutral-0 py-1 shadow-md",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className={cn(
                "block w-full px-3.5 py-2 text-left text-sm hover:bg-neutral-50",
                item.danger ? "text-danger-500" : "text-neutral-700"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export interface AdminTopbarProps extends HTMLAttributes<HTMLElement> {
  orgName?: string;
  userName?: string;
  /** Toggles the paired Sidebar's collapsed state — always wire this, never leave the hamburger inert. */
  onMenuClick?: () => void;
  /** Extra items rendered left of the org switcher (e.g. notification bell). */
  actions?: ReactNode;
  /** Organizations/workspaces the switcher can jump to. Passing this makes the org name a working dropdown. */
  orgMenuItems?: TopbarMenuItem[];
  /** Account menu (프로필, 설정, 로그아웃 ...). Passing this makes the avatar a working dropdown. */
  userMenuItems?: TopbarMenuItem[];
  /** Called when the info icon is clicked — wire to a help panel, docs link, or tooltip trigger. */
  onInfoClick?: () => void;
}

export function AdminTopbar({
  orgName = "PIB Cloud",
  userName = "관리자",
  onMenuClick,
  actions,
  orgMenuItems,
  userMenuItems,
  onInfoClick,
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

        {orgMenuItems && orgMenuItems.length > 0 ? (
          <TopbarDropdown
            ariaLabel={`${orgName} 전환`}
            triggerClassName="flex items-center gap-1 text-xs text-neutral-300 hover:text-white"
            trigger={
              <>
                {orgName}
                <Icon name="chevronDown" size={13} />
              </>
            }
            items={orgMenuItems}
          />
        ) : (
          <span className="flex items-center gap-1 text-xs text-neutral-300">
            {orgName}
            <Icon name="chevronDown" size={13} />
          </span>
        )}

        <button
          type="button"
          onClick={onInfoClick}
          aria-label="도움말"
          className="text-neutral-400 hover:text-white"
        >
          <Icon name="info" size={17} />
        </button>

        {userMenuItems && userMenuItems.length > 0 ? (
          <TopbarDropdown
            ariaLabel={`${userName} 계정 메뉴`}
            triggerClassName="block"
            trigger={<Avatar name={userName} size="sm" />}
            items={userMenuItems}
          />
        ) : (
          <Avatar name={userName} size="sm" />
        )}
      </div>
    </header>
  );
}
