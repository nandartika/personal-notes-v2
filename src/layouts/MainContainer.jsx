import React, { useMemo, useState } from "react";
import NavigationApp from "./NavigationApp";
import { Outlet } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function MainContainer() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const themeContextValue = useMemo(() => {
    return {
      toggleTheme,
      theme,
    };
  }, [theme]);

  return (
    <div className="app-container" data-theme={theme}>
      <ThemeContext.Provider value={themeContextValue}>
        <NavigationApp theme={theme} handleThemeClick={toggleTheme} />
      </ThemeContext.Provider>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainContainer;
