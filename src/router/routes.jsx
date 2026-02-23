import { createBrowserRouter } from "react-router-dom";
import AllProject from "../pages/AllProject";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "projects", element: <AllProject /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
