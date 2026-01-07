import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../widgets/Layout/Layout";
import { Router } from "../pages/route";
import { Home } from "../pages/landing/ui/Home";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
        path: "/",
        element: <Home/>,
        }
    ],
  },
  Router,
]
);

