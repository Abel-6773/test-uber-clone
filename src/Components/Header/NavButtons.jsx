import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./NavButtons.css";

export default function NavButtons({ HamMenuActive, toggler }) {
  return (
    <ul className="nav-buttons">
      <button className="language">
        <FontAwesomeIcon
          icon={faGlobe}
          style={{ color: "#ffffff" }}
          className="globe-icon"
        />
        PL-PL
      </button>
      <button className="help">Help</button>
      <button>Log in</button>
      <button className="register">register</button>
      <button className="ham-button">
        {HamMenuActive ? (
          <div
            className="active"
            onClick={() => {
              toggler();
            }}
          >
            <FontAwesomeIcon
              icon={faX}
              size="xl"
              style={{ color: "#ffffff" }}
              className="ham-icon-active"
            />
          </div>
        ) : (
          <div
            className="inactive"
            onClick={() => {
              toggler();
            }}
          >
            <div></div>
            <div></div>
          </div>
        )}
      </button>
    </ul>
  );
}
