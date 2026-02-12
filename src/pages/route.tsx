import { Layout } from "../widgets/Layout/Layout";
import ScrollToTop from "./landing/ui/Scroll/ScrollToTop";
import Cafe from "./landing/pages/cafe/Cafe";
import NewsPages from "./landing/pages/news/NewsPages";
import { Banket } from "./landing/ui/banket/Banket";
import { Contact } from "./landing/ui/contact/Contact";
import { Documentss } from "./landing/ui/documentss/Documentss";
import { Kurort1 } from "./landing/ui/kurort1/Kurort1";
import { Tarif } from "./landing/ui/tarif/Tarif";
import { Trassa } from "./landing/ui/trassa/Trassa";
import { Vacansi } from "./landing/ui/vacansi/Vacansi";
import { Gornye } from './landing/ui/gornye/Gornye'
import Hotel from "../pages/landing/pages/Hotel/Hotel.tsx";
import Guest from "../pages/landing/pages/Hotel/Guest.tsx";
import Hotel2 from "../pages/landing/pages/Hotel/Hotel2.tsx";
import Accommodation from "../pages/landing/pages/accommodation/Accommodation.tsx";

import { Favorites } from "./landing/ui/favorites/Favorites.tsx";
export const Router = {    
        path: "",
        element: <>
          <ScrollToTop />
          <Layout />
        </>,
        children:[     
      {
          path: "/news",
          element: <NewsPages/>
        },
        {
          path: "/cafe",
          element: <Cafe/>
        },
        
               {
          path: "/resorts",
          element: <Kurort1/>
        },
                  {
          path: "/contact",
          element: <Contact/>
        },
                     {
          path: "/vacansi",
          element: <Vacansi/>
        },
                        {
          path: "/documentss",
          element: <Documentss/>
        },
                               {
          path: "/tarif",
          element: <Tarif/>
        },
                                  {
          path: "/business",
          element: <Banket/>
        },
                                      {
          path: "/tracks",
          element: <Trassa/>
        },
                                         {
          path: "/gornye",
          element: <Gornye/>
        },
          {
                path: "/hotel",
                element: <Hotel />,
              },
              {
                path: "/hotel/rooms",
                element: <Guest />,
              },
              {
                path: "/hotel/booking",
                element: <Hotel2 />,
              },
              {
                path: "/accommodation",
                element: <Accommodation />,
              },
                   {
                path: "/favorites",
                element: <Favorites/>,
              },
        ]
    } 

