import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./layouts/MainContainer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getAccessToken } from "./utils/network-data";

const AccessTokenContext = React.createContext();

function App() {
  const [accessToken, setAccessToken] = useState(getAccessToken());

  const onLoginSuccess = (newAccessToken) => setAccessToken(newAccessToken);

  const accessTokenContextValue = useMemo(() => {
    return { accessToken };
  }, [accessToken]);

  if (accessToken) {
    return (
      <AccessTokenContext.Provider value={accessTokenContextValue}>
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route path="/" element={<h1>Catatan Active</h1>} />
            <Route path="/archives" element={<h1>Catatan Archive</h1>} />
          </Route>
        </Routes>
      </AccessTokenContext.Provider>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainContainer />}>
        <Route path="/" element={<LoginPage loginSuccess={onLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
