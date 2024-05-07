import React from "react";
import useInputChange from "../hooks/useInputChange";
import InputLabel from "../components/InputLabel";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/user/action";

function LoginPage() {
  const dispatch = useDispatch();
  const [email, handleEmailChange] = useInputChange("");
  const [password, handlePasswordChange] = useInputChange("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(asyncSetAuthUser({ email, password }));
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

export default LoginPage;
