import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOffers = createAsyncThunk("offers/fetchOffers", async () => {
  await new Promise((res) => setTimeout(res, 500));
  const response = await fetch("/mock-data.json");
  if (!response.ok) throw new Error("Failed to fetch offers");
  const data = await response.json();
  return data.offers;
});
