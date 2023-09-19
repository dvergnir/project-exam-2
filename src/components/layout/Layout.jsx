import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import holidazeLogo from "../../images/holidazelogo.png";
import { LayoutWrapper } from "./Layout.styled";
import ScrollToTopButton from "../utils/ScrollToTopButton";
import RouteToTop from "../utils/RouteToTop";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header>
        <img src={holidazeLogo} alt="logo" className="logo"></img>
      </Header>
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </LayoutWrapper>
  );
}
