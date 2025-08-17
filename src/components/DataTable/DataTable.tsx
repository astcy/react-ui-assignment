import React, { useState } from "react";
import type { Column } from "../../types/table";

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" }>();

  const toggleRow = (index: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) newSelected.delete(index);
    else newSelected.add(index);
    setSelectedRows(newSelected);
    onRowSelect?.(Array.from(newSelected).map((i) => data[i]));
  };

  const sortedData = [...data];
  if (sortConfig) {
    sortedData.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal === bVal) return 0 as number;
      // string/numeric compare
      return (aVal as any) < (bVal as any)
        ? (sortConfig.direction === "asc" ? -1 : 1)
        : (sortConfig.direction === "asc" ? 1 : -1);
    });
  }

  const requestSort = (key: keyof T) => {
    setSortConfig((prev) =>
      prev?.key === key && prev.direction === "asc"
        ? { key, direction: "desc" }
        : { key, direction: "asc" }
    );
  };

  if (loading) return <p className="text-center py-6" role="status">Loading...</p>;
  if (!data || data.length === 0) return <p className="text-center py-6">No data available</p>;

  return (
    <div className="overflow-x-auto rounded-md border border-gray-300 dark:border-gray-700">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            {selectable && <th className="px-2 py-2">Select</th>}
            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                className="px-4 py-2 text-left font-semibold cursor-pointer select-none"
                onClick={() => requestSort(col.key)}
              >
                <span className="inline-flex items-center gap-1">
                  {col.header}
                  {sortConfig?.key === col.key ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, i) => (
            <tr key={i} className="border-t border-gray-200 dark:border-gray-800">
              {selectable && (
                <td className="px-2 py-2 text-center">
                  <input
                    aria-label={`Select row ${i + 1}`}
                    type="checkbox"
                    checked={selectedRows.has(i)}
                    onChange={() => toggleRow(i)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-2">
                  {String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
