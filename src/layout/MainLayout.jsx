import { Group } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";
import Footer from "../components/footer/Footer";

function MainLayout({ isFooter = true }) {
  return (
    <div>
      <ScrollToTop />
      <Header />
      {/* <NavBar /> */}
      <div className="w-full">
        <div className="w-full max-w-[1440px] mx-auto">
          <Outlet />
        </div>
      </div>
      {isFooter && <Footer />}
    </div>
  );
}

export default MainLayout;
