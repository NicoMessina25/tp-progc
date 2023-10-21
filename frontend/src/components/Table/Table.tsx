 

import {
  CellContext,
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table"

import { Input } from "@/shadcnComponents/ui/input"
import { CSSProperties } from 'react';
import { Button } from "@/shadcnComponents/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcnComponents/ui/table"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onEdit?: (item:TData)=> void
  onDelete?: (item:TData) => void,
  onView?:(item:TData) => void,
  className?: string
  style?: CSSProperties
}

export interface Cell<TData,TValue = unknown> extends CellContext<TData,TValue> {
}



export function DataTable<TData, TValue>({
  columns,
  data,
  onDelete,
  onEdit,
  onView,
  className = "",
  style
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state:{
      columnFilters,
    }
  })

  

  return (
    <div className={`rounded-md border ${className}`} style={style}>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter types..."
          value={(table.getColumn("type")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("type")?.setFilterValue(event.target.value)
          }
          className="max-w-sm mx-5"
        />
        <Input
          placeholder="Filter dimensions..."
          value={(table.getColumn("dimension")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("dimension")?.setFilterValue(event.target.value)
          }
          className="max-w-sm mx-5"
        />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                {onView && <TableCell><Icon icon={'uil:eye'} onClick={()=> onView(row.original)} className='w-7 h-7 p-1 rounded transition-all hover:text-cyan-300 hover:bg-cyan-50/10 cursor-pointer' /></TableCell>}
                {onEdit && <TableCell><Icon icon={'material-symbols:edit'} onClick={()=> onEdit(row.original)} className='w-7 h-7 p-1 rounded transition-all hover:text-cyan-300 hover:bg-cyan-50/10 cursor-pointer' /></TableCell>}
                {onDelete && <TableCell><Icon icon={'mdi:trash'} onClick={()=> onDelete(row.original)} className='w-7 h-7 p-1 rounded transition-all hover:text-cyan-300 hover:bg-cyan-50/10 cursor-pointer' /></TableCell>}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 mx-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
