import React, { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box } from "@mui/material";
import { CSVLink } from "react-csv";
import { ContentCopy } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

// const datas = [
//   {
//     no: 1,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2022,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 2,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2022,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 3,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 4,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 5,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 6,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 7,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 8,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 9,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 10,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 3,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 3,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 3,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 3,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 3,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 3,
//     evcs: "CS Roda 2",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
//   {
//     no: 3,
//     evcs: "CS Roda 4",
//     connector: "Type 2",
//     idTag: "0124124x01240v2342",
//     time: 2021,
//     consumption: 0.36,
//     duration: "5 minutes 18 seconds",
//   },
// ];

const TransactionTableData = () => {
  // should be memoized or stable
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isError, isFetching, isLoading, refetch } = useQuery(
    [
      "table-data",
      columnFilters,
      globalFilter,
      pagination.pageIndex,
      pagination.pageSize,
      sorting,
    ],

    async () => {
      const url = new URL(
        "/api/data",
        process.env.NODE_ENV === "production"
          ? "https://www.material-react-table.com"
          : "http://localhost:3000/transacaction"
      );
      url.searchParams.set(
        "start",
        `${pagination.pageIndex * pagination.pageSize}`
      );
      url.searchParams.set("size", `${pagination.pageSize}`);
      url.searchParams.set("filters", JSON.stringify(columnFilters ?? []));
      url.searchParams.set("globalFilter", globalFilter ?? "");
      url.searchParams.set("sorting", JSON.stringify(sorting ?? []));

      const response = await fetch(url.href);
      const json = await response.json();
      return json;
    },
    { keepPreviousData: true }
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "state",
        header: "State",
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone Number",
      },
    ],
    []
  );

  // const queryClient = new QueryClient();

  // const ExampleWithReactQueryProvider = () => (
  //   <QueryClientProvider client={queryClient}>
  //     <TransactionTable />
  //   </QueryClientProvider>
  // );

  // const columns = useMemo(
  //   () => [
  //     {
  //       accessorKey: "no",
  //       header: "No",
  //       size: 50,
  //     },
  //     {
  //       accessorKey: "evcs",
  //       header: "EVCS",
  //     },
  //     {
  //       accessorKey: "connector",
  //       header: "Connector",
  //       size: 50,
  //     },
  //     {
  //       accessorKey: "idTag",
  //       header: "ID Tag",
  //       size: 250,
  //     },
  //     {
  //       accessorKey: "time",
  //       header: "Time",
  //     },
  //     {
  //       accessorKey: "consumption",
  //       header: "Consumption",
  //     },
  //     {
  //       accessorKey: "duration",
  //       header: "Duration",
  //     },
  //   ],
  //   []
  // );

  return (
    <MaterialReactTable
      columns={columns}
      data={data?.data ?? []} //data is undefined on first render
      initialState={{ showColumnFilters: true }}
      manualFiltering
      manualPagination
      manualSorting
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: "error",
              children: "Error loading data",
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      renderTopToolbarCustomActions={() => (
        <Tooltip arrow title="Refresh Data">
          <IconButton onClick={() => refetch()}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      )}
      rowCount={data?.meta?.totalRowCount ?? 0}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isFetching,
        sorting,
      }}
    />
  );
};

const queryClient = new QueryClient();

const TransactionTable = () => (
  <QueryClientProvider client={queryClient}>
    <TransactionTableData />
  </QueryClientProvider>
);

// <MaterialReactTable
//   columns={columns}
//   data={datas}
//   enableRowSelection
//   positionToolbarAlertBanner="bottom"
//   enableStickyHeader
//   muiTableContainerProps={{ sx: { maxHeight: "63vh", maxWidth: "190vh" } }}
//   // enableClickToCopy
//   // muiTableBodyCellCopyButtonProps={{
//   //   sx: { width: '100%' },
//   //   startIcon: <ContentCopy />,
//   // }}
//   defaultColumn={{
//     maxSize: 400,
//     minSize: 80,
//     size: 150, //default size is usually 180
//   }}
//   enableColumnResizing
//   columnResizeMode="onChange"
//   muiTableHeadCellProps={{
//     //simple styling with the `sx` prop, works just like a style prop in this example
//     sx: {
//       fontWeight: "bold",
//       fontSize: "14px",
//     },
//   }}
//   muiTableBodyCellProps={{
//     sx: {
//       ml: "20px",
//     },
//   }}
//   renderTopToolbarCustomActions={({ table }) => (
//     <Box sx={{ display: "flex", gap: "1rem", p: "0.5rem" }}>
//       <button
//         style={{ borderRadius: "5px", padding: "5px", border: "1px black" }}
//       >
//         <CSVLink data={datas}>
//           <p
//             style={{
//               textDecoration: "none",
//               backgroundColor: "none",
//               fontWeight: "600",
//             }}
//           >
//             Download
//           </p>
//         </CSVLink>
//       </button>
//     </Box>

// )}
// />
//   );
// };

export default TransactionTable;
