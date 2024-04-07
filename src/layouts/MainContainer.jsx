import React, { useState } from "react";
import NavigationApp from "./NavigationApp";
import { Outlet } from "react-router-dom";

function MainContainer() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="app-container" data-theme={theme}>
      <NavigationApp theme={theme} handleThemeClick={toggleTheme} />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainContainer;
