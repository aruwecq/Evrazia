import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../widgets/Layout/Layout";
import { Router } from "../pages/route";
import { Home } from "../pages/landing/ui/Home";
import  NewsPages  from "../pages/landing/pages/news/NewsPages"
import  Banner  from "../pages/landing/ui/banner/Banner";
import Cafe from "../pages/landing/pages/cafe/Cafe";
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
          path: "/news",
          element: <NewsPages/>
        },
        {
          path: "/cafe",
          element: <Cafe/>
        },
        {
          path: "/events",
          element: <Events/>
        }
    ],
  },
  Router,
]
);

