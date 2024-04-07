import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./layouts/MainContainer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotesPage from "./pages/NotesPage";
import UserContext from "./context/UserContext";
import { getAccessToken, getUserLogged } from "./utils/network-data";

function App() {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(false);

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      onLoginSuccess();
    }
    setInitializing(true);
  }, []);

  const onLoginSuccess = async () => {
    const { data } = await getUserLogged();
    setUser(data);
  };

  const onLogout = () => {
    localStorage.clear();
    setUser(null);
  };

  const userContextValue = useMemo(() => {
    return { onLogout, user };
  }, [user]);

  const renderRouting = () => {
    if (!initializing) {
      return;
    }

    if (user) {
      return (
        <>
          <Route path="/" element={<NotesPage />} />
          <Route path="/archives" element={<h1>Catatan Archive</h1>} />
          <Route path="/detail/:id" element={<h1>Detail Page</h1>} />
        </>
      );
    }

    return (
      <>
        <Route path="/" element={<LoginPage loginSuccess={onLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
      </>
    );
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          {renderRouting()}
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
