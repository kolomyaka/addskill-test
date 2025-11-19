import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { fetchMetrics } from "../api/fetchMetrics.ts";
import type { MetricsResponse, MetricsSchema } from "../types/metrics.types.ts";

const initialState: MetricsSchema = {
  loading: false,
  error: null,
  data: undefined,
};

export const metricsSlice = createSlice({
  name: "metricsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchMetrics.fulfilled,
        (state, action: PayloadAction<MetricsResponse>) => {
          state.data = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});
