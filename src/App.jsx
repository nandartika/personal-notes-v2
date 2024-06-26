import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./layouts/MainContainer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotesPage from "./pages/NotesPage";
import { getAccessToken, getUserLogged } from "./utils/network-data";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncReceiveUserLogged,
  setAuthUserActionCreator,
} from "./states/user/action";

function App() {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(false);
  const user = useSelector((states) => states.user);

  useEffect(() => {
    const isLogin = async () => {
      const accessToken = getAccessToken();
      if (!!accessToken) {
        dispatch(setAuthUserActionCreator(accessToken));
        dispatch(asyncReceiveUserLogged());
      }
      setInitializing(true);
    };

    isLogin();
  }, []);

  const renderRouting = () => {
    if (!initializing) {
      return;
    }

    if (user?.accessToken) {
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
