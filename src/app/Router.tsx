import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../widgets/Layout/Layout";
import { Router } from "../pages/route";
import { Home } from "../pages/landing/ui/Home";
import Ski from "../pages/landing/pages/Ski/Ski.tsx";
import  Banner  from "../pages/landing/ui/banner/Banner";
import Events from "../pages/landing/pages/events/Events";
export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
        path: "/",
        element: <Home/>,
        },
        {
        path: "/banner",
        element: <Banner/>
        },
        {
          path: "/events",
          element: <Events/>
        },
        {
          path: "/ski",
          element: <Ski/>
        }
    ],
  },
  Router,
]
);

