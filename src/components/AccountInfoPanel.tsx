import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";

export interface AccountInfoRow {
  label: string;
  value: ReactNode;
  action?: { label: string; onClick?: () => void; tone?: "brand" | "neutral" };
}

export interface AccountInfoPanelProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  email?: string;
  planLabel?: string;
  avatarSrc?: string;
  rows: AccountInfoRow[];
}

export function AccountInfoPanel({
  name,
  email,
  planLabel,
  avatarSrc,
  rows,
  className,
  ...props
}: AccountInfoPanelProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-200 bg-neutral-0 p-5",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <Avatar src={avatarSrc} name={name} size="md" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-neutral-900">{name}</p>
          {email && <p className="truncate text-xs text-neutral-500">{email}</p>}
        </div>
      </div>

      {planLabel && (
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-neutral-500">사용버전</span>
          <Badge tone="brand">{planLabel}</Badge>
        </div>
      )}

      <dl className="mt-3 divide-y divide-neutral-100 border-t border-neutral-100">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2.5 text-xs">
            <dt className="text-neutral-500">{row.label}</dt>
            <dd className="flex items-center gap-2 text-neutral-800">
              <span className="tabular-nums">{row.value}</span>
              {row.action && (
                <button
                  type="button"
                  onClick={row.action.onClick}
                  className={cn(
                    "font-medium",
                    row.action.tone === "brand" ? "text-brand-600" : "text-neutral-400 hover:text-neutral-600"
                  )}
                >
                  {row.action.label}
                </button>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
