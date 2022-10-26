import { createBrowserRouter } from "react-router-dom";
import CategoryCourse from "../components/Categories/CategoryCourse";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Login from "../components/User/Login";
import Register from "../components/User/Register";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Courses />,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/category/:id",
        element: <CategoryCourse />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
