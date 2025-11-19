import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import type { ReactNode } from "react";

import { formatDate, formatMoney } from "@/shared/lib";
import { PlatformsCell } from "@/entities/offers/ui/PlatformsCell/PlatformsCell.tsx";
import { StatusCell } from "@/entities/offers/ui/StatusCell/StatusCell.tsx";

export const offerColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Название офера",
    flex: 1,
  },
  {
    field: "platforms",
    headerName: "Площадки",
    flex: 1,
    renderCell: (params: GridRenderCellParams) =>
      (<PlatformsCell platforms={params.value} />) as ReactNode,
  },
  {
    field: "launchDate",
    headerName: "Дата запуска",
    flex: 1,
    valueGetter: (params) => formatDate(params),
  },
  {
    field: "balance",
    headerName: "Баланс",
    flex: 1,
    valueGetter: (value) => formatMoney(value),
  },
  {
    field: "spent",
    headerName: "Расход",
    flex: 1,
    valueGetter: (value) => formatMoney(value),
  },
  {
    field: "status",
    headerName: "Статус",
    flex: 1,
    renderCell: (params: GridRenderCellParams) =>
      (<StatusCell status={params.value} />) as ReactNode,
  },
];
