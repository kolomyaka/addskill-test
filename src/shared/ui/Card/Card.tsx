import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
export const CardComponent = ({ children }) => {
  return (
    <Card
      sx={{
        flex: 1,
        boxShadow: "0px 1px 8px 1px #E5E5F2A3",
        borderRadius: "24px",
      }}
    >
      <CardContent sx={{ padding: "24px" }}>{children}</CardContent>
    </Card>
  );
};
