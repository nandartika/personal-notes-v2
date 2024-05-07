import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainContainer from "./layouts/MainContainer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotesPage from "./pages/NotesPage";
import { getAccessToken, getUserLogged } from "./utils/network-data";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUserActionCreator } from "./states/authUser/action";

function App() {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(false);
  const authUser = useSelector((states) => states.authUser);

  useEffect(() => {
    const isLogin = async () => {
      const accessToken = getAccessToken();
      if (!!accessToken) {
        dispatch(setAuthUserActionCreator(accessToken));
      }
      setInitializing(true);
    };

    isLogin();
  }, []);

  const renderRouting = () => {
    if (!initializing) {
      return;
    }

    if (authUser) {
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
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<MainContainer />}>
        {renderRouting()}
      </Route>
      <Route path="*" element={<h1>Halaman tidak ditemukan</h1>} />
    </Routes>
  );
}

export default App;
