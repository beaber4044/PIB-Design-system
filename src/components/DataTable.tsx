import { cn } from "../lib/cn";
import type { TableColumn } from "./Table";
import { Pagination } from "./Pagination";
import { Icon } from "./Icon";

export interface DataTableProps<T extends { id: string | number }> {
  columns: TableColumn<T>[];
  data: T[];
  selectedIds?: (string | number)[];
  onSelectedChange?: (ids: (string | number)[]) => void;
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  selectedIds,
  onSelectedChange,
  page,
  totalPages,
  onPageChange,
  className,
}: DataTableProps<T>) {
  const selectable = !!onSelectedChange;
  const allSelected = selectable && data.length > 0 && data.every((row) => selectedIds?.includes(row.id));

  function toggleAll() {
    if (!onSelectedChange) return;
    onSelectedChange(allSelected ? [] : data.map((r) => r.id));
  }

  function toggleRow(id: string | number) {
    if (!onSelectedChange) return;
    const set = new Set(selectedIds ?? []);
    if (set.has(id)) set.delete(id);
    else set.add(id);
    onSelectedChange(Array.from(set));
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="w-full overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-0 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              {selectable && (
                <th className="w-10 px-4 py-2.5">
                  <button
                    type="button"
                    onClick={toggleAll}
                    aria-label={allSelected ? "전체 선택 해제" : "전체 선택"}
                    className={cn(
                      "flex h-4 w-4 items-center justify-center rounded-sm border",
                      allSelected
                        ? "border-brand-500 bg-brand-500 text-white"
                        : "border-neutral-300 bg-neutral-0"
                    )}
                  >
                    {allSelected && <Icon name="check" size={10} stroke={3} />}
                  </button>
                </th>
              )}
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
            {data.map((row) => {
              const checked = !!selectedIds?.includes(row.id);
              return (
                <tr
                  key={row.id}
                  className={cn(
                    "border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50",
                    checked && "bg-brand-50/50"
                  )}
                >
                  {selectable && (
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => toggleRow(row.id)}
                        aria-label={checked ? "선택 해제" : "선택"}
                        className={cn(
                          "flex h-4 w-4 items-center justify-center rounded-sm border",
                          checked
                            ? "border-brand-500 bg-brand-500 text-white"
                            : "border-neutral-300 bg-neutral-0"
                        )}
                      >
                        {checked && <Icon name="check" size={10} stroke={3} />}
                      </button>
                    </td>
                  )}
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
              );
            })}
          </tbody>
        </table>
      </div>

      {page !== undefined && totalPages !== undefined && onPageChange && (
        <div className="mt-3">
          <Pagination page={page} totalPages={totalPages} onChange={onPageChange} />
        </div>
      )}
    </div>
  );
}
