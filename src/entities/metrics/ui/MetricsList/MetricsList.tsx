import { useEffect } from "react";
import { fetchMetrics } from "../../model/api/fetchMetrics.ts";
import { useDispatch, useSelector } from "react-redux";
import { Alert, CircularProgress, Stack, Typography } from "@mui/material";
import { getMetricsState } from "../../model/selectors/getMetricsState.ts";
import { MetricCard } from "../MetricCard/MetricCard.tsx";
import { formatMoney } from "@/shared/lib";

export const MetricsList = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(getMetricsState);

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  if (loading) {
    return (
      <Stack alignItems="center" mt={2}>
        <CircularProgress />
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack alignItems="center" mt={2}>
        <Alert severity="error">{error}</Alert>
      </Stack>
    );
  }

  if (!data) {
    return (
      <Stack alignItems="center" mt={2}>
        <Typography>Нет данных</Typography>
      </Stack>
    );
  }
  console.log(data);

  return (
    <Stack width={"100%"} direction="row" spacing={2} mt={2}>
      <MetricCard
        title={"Расходы"}
        value={formatMoney(data.expenses.value)}
        change={data.expenses.change}
        changeType={data.expenses.changeType}
      />
      <MetricCard
        value={data.clicks.value}
        title={"Клики"}
        change={data.clicks.change}
        changeType={data.clicks.changeType}
      />
      <MetricCard
        value={data.cpc.value}
        title={"CPC"}
        change={data.cpc.change}
        changeType={data.cpc.changeType}
      />
      <MetricCard
        value={formatMoney(data.cpa.value)}
        title={"CPA"}
        change={data.cpa.change}
        changeType={data.cpa.changeType}
      />
    </Stack>
  );
};
