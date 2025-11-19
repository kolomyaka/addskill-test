import { Alert, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { getOffersState } from "../../model/selectors/getOffersState.ts";
import { fetchOffers } from "../../api/fetchOffers.ts";

import { CardComponent } from "@/shared/ui";
import { offerColumns } from "@/entities/offers/model/consts/offersColumns.tsx";
import { useAppDispatch } from "@/shared/hooks";

export const OffersList = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useSelector(getOffersState);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (error) {
    return (
      <Stack alignItems="center" mt={2}>
        <Alert severity="error">{error}</Alert>
      </Stack>
    );
  }

  if (!data) {
    return (
      <Stack alignItems="center" mt={2}>
        <Typography>Нет данных</Typography>
      </Stack>
    );
  }

  return (
    <CardComponent>
      <Stack
        sx={{ marginBottom: "24px" }}
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5">Офферы</Typography>
      </Stack>
      <DataGrid
        loading={loading}
        rowHeight={72}
        checkboxSelection
        columns={offerColumns}
        rows={data}
      />
    </CardComponent>
  );
};
