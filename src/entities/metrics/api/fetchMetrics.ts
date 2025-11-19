import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMetrics = createAsyncThunk(
  "metrics/fetchMetrics",
  async () => {
    await new Promise((res) => setTimeout(res, 500));
    const response = await fetch("/mock-data.json");
    if (!response.ok) throw new Error("Failed to fetch metrics");
    const data = await response.json();
    return data.currentMetrics;
  },
);
