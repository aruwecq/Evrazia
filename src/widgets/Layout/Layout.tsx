import { Outlet } from "react-router-dom";
import Header from "../../pages/landing/ui/header/Header";
import  Footer  from "../../pages/landing/ui/footer/Footer";

export  function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
