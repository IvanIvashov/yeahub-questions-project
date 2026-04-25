import { createBrowserRouter } from "react-router-dom";
import  App from './../layout/App'
import QuestionList from "../../pages/questionList/QuestionList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: '/questions', element: <QuestionList /> }],
  },
]);
