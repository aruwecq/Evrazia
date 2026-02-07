
import AdminLayout from "../admin/AdminLayout";
import {Dashboard} from "../admin/ui/Dashboard/Dashboard";
import { Header } from "./ui/adminHeader/Header";
export const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { index: true, element: <Dashboard /> },
    {
        path: "headerA",
        element: <Header />,
    }
  ],
};


