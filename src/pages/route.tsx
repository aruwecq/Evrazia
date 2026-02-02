import { Layout } from "../widgets/Layout/Layout";
import Cafe from "./landing/pages/cafe/Cafe";
import NewsPages from "./landing/pages/news/NewsPages";
import { Kurort1 } from "./landing/ui/kurort1/Kurort1";
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
        }
        ]
    } 