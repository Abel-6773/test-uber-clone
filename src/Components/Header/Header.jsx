import { NavLink } from "react-router-dom";
import "./Header.css";
import PageLinks from "./PageLinks";
import NavButtons from "./NavButtons";
import DropDown from "./DropDown";
export default function Header({ HamMenuActive, toggler }) {
  return (
    <header className="bg-dark">
      <nav className="nav-bar container-xl txt-sm">
        <PageLinks />
        <NavButtons HamMenuActive={HamMenuActive} toggler={toggler} />
      </nav>
      <DropDown HamMenuActive={HamMenuActive} />
      {/* {HamMenuActive && } */}
    </header>
  );
}
