import { NavLink } from "react-router-dom";
import "./PageLinks.css";
export default function PageLinks() {
  return (
    <div className="page-links ">
      <NavLink to="/">
        <p className="logo txt-logo">Uber</p>
      </NavLink>
      <ul>
        <NavLink>
          <li>Passing</li>
        </NavLink>
        <NavLink to="DriversPage">
          <li>For drivers</li>
        </NavLink>
        <NavLink>
          <li>Business</li>
        </NavLink>
        <NavLink className="information">
          <li>Informaiton</li>
        </NavLink>
      </ul>
    </div>
  );
}
