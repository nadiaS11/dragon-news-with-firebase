import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/pages/MainLayout";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
