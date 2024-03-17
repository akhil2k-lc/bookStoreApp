import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="dark:bg-slate-900 dark:text-white">
      <App />
    </div>
  </BrowserRouter>
);
