import Card from "@mui/material/Card";
import { CardContent, type SxProps } from "@mui/material";
import type { ReactNode } from "react";

interface CardComponentProps {
  children: ReactNode;
  sx?: SxProps;
}

export const CardComponent = ({ children, sx }: CardComponentProps) => {
  return (
    <Card
      sx={{
        flex: 1,
        boxShadow: "0px 1px 8px 1px #E5E5F2A3",
        borderRadius: "24px",
        ...sx,
      }}
    >
      <CardContent sx={{ padding: "24px" }}>{children}</CardContent>
    </Card>
  );
};
