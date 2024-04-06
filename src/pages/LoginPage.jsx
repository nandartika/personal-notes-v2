import React from "react";
import Input from "../components/Input";
import useInputChange from "../hooks/useInputChange";
import { login, putAccessToken } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function LoginPage({ loginSuccess }) {
  const [email, handleEmailChange] = useInputChange("");
  const [password, handlePasswordChange] = useInputChange("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { data } = await login({ email, password });
    if (data?.accessToken) {
      putAccessToken(data.accessToken);
      loginSuccess(data.accessToken)
    }
  };

  return (
    <section className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>

      <form className="input-login" onSubmit={onSubmitHandler}>
        <Input
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>

      <p>
        Belum punya akun? <a href="/register">Daftar di sini</a>
      </p>
    </section>
  );
}

export default LoginPage;
