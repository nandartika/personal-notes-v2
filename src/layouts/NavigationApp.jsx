import React from "react";

import { MdGTranslate as TranslateIcon } from "react-icons/md";
import { FiMoon as MoonIcon, FiSun as SunIcon } from "react-icons/fi";
import { RiLoginBoxLine as LogoutIcon } from "react-icons/ri";
import ThemeContext from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { unsetAuthUserActionCreator } from "../states/user/action";

function NavigationApp() {
  const dispatch = useDispatch();
  const { toggleTheme, theme } = React.useContext(ThemeContext);
  const user = useSelector((states) => states.user);

  const onLogout = () => {
    dispatch(unsetAuthUserActionCreator());
  };

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

      {user?.accessToken && (
        <button className="button-logout" type="button" onClick={onLogout}>
          <LogoutIcon />
          {user?.name}
        </button>
      )}
    </header>
  );
}

export default NavigationApp;
