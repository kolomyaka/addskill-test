import { Stack, Typography } from "@mui/material";

import { StatusCell } from "../StatusCell/StatusCell.tsx";
import type { Offer } from "../../model/types/offers.types.ts";
import { PlatformsCell } from "../PlatformsCell/PlatformsCell.tsx";

import { formatDate } from "@/shared/lib";
import { CardComponent } from "@/shared/ui";

interface OffersCardProps {
  offer: Offer;
}

export const OfferCard = ({ offer }: OffersCardProps) => (
  <CardComponent>
    <Stack flex={1} spacing={1}>
      <Typography variant="h6">{offer.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        Баланс: {offer.balance}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Расход: {offer.spent}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Дата запуска: {formatDate(offer.launchDate)}
      </Typography>
      <Stack direction="row" alignItems={"center"} gap={"8px"}>
        <Typography variant="body2" color="text.secondary">
          Статус:
        </Typography>
        <StatusCell status={offer.status} />
      </Stack>
      <PlatformsCell platforms={offer.platforms} />
    </Stack>
  </CardComponent>
);
