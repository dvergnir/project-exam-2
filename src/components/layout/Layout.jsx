import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import holidazeLogo from "../../images/holidazelogo.png";
import { LayoutWrapper } from "./Layout.styled";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header>
        <img src={holidazeLogo} alt="logo" className="logo"></img>
      </Header>
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
}
