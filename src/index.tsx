import { createRoot } from "react-dom/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";

import App from "./app/App.tsx";

import { StoreProvider } from "@/app/providers/StoreProvider";

const theme = createTheme({
  palette: {
    background: {
      default: "#FBFBFF",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>,
);
