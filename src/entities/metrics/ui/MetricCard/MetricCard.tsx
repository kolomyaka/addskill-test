import { Stack, Typography } from "@mui/material";
import { CardComponent } from "@/shared/ui";
import IncreaseIcon from "../../assets/increase-icon.svg?react";
import DecreaseIcon from "../../assets/decrease-icon.svg?react";

interface MetricsCardProps {
  value: string | number;
  title: string;
  change: number;
  changeType: "increase" | "decrease";
}

export const MetricCard = ({
  value,
  title,
  change,
  changeType,
}: MetricsCardProps) => {
  const isIncrease = changeType === "increase";
  const ChangeIcon = isIncrease ? IncreaseIcon : DecreaseIcon;

  return (
    <CardComponent>
      <Stack gap={"16px"}>
        <Typography>{title}</Typography>
        <Stack
          direction="row"
          alignItems={"flex-end"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">{value}</Typography>
          <Stack gap={"6px"} direction="row" alignItems={"center"}>
            <ChangeIcon />
            <Typography color={isIncrease ? "green" : "error"}>
              {change}%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </CardComponent>
  );
};
