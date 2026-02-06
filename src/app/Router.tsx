import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../widgets/Layout/Layout";
// ScrollToTop ni import qilishing kerak
import ScrollToTop from "../pages/landing/ui/Scroll/ScrollToTop"; 
import { Home } from "../pages/landing/ui/Home";
import Ski from "../pages/landing/pages/Ski/Ski.tsx";
import Banner from "../pages/landing/ui/banner/Banner";
import Events from "../pages/landing/pages/events/Events";
import Hotel from "../pages/landing/pages/Hotel/Hotel.tsx";
import Guest from "../pages/landing/pages/Hotel/Guest.tsx";
import Hotel2 from "../pages/landing/pages/Hotel/Hotel2.tsx";

// Layout ni ustidan ScrollToTop bilan o'rab chiqamiz
const LayoutWithScroll = () => (
  <>
    <ScrollToTop />
    <Layout />
  </>
);

export const myRouter = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />, edi, endi buni o'rniga LayoutWithScroll qo'yamiz
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
        }
    ],
  },
]);