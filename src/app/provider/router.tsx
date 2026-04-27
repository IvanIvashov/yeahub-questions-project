import { createBrowserRouter } from "react-router-dom";
import App from "./../layout/App";
import MainContent from "../../pages/MainPage/MainContent";
import HomePage from "../../pages/HomePage/HomePage";
import QuestionDetails from "../../widgets/questionDetails/QuestionDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/questions", element: <MainContent /> },
      { path: "/details", element: <QuestionDetails /> },
    ],
  },
]);
