import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Team from "../pages/Team";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import CourseItem from "../pages/CourseItem";
import TeacherDetails from "../pages/TeacherDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/courses.json"),
      },
      {
        loader: () => fetch("/courses.json"),
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        loader: () => fetch("/courses.json"),
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <CourseItem></CourseItem>
          </PrivateRoute>
        ),
      },
      {
        loader: () => fetch("/team.json"),
        path: "/team",
        element: (
          <PrivateRoute>
            <Team></Team>
          </PrivateRoute>
        ),
      },
      {
        loader: () => fetch("/team.json"),
        path: "/teacher/:id",
        element: (
          <PrivateRoute>
            <TeacherDetails></TeacherDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
