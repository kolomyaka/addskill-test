import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Offer, OffersSchema } from "../types/offers.types.ts";
import { fetchOffers } from "../../api/fetchOffers.ts";

const initialState: OffersSchema = {
  loading: false,
  error: null,
  data: undefined,
};

export const offersSlice = createSlice({
  name: "offersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOffers.fulfilled,
        (state, action: PayloadAction<Offer[]>) => {
          state.data = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});
