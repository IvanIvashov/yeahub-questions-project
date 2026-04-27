import { createBrowserRouter } from "react-router-dom";
import App from "./../layout/App";
import MainContent from "../../pages/MainContent/MainContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/questions", element: <MainContent /> }],
  },
]);
