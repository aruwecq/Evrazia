import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../widgets/Layout/Layout";
import ScrollToTop from "../pages/landing/ui/Scroll/ScrollToTop"; 
import { Router as PagesRouter } from "../pages/route";
import { Home } from "../pages/landing/ui/Home";
import Ski from "../pages/landing/pages/Ski/Ski.tsx";
import Banner from "../pages/landing/ui/banner/Banner";
import Events from "../pages/landing/pages/events/Events";
import Catalog from "../pages/landing/pages/catalog/Catalog.tsx";
import Hotel from "../pages/landing/pages/Hotel/Hotel.tsx";
import Guest from "../pages/landing/pages/Hotel/Guest.tsx";
import Hotel2 from "../pages/landing/pages/Hotel/Hotel2.tsx";
import { Slujba } from "../pages/landing/ui/slujba/Slujba.tsx";

import { adminRoutes } from "../features/admin/adminRoutes.tsx";
import { SignUp } from "../features/auth/ui/signUp/SignUp.tsx";
import { SignIn } from "../features/auth/ui/signIn/SignIn.tsx";
        
const LayoutWithScroll = () => (
  <>
    <ScrollToTop />
    <Layout />
  </>
);
export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithScroll />,
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
      },
      {
        path: "/catalog",
        element: <Catalog/>
      }, 
      {
        path: "/hotel",
        element: <Hotel/>
      },
      {
        path: "/hotel/rooms",
        element: <Guest/>
      },
      {
        path: "/hotel/booking",
        element: <Hotel2/>
      },
         {
        path: "/slu",
        element: <Slujba/>
      }
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    
      ...(PagesRouter.children || []),

    ],
  },
  adminRoutes,
]);
