import { createBrowserRouter } from "react-router-dom";
import App from "./../layout/App";
import MainContent from "../../pages/MainPage/ui/MainContent";
import HomePage from "../../pages/HomePage/HomePage";
import QuestionDetails from "../../widgets/questionDetails/QuestionDetails";
import ErrorPage from "../../pages/ErrorPage/ui/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/questions", element: <MainContent /> },
      { path: "/details", element: <QuestionDetails /> },
      { path: "/trainer", element: <QuestionDetails /> },
      { path: "/materials", element: <QuestionDetails /> },
      { path: "/skills", element: <QuestionDetails /> },
      { path: "*", element: <ErrorPage/> },
    ],
  },
]);
