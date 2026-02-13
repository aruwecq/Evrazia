import { AdminLayout } from "./AdminLayout";
import { AdminBanner } from "./ui/adminBanner/AdminBanner";
import AdminStaff from "./ui/AdminStaff/AdminStaff";   // Senda bor
import { AdminHotel } from "./ui/adminHotel/AdminHotel";
import { AdminCafe } from "./ui/adminCafe/AdminCafe";
import { AdminTracks } from "./ui/AdminTracks/AdminTracks";
import  Dashboard  from  "./ui/Dashboard/Dashboard"; ;
import { AdminVacansi } from "./ui/AdminVacansi/AdminVacansi";


export const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "banners",
      element: <AdminBanner />,
    },
    {
      path: "hotel",
      element: <AdminHotel />,
    },
    {
      path: "home",
      element: <Dashboard />,
    },
    {
      path: "cafe",
      element: <AdminCafe />,
    },
    {
      path: "tracks",
      element: <AdminTracks />,
    },
    {
      path: "staff",
      element: <AdminStaff />,
    },
    {
      path: "vacancies",
      element: <AdminVacansi />,
    }

  ],
};