import React from "react";
import ReactDOM from "react-dom/client";
import PortfolioArcade from "./pages/PortfolioArcade";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <PortfolioArcade />
  </React.StrictMode>,
);
