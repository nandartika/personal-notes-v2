import React from "react";
import Input from "../components/Input";
import useInputChange from "../hooks/useInputChange";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, handleNameChange] = useInputChange("");
  const [email, handleEmailChange] = useInputChange("");
  const [password, handlePasswordChange] = useInputChange("");
  const [confirmPassword, handleConfirmPasswordChange] = useInputChange("");

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const { error } = await register({ name, email, password });
      if (!error) {
        navigate("/");
      }
    } else {
      alert("Password yang anda masukkan tidak sama!");
    }
  };

  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun</h2>

      <form className="input-register" onSubmit={onSubmitHandler}>
        <Input
          id="name"
          type="text"
          label="Name"
          value={name}
          onChange={handleNameChange}
        />
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
        <Input
          id="confirmPassword"
          type="password"
          label="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <button type="submit">Register</button>
      </form>

      <p>
        Sudah punya akun? <a href="/">Login di sini</a>
      </p>
    </section>
  );
}

export default RegisterPage;
