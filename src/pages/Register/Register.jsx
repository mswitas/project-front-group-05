import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { styles, MediaQueries } from "./Register-styled";
import { TextField } from "../../components/SignIn/TextField";

const Register = () => {
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

  const handleSignUp = (evt) => {
    evt.preventDefault();

    const newUser = { email, password };

    dispatch(register(newUser));
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
              <p style={styles.formP}>Register with your email and password:</p>
              <TextField label="Email:" name="email" type="email" />
              <TextField label="Password:" name="password" type="password" />
              <div style={styles.buttons}>
                <button onClick={handleSignUp} style={styles.btn}>
                  Register
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

export default Register;
