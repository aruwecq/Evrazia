import { Layout } from "../widgets/Layout/Layout";
import Cafe from "./landing/pages/cafe/Cafe";
import NewsPages from "./landing/pages/news/NewsPages";
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
        }
        ]


    } 