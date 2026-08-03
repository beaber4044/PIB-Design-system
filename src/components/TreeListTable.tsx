import { Fragment, useMemo, useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { Badge, type BadgeProps } from "./Badge";
import { Checkbox } from "./Checkbox";
import { Icon } from "./Icon";

export interface TreeListColumn {
  key: string;
  header: string;
  align?: "left" | "right" | "center";
}

export interface TreeListRow {
  id: string | number;
  label: string;
  depth?: number;
  bold?: boolean;
  badge?: { label: string; tone?: BadgeProps["tone"] };
  cells?: Record<string, ReactNode>;
  selectable?: boolean;
}

export interface TreeListTableProps {
  columns: TreeListColumn[];
  rows: TreeListRow[];
  className?: string;
}

const alignClass: Record<NonNullable<TreeListColumn["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

interface RowGroup {
  parent: TreeListRow;
  children: TreeListRow[];
}

function groupRows(rows: TreeListRow[]): RowGroup[] {
  const groups: RowGroup[] = [];
  for (const row of rows) {
    const depth = row.depth ?? 0;
    if (depth === 0 || groups.length === 0) {
      groups.push({ parent: row, children: [] });
    } else {
      groups[groups.length - 1].children.push(row);
    }
  }
  return groups;
}

export function TreeListTable({ columns, rows, className }: TreeListTableProps) {
  const groups = useMemo(() => groupRows(rows), [rows]);
  const [collapsed, setCollapsed] = useState<Set<string | number>>(new Set());

  function toggle(id: string | number) {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function renderRow(row: TreeListRow, options: { hasChildren?: boolean; isCollapsed?: boolean } = {}) {
    const depth = row.depth ?? 0;
    return (
      <tr key={row.id} className="border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50">
        <td className="px-3 py-2.5">
          {row.selectable !== false && <Checkbox aria-label={`${row.label} 선택`} />}
        </td>
        <td className="px-2 py-2.5">
          <div className="flex items-center gap-1.5" style={{ paddingLeft: depth * 20 }}>
            {options.hasChildren ? (
              <button
                type="button"
                onClick={() => toggle(row.id)}
                aria-expanded={!options.isCollapsed}
                aria-label={options.isCollapsed ? `${row.label} 하위 목록 펼치기` : `${row.label} 하위 목록 접기`}
                className="flex h-4 w-4 shrink-0 items-center justify-center text-neutral-400 hover:text-neutral-700"
              >
                <Icon
                  name="chevronRight"
                  size={13}
                  stroke={2.25}
                  className={cn("transition-transform", !options.isCollapsed && "rotate-90")}
                />
              </button>
            ) : (
              depth > 0 && <span className="text-neutral-300">└</span>
            )}
            <span
              className={cn(
                "text-neutral-800",
                row.bold ? "font-semibold text-neutral-900" : "font-normal"
              )}
            >
              {row.label}
            </span>
            {row.badge && (
              <Badge tone={row.badge.tone ?? "success"} className="ml-1">
                {row.badge.label}
              </Badge>
            )}
          </div>
        </td>
        {columns.map((col) => (
          <td
            key={col.key}
            className={cn(
              "px-4 py-2.5 text-neutral-600 tabular-nums whitespace-nowrap",
              alignClass[col.align ?? "left"]
            )}
          >
            {row.cells?.[col.key] ?? ""}
          </td>
        ))}
      </tr>
    );
  }

  return (
    <div className={cn("w-full overflow-x-auto rounded-lg border border-neutral-200", className)}>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            <th className="w-9 px-3 py-2.5" />
            <th className="px-2 py-2.5 text-left text-xs font-medium text-neutral-500">이름</th>
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "px-4 py-2.5 text-xs font-medium text-neutral-500 whitespace-nowrap",
                  alignClass[col.align ?? "left"]
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => {
            const hasChildren = group.children.length > 0;
            const isCollapsed = collapsed.has(group.parent.id);
            return (
              <Fragment key={group.parent.id}>
                {renderRow(group.parent, { hasChildren, isCollapsed })}
                {hasChildren && !isCollapsed && group.children.map((child) => renderRow(child))}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
