import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import holidazeLogo from "../../images/holidazeLogo.png";

export default function Layout() {
  return (
    <>
      <Header>
        <img src={holidazeLogo} alt="logo" className="logo"></img>
      </Header>
      <Outlet />
      <Footer />
    </>
  );
}
