import { createAsyncThunk } from "@reduxjs/toolkit";

import type { MetricsResponse } from "../types/metrics.types.ts";

export const fetchMetrics = createAsyncThunk<MetricsResponse>(
  "metrics/fetchMetrics",
  async () => {
    await new Promise((res) => setTimeout(res, 500));
    const response = await fetch("/mock-data.json");
    if (!response.ok) throw new Error("Failed to fetch metrics");
    const data = await response.json();
    return data.currentMetrics;
  },
);
