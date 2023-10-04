import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/pages/MainLayout";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import NewsDetail from "../components/pages/NewsDetail";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data/news.json"),
      },
      {
        path: "/news/:id",

        element: (
          <PrivateRoute>
            <NewsDetail></NewsDetail>
          </PrivateRoute>
        ),
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
