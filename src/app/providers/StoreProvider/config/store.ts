import { configureStore } from "@reduxjs/toolkit";

import { metricsSlice } from "@/entities/metrics/model/slice/metricsSlice.ts";

export const store = configureStore({
  reducer: {
    metrics: metricsSlice.reducer,
  },
});
