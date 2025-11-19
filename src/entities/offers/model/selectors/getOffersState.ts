import type { OffersSchema } from "../types/offers.types.ts";

import type { RootState } from "@/app/providers/StoreProvider";

export const getOffersState = (state: RootState): OffersSchema => state.offers;
