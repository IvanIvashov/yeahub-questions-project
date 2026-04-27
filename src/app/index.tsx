import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {router} from './provider/router.tsx'
import "../app/styles/common.css";
import "../app/styles/reset.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
