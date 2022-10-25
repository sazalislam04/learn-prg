import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import Login from "../components/User/Login";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Courses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
