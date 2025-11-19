import { Stack } from "@mui/material";

import type { Platform } from "../../model/types/offers.types.ts";
import GoogleIcon from "../../assets/google-icon.svg?react";
import VkIcon from "../../assets/vk-icon.svg?react";
import YandexIcon from "../../assets/yandex-icon.svg?react";
import AvitoIcon from "../../assets/avito-icon.svg?react";
import TelegramIcon from "../../assets/tg-icon.svg?react";

interface PlatformsCellProps {
  platforms: Platform[];
}

export const PlatformsCell = ({ platforms }: PlatformsCellProps) => {
  const platformIconMap: Record<string, typeof GoogleIcon> = {
    google: GoogleIcon,
    vk: VkIcon,
    yandex: YandexIcon,
    avito: AvitoIcon,
    telegram: TelegramIcon,
  };

  return (
    <Stack direction="row" gap={"12px"} alignItems={"center"} height={"100%"}>
      <>
        {platforms.map((platform) => {
          const Icon = platformIconMap[platform.id];

          return Icon ? <Icon /> : null;
        })}
      </>
    </Stack>
  );
};
