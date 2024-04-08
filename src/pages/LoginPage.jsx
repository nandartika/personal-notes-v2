import React from "react";
import useInputChange from "../hooks/useInputChange";
import { login, putAccessToken } from "../utils/network-data";
import InputLabel from "../components/InputLabel";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();
  const [email, handleEmailChange] = useInputChange("");
  const [password, handlePasswordChange] = useInputChange("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { data } = await login({ email, password });
    if (data?.accessToken) {
      navigate("/");
      putAccessToken(data.accessToken);
      loginSuccess(data.accessToken);
    }
  };

  return (
    <section className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>

      <form className="input-login" onSubmit={onSubmitHandler}>
        <InputLabel
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <InputLabel
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

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
