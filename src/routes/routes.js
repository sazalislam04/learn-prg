import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CategoryCourse from "../components/Categories/CategoryCourse";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FaQuestions from "../components/FaQuestions/FaQuestions";
import Home from "../components/Home/Home";
import InstructorCourse from "../components/Instructors/InstructorCourse";
import Profile from "../components/Profile/Profile";
import Login from "../components/User/Login";
import Register from "../components/User/Register";
import Layout from "../Layout/Layout";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
        loader: () => fetch("https://education-server-beta.vercel.app/courses"),
      },
      {
        path: "/category/:id",
        element: <CategoryCourse />,
        loader: ({ params }) =>
          fetch(
            `https://education-server-beta.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://education-server-beta.vercel.app/course/${params.id}`),
      },
      {
        path: "/faq",
        element: <FaQuestions />,
      },
      {
        path: "/blog",
        element: <Blog />,
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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/instructor/:id",
        element: <InstructorCourse />,
        loader: ({ params }) =>
          fetch(
            `https://education-server-beta.vercel.app/instructor/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://education-server-beta.vercel.app/checkout/${params.id}`
          ),
      },
    ],
  },
]);
