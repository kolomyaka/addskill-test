import { Container, Stack } from "@mui/material";

import { MetricsList } from "@/entities/metrics";
import { OffersList } from "@/entities/offers";

function App() {
  return (
    <Container sx={{ padding: "24px" }}>
      <Stack gap={"24px"}>
        <MetricsList />
        <OffersList />
      </Stack>
    </Container>
  );
}

export default App;
