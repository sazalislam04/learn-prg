import { createBrowserRouter } from "react-router-dom";
import CategoryCourse from "../components/Categories/CategoryCourse";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import FaQuestions from "../components/FaQuestions/FaQuestions";
import Home from "../components/Home/Home";
import InstructorCourse from "../components/Instructors/InstructorCourse";
import Premium from "../components/Premium/Premium";
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
        element: <Home />,
      },
      {
        path: "courses",
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
        path: "/faq",
        element: <FaQuestions />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/instructor/:id",
        element: <InstructorCourse />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/instructor/${params.id}`),
      },
      {
        path: "/premium",
        element: <Premium />,
      },
    ],
  },
]);
