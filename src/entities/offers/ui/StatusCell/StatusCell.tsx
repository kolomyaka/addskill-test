import { Chip } from "@mui/material";

const statusMap: Record<
  string,
  { label: string; color: "success" | "warning" | "default" | "error" | "info" }
> = {
  active: { label: "Активен", color: "success" },
  paused: { label: "Пауза", color: "warning" },
  stopped: { label: "Остановлен", color: "error" },
  archived: { label: "Архив", color: "default" },
};

interface StatusCellProps {
  status: string;
}

export const StatusCell = ({ status }: StatusCellProps) => {
  const statusInfo = statusMap[status];

  return (
    <Chip label={statusInfo.label} color={statusInfo.color} size="small" />
  );
};
