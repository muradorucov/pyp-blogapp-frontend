import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./context/ContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";

import "./index.css";

const router = createBrowserRouter(ROUTES);

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
);
