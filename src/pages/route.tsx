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
        }
        ]
    } 