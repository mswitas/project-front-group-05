import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { ReactComponent as GoogleIcon } from "../../assets/icons.svg";

import { styles, MediaQueries } from "./Login-styled";
import { TextField } from "../../components/SignIn/TextField";

export const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleChange = (evt) => {
    switch (evt.target.name) {
      case "email":
        setEmail(evt.target.value);
        break;
      case "password":
        setPassword(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleLogIn = async (evt) => {
    evt.preventDefault();

    const userToLogIn = { email, password };

    dispatch(login(userToLogIn));
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <div style={styles.formWrapper}>
            <Form style={styles.form} onChange={handleChange}>
              <p style={styles.formP}>
                You can log in with your Google Account:
              </p>
              <div style={styles.googleBtnWrapper}>
                <a
                  style={styles.googleBtn}
                  href="https://demokraci-kapusta.onrender.com/"
                >
                  <GoogleIcon style={styles.googleBtnSvg} />
                  Google
                </a>
              </div>
              <p style={styles.formP}>
                Or log in using an email and password, after registering:
              </p>

              <TextField label="Email:" name="email" type="email" />
              <TextField label="Password:" name="password" type="password" />
              <div style={styles.buttons}>
                <button onClick={handleLogIn} style={styles.btn}>
                  Log in
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <MediaQueries />
    </>
  );
};

export default Login;
