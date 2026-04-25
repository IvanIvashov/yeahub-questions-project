import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../app/styles/common.css";
import "../app/styles/reset.css";
import {router} from './provider/router.tsx'

import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
