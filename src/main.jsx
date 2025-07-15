import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import router from "./routers/router";
import { RouterProvider } from "react-router-dom";
import MobileProvider from "./Provider/MobileProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MobileProvider>
      <RouterProvider router={router} />
    </MobileProvider>
  </React.StrictMode>
);
