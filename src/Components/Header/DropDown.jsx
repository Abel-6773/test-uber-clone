import "./DropDown.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NestedDropDown from "./NestedDropDown";
export default function DropDown({ HamMenuActive }) {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = function () {
    setIsActive((c) => {
      return !c;
    });
  };
  return (
    <div className={HamMenuActive ? "drop-down active" : "drop-down"}>
      <ul className="txt-lg">
        <NavLink>
          <li>Passing</li>
        </NavLink>
        <NavLink>
          <li>For drivers</li>
        </NavLink>
        <NavLink>
          <li>Business</li>
        </NavLink>
        <NavLink>
          <li>UberEats</li>
        </NavLink>
        <NavLink onClick={toggleActive}>
          <div className="information">
            <li>Information</li>
            {isActive ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </div>
          {isActive && <NestedDropDown />}
        </NavLink>
        <NavLink>
          <li>Help</li>
        </NavLink>
      </ul>
      <NavLink className="language">
        <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
        PL-PL
      </NavLink>
    </div>
  );
}
