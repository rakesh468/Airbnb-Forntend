import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Signup.css";

const formValidationSchema = yup.object({
  email: yup.string().required("Email Id Required"),
  password: yup.string().min(8).max(12).required("Password Required"),
});

const API_URL = "https://airbnb-backendcode.herokuapp.com";

function Signup() {
  const history = useHistory();
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (newuser) => {
        console.log("Onsubmit", newuser);
        signupuser(newuser);
      },
    });

  const signupuser = (newuser) => {
    console.log(newuser);
    fetch(`${API_URL}/users/signup`, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/login"));
  };
  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          type="email"
          variant="standard"
          label="Enter Email"
          error={errors.email && touched.email}
          value={values.email}
          helperText={errors.email && touched.email && errors.email}
        />
        <TextField
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          id="password"
          type="password"
          variant="standard"
          label="Enter Password"
          error={errors.password && touched.password}
          helperText={errors.password && touched.password && errors.password}
        />
        <Button variant="contained" color="success" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default Signup;
