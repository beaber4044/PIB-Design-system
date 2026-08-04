import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface TableColumn<T> {
  key: string;
  header: string;
  align?: "left" | "right" | "center";
  render?: (row: T) => ReactNode;
}

export interface TableProps<T extends { id: string | number }> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
}

const alignClass: Record<NonNullable<TableColumn<unknown>["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Table<T extends { id: string | number }>({
  columns,
  data,
  className,
}: TableProps<T>) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-0 shadow-sm", className)}>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "px-4 py-2.5 font-medium text-xs text-neutral-500 whitespace-nowrap",
                  alignClass[col.align ?? "left"]
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "px-4 py-3 text-neutral-800 tabular-nums whitespace-nowrap",
                    alignClass[col.align ?? "left"]
                  )}
                >
                  {col.render
                    ? col.render(row)
                    : String((row as Record<string, unknown>)[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
