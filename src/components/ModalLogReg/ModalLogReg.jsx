// ModalLogReg.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { login, register } from "../../redux/auth/operations";

const ModalLogReg = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

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
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  const handleRegister = (evt) => {
    evt.preventDefault();
    dispatch(register({ email, password }))
      .unwrap()
      .then(() => {
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Zaloguj się lub zarejestruj</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            {!isLoggedIn && (
              <>
                <p>Log in using an email and password, after registering:</p>
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
                <button onClick={handleLogIn}>Log in</button>
                <button onClick={handleRegister}>Register</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLogReg;
