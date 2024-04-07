import React from "react";
import PropTypes from "prop-types";

import { MdGTranslate as TranslateIcon } from "react-icons/md";
import { FiMoon as MoonIcon, FiSun as SunIcon } from "react-icons/fi";
import { RiLoginBoxLine as LogoutIcon } from "react-icons/ri";
import UserContext from "../context/UserContext";

function NavigationApp({ theme, handleThemeClick }) {
  const { onLogout, user } = React.useContext(UserContext);

  return (
    <header>
      <h1>
        <a href="/">Aplikasi Catatan</a>
      </h1>

      <nav className="navigation">
        <ul>
          <li>
            <a href="/archives">Terarsip</a>
          </li>
        </ul>
      </nav>

      <button className="toggle-locale" type="button">
        <TranslateIcon />
      </button>

      <button className="toggle-theme" type="button" onClick={handleThemeClick}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>

      {user && (
        <button className="button-logout" type="button" onClick={onLogout}>
          <LogoutIcon />
          {user.name}
        </button>
      )}
    </header>
  );
}

NavigationApp.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  handleThemeClick: PropTypes.func.isRequired,
};

export default NavigationApp;
