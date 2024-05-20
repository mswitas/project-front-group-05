import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogIn = (evt) => {
    evt.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogIn}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
