import type { MetricsSchema } from "../types/metrics.types.ts";

import type { RootState } from "@/app/providers/StoreProvider";

export const getMetricsState = (state: RootState): MetricsSchema =>
  state.metrics;
