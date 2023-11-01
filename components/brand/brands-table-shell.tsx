"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { Brand } from "@/types/brand";
import { formatCreatedDateForTable } from "@/utils/date-utils";
import { type ColumnDef } from "@tanstack/react-table";
import * as React from "react";

interface BrandsTableShellProps {
  data: Brand[];
  pageCount: number;
}

export function BrandsTableShell({ data, pageCount }: BrandsTableShellProps) {
  const [isPending, startTransition] = React.useTransition();

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo<ColumnDef<Brand, unknown>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex space-x-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("name")}
              </span>
            </div>
          );
        },
        enableSorting: false,
      },
      {
        accessorKey: "website",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Website" />
        ),
        cell: ({ row }) => {
          return (
              <div className="flex space-x-2">
              <a href={row.getValue("website")} target="_blank" className="max-w-[500px] truncate">
                {row.getValue("website")}
              </a>
            </div>
          );
        },
        enableSorting: false,
        filterFn: (row, id, value) => {
          return value instanceof Array && value.includes(row.getValue(id));
        },
      },
      {
        accessorKey: "created_at",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex space-x-2">
              <span className="max-w-[500px] truncate">
                {formatCreatedDateForTable(row.getValue("created_at"))}
              </span>
            </div>
          );
        },
        enableSorting: false,
        filterFn: (row, id, value) => {
          return value instanceof Array && value.includes(row.getValue(id));
        },
      }
    ],
    [isPending]
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      pageCount={pageCount}
      searchableColumns={[
        {
          id: "name",
          title: "Name",
        },
      ]}
    />
  );
}
