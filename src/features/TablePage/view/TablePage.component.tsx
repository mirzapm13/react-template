import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuChevronDown, LuChevronsUpDown, LuChevronUp } from "react-icons/lu";
import DebouncedInput from "../components/DebouncedInput";
import { USERS } from "./data";

type TUser = (typeof USERS)[0];

const TablePage = () => {
  const columnHelper = createColumnHelper<TUser>();

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = [
    columnHelper.display({
      id: "actions",
      cell: (props) => <>{props.row.index + 1} </>,
      enableSorting: false,
    }),
    columnHelper.accessor("profile", {
      cell: (info) => (
        <img
          src={info?.getValue()}
          alt="..."
          className="rounded-full w-10 h-10 object-cover"
        />
      ),
      header: "Profile",
    }),
    columnHelper.accessor("firstName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "First Name",
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Last Name",
    }),
    columnHelper.accessor("age", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Age",
    }),
    columnHelper.accessor("visits", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Visits",
    }),
    columnHelper.accessor("progress", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Progress",
    }),
  ];
  const [data] = useState(() => [...USERS]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    state: {
      globalFilter,
      sorting,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="ModuleContainer">
      <div className="p-2 mx-auto text-black fill-gray-400 min-w-fit">
        <div className="flex justify-between mb-2">
          <div className="w-full flex items-center gap-1">
            <FaSearch />
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none border-b-2 w-full duration-300 border-primary-500"
              placeholder="Search all columns..."
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden ">
          <table className="w-full text-left">
            <thead className="bg-primary-600 text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="capitalize px-3.5 py-2 cursor-pointer select-none "
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex justify-between items-center w-full">
                        <p>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </p>
                        {(header.column.getCanSort() &&
                          {
                            asc: <LuChevronUp />,
                            desc: <LuChevronDown />,
                          }[header.column.getIsSorted() as string]) ?? (
                          <LuChevronsUpDown />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, i) => (
                  <tr
                    key={row.id}
                    className={clsx(
                      i % 2 === 0 ? "white" : "bg-gray-50",
                      "hover:bg-gray-200"
                    )}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-3.5 py-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr className="text-center h-32">
                  <td colSpan={12}>No Recoard Found!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ==========pagination============== */}

        <div className="flex items-center justify-end mt-2 gap-2">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {">"}
          </button>

          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-transparent max-w-[200px]"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
