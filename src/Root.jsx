import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { HamMenuProvider } from "./Services/Context/HamMenuContext";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="root">
      <HamMenuProvider>
        <Header />
        <Outlet />
        <Footer />
      </HamMenuProvider>
    </div>
  );
}
