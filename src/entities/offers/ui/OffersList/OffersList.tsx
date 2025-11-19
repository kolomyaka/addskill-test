import {
  Alert,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { getOffersState } from "../../model/selectors/getOffersState.ts";
import { fetchOffers } from "../../api/fetchOffers.ts";
import { offerColumns } from "../../model/consts/offersColumns.tsx";
import { OfferCard } from "../OffersCard/OffersCard.tsx";

import { CardComponent } from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks";

export const OffersList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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

  if (isMobile) {
    return (
      <Stack spacing={2}>
        {data.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
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
