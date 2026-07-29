import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Icon, type IconName } from "./Icon";

export interface SidebarNavItem {
  value: string;
  label: string;
  icon: IconName;
  badge?: string;
}

export interface SidebarNavGroup {
  label?: string;
  items: SidebarNavItem[];
}

export interface SidebarProps extends Omit<HTMLAttributes<HTMLElement>, "onSelect"> {
  groups: SidebarNavGroup[];
  activeValue: string;
  onNavigate: (value: string) => void;
  collapsed?: boolean;
  logo?: ReactNode;
  footer?: ReactNode;
}

export function Sidebar({
  groups,
  activeValue,
  onNavigate,
  collapsed = false,
  logo,
  footer,
  className,
  ...props
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col border-r border-neutral-200 bg-neutral-0 transition-[width] duration-150",
        collapsed ? "w-16" : "w-60",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex h-14 items-center border-b border-neutral-100 px-4",
          collapsed && "justify-center px-0"
        )}
      >
        {!collapsed &&
          (logo ?? (
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-brand-500 shrink-0" />
              <span className="font-bold text-sm text-neutral-900">PIB Admin</span>
            </div>
          ))}
        {collapsed && <span className="w-6 h-6 rounded-md bg-brand-500 shrink-0" />}
      </div>

      <nav className="flex-1 overflow-y-auto py-3">
        {groups.map((group, i) => (
          <div key={group.label ?? i} className={cn("px-3", i > 0 && "mt-4")}>
            {group.label && !collapsed && (
              <p className="px-2 mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                {group.label}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const active = item.value === activeValue;
                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => onNavigate(item.value)}
                    title={collapsed ? item.label : undefined}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
                      collapsed && "justify-center px-0",
                      active
                        ? "bg-brand-50 text-brand-700 font-medium"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    )}
                  >
                    <Icon name={item.icon} size={18} className="shrink-0" />
                    {!collapsed && <span className="flex-1 truncate text-left">{item.label}</span>}
                    {!collapsed && item.badge && (
                      <span className="shrink-0 rounded-full bg-danger-500 px-1.5 text-[10px] font-medium text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {footer && (
        <div className={cn("border-t border-neutral-100 p-3", collapsed && "flex justify-center")}>
          {footer}
        </div>
      )}
    </aside>
  );
}

export interface SidebarToggleProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> {
  collapsed: boolean;
  onClick: () => void;
}

/**
 * Rail-edge toggle button — render as a sibling of `Sidebar` inside a
 * `relative` wrapper so it can straddle the sidebar's right border.
 */
export function SidebarToggle({ collapsed, onClick, className, ...props }: SidebarToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={collapsed ? "사이드바 펼치기" : "사이드바 접기"}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10",
        "flex h-6 w-6 items-center justify-center rounded-full",
        "border border-neutral-200 bg-neutral-0 text-neutral-500 shadow-sm",
        "hover:text-neutral-900 hover:border-neutral-300 transition-colors",
        className
      )}
      style={{ left: collapsed ? 64 : 240 }}
      {...props}
    >
      <Icon name={collapsed ? "chevronRight" : "chevronLeft"} size={13} />
    </button>
  );
}
