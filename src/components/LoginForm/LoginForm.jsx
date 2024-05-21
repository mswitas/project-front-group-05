import { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as GoogleSvg } from "../../images/google.svg";

import {
  StyledformRegister,
  StyledpromtText,
  StyledLinkbtnGoogle,
  StyledlabelText,
  StyledpromtText1,
  StyledformInput,
  StyledcontainerButton,
  Styledlabel,
  LogInBtn,
  StyledNavlink,
} from "./LoginForm.styled";
import { logIn } from "../../redux/auth/operations";

// Login form
export const LoginForm = () => {
  // State
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmaiError] = useState("This is a required field");
  const [passwordError, setPasswordError] = useState(
    "This is a required field"
  );
  const [errorSymbol, setErrorSymbol] = useState("*");
  // Dispatch
  const dispatch = useDispatch();

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    dispatch(logIn({ email: email.value, password: password.value }));
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        return;
    }
  };
  // Email verification
  const emailHandler = (e) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmaiError("Incorrect email");
      setErrorSymbol("*");
      if (!e.target.value) {
        setEmaiError("This is a required field");
        setErrorSymbol("*");
      }
    } else {
      setEmaiError("");
    }
  };
  // Password verification
  const passwordHandler = (e) => {
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      if (!e.target.value) {
        setPasswordError("This is a required field");
      }
    } else {
      setPasswordError("");
    }
  };

  return (
    // Div
    <StyledformRegister>
      {/* Google authorization text */}
      <StyledpromtText>
        You can log in with your Google Account:
      </StyledpromtText>
      {/* Google button */}
      <StyledLinkbtnGoogle href="https://kapusta-backend.goit.global/auth/google">
        <GoogleSvg />
      </StyledLinkbtnGoogle>
      {/* Authorization text */}
      <StyledpromtText1>
        Or log in using an email and password, after registering:
      </StyledpromtText1>
      {/* Form */}
      <form action="" autoComplete="on" onSubmit={handleSubmit}>
        <Styledlabel>
          <StyledlabelText>
            {emailDirty && emailError && (
              <span style={{ color: "#EB5757", fontSize: 10, paddingTop: 4 }}>
                {errorSymbol}{" "}
              </span>
            )}
            Email:
          </StyledlabelText>
          <StyledformInput
            onBlur={blurHandler}
            onChange={emailHandler}
            type="email"
            name="email"
            placeholder="your@email.com"
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email may consist of letters, numbers and a mandatory character '@'"
            required
          />
          {emailDirty && emailError && (
            <div style={{ color: "#EB5757", fontSize: 10, paddingTop: 4 }}>
              {emailError}{" "}
            </div>
          )}
        </Styledlabel>
        <div>
          <Styledlabel>
            <StyledlabelText>
              {passwordDirty && passwordError && (
                <span style={{ color: "#EB5757", fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{" "}
                </span>
              )}
              Password:
            </StyledlabelText>
            <StyledformInput
              onBlur={blurHandler}
              onChange={passwordHandler}
              type="password"
              name="password"
              placeholder="password"
              pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{8,}"
              title="The password can consist of at least 8 letters, numbers and symbols '!@#$%^&*'"
              required
            />
            {passwordDirty && passwordError && (
              <div style={{ color: "#EB5757", fontSize: 10, paddingTop: 4 }}>
                {passwordError}{" "}
              </div>
            )}
          </Styledlabel>
        </div>
        <StyledcontainerButton>
          <LogInBtn type="submit">LOG IN</LogInBtn>
          <StyledNavlink to="/register">Registration</StyledNavlink>
        </StyledcontainerButton>
      </form>
    </StyledformRegister>
  );
};
