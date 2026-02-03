import { Layout } from "../widgets/Layout/Layout";
import Cafe from "./landing/pages/cafe/Cafe";
import NewsPages from "./landing/pages/news/NewsPages";
import { Contact } from "./landing/ui/contact/Contact";
import { Kurort1 } from "./landing/ui/kurort1/Kurort1";
import { Vacansi } from "./landing/ui/vacansi/Vacansi";
export const Router = {    
        path: "",
        element: <Layout/>,
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
        }
        ]
    } 