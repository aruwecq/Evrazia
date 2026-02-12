import { Outlet } from "react-router-dom";
import Header from "../../pages/landing/ui/header/Header";
import  Footer  from "../../pages/landing/ui/footer/Footer";

export  function Layout() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main className="px-4 sm:px-6 lg:px-8">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
