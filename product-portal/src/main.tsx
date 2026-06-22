import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Appz from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Appz />
  </StrictMode>,
);

// const x = 10;

// x = 20;
