import { configureStore } from "@reduxjs/toolkit";

import { metricsSlice } from "@/entities/metrics";
import { offersSlice } from "@/entities/offers";

export const store = configureStore({
  reducer: {
    metrics: metricsSlice.reducer,
    offers: offersSlice.reducer,
  },
});
