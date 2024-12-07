import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { version } from "../package.json";
import App from "./App.tsx";

createRoot(document.getElementById("_pins_1mm2_3")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

console.log(
  `%c[pins]%c${version}%c@jff`,
  "padding: 4px 3px 3px; background: #1d1d1f; font-weight: bold; color: #f5f5f7;",
  "padding: 4px 3px 3px; background: #f5f5f7; font-weight: bold; color: #1d1d1f;",
  "padding: 4px 3px 3px; background: #1d1d1f; font-weight: bold; color: #f5f5f7;",
);
