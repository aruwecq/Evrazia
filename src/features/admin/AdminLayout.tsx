import { Outlet } from "react-router-dom"
import {Header} from "./ui/adminHeader/Header"
import { Sidebar } from "./ui/sidebar/Sidebar"
export default function AdminLayout() {
  return (
       <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

