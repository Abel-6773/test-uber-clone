import { NavLink } from "react-router-dom";
import "./Header.css";
import PageLinks from "./PageLinks";
import NavButtons from "./NavButtons";
export default function Header() {
  return (
    <header className="bg-dark">
      <nav className="nav-bar container-xl txt-sm">
        <PageLinks />
        <NavButtons />
      </nav>
    </header>
  );
}
