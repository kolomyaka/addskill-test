import { Container } from "@mui/material";

import { MetricsList } from "@/entities/metrics";
import { OffersList } from "@/entities/offers";

function App() {
  return (
    <Container>
      <MetricsList />
      <OffersList />
    </Container>
  );
}

export default App;
