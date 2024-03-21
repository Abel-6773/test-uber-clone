import "./DriversNav.css";
import { NavLink } from "react-router-dom";

export default function DriversNav() {
  return (
    <nav className="drivers-nav ">
      <div className="drivers-nav-content container-xl">
        <div className="drivers-logo">
          <p className="logo txt-logo">Drive</p>
        </div>
        <div className="drivers-links txt-xs">
          <ul>
            <NavLink>
              <li>Overview</li>
            </NavLink>
            <NavLink>
              <li>Requirements</li>
            </NavLink>
            <NavLink>
              <li>Delivery driver</li>
            </NavLink>
            <NavLink>
              <li>Driving basics</li>
            </NavLink>
            <NavLink>
              <li>Earnings</li>
            </NavLink>
            <NavLink>
              <li>Vehicle solutions</li>
            </NavLink>
            <NavLink>
              <li>Saftey</li>
            </NavLink>
            <NavLink>
              <li>Uber Pro</li>
            </NavLink>
            <NavLink>
              <li>Contact us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
