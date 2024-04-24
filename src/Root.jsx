import React from "react";
import { HamMenuProvider } from "./Services/Context/HamMenuContext";
import { DropDownTogglerProvider } from "./Services/Context/DropDownTogglerContext";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div>
      <HamMenuProvider>
        <DropDownTogglerProvider>
          <Header />
          <Outlet />
          <Footer />
        </DropDownTogglerProvider>
      </HamMenuProvider>
    </div>
  );
}
