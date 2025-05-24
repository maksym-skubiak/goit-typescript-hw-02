import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
