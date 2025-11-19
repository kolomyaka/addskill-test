import type { RootState } from "@/app/providers/StoreProvider";
import type { MetricsSchema } from "../types/metrics.types.ts";

export const getMetricsState = (state: RootState): MetricsSchema =>
  state.metrics;
