import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import router from "./routers/router";
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);