import { StrictMode } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <div id="modal-root" />
    <App />
  </StrictMode>
);
