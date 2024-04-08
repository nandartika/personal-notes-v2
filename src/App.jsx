import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./layouts/MainContainer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotesPage from "./pages/NotesPage";
import UserContext from "./context/UserContext";
import { getAccessToken, getUserLogged } from "./utils/network-data";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";

function App() {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(false);

  useEffect(() => {
    const isLogin = async () => {
      const accessToken = getAccessToken();
      if (accessToken) {
        await onLoginSuccess();
      }
      setInitializing(true);
    };

    isLogin();
  }, []);

  const onLoginSuccess = async () => {
    const { data } = await getUserLogged();
    setUser(data);
    return;
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
          <Route path="/archives" element={<NotesPage type="archived" />} />
          <Route path="/add-note" element={<AddPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<h1>Halaman tidak ditemukan</h1>} />
        </>
      );
    }

    return (
      <>
        <Route path="/" element={<LoginPage loginSuccess={onLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
      </>
    );
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          {renderRouting()}
        </Route>
        <Route path="*" element={<h1>Halaman tidak ditemukan</h1>} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
