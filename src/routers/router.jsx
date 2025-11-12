import HomeLayout from "../Layout/HomeLayout";
import Projects from "../Components/layout-component/Projects";
import MySkills from "../Components/layout-component/MySkills";
import AboutMe from "../Components/layout-component/AboutMe";
import ContactMe from "../Components/layout-component/ContactMe";
import ErrorPage from "../Page/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/layout-component/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage ></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "skills",
        element: <MySkills></MySkills>,
      },
      {
        path: "about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "contact",
        element: <ContactMe></ContactMe>,
      },
    ],
  },
]);

export default router;
