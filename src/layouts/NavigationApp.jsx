import React from "react";
import PropTypes from "prop-types";

import { MdGTranslate as TranslateIcon } from "react-icons/md";
import { FiMoon as MoonIcon, FiSun as SunIcon } from "react-icons/fi";
import { RiLoginBoxLine as LogoutIcon } from "react-icons/ri";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";

function NavigationApp() {
  const { onLogout, user } = React.useContext(UserContext);
  const { toggleTheme, theme } = React.useContext(ThemeContext);

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

      <button className="toggle-theme" type="button" onClick={toggleTheme}>
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

export default NavigationApp;
