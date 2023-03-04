import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import UserContext from "../utils/UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="login-form">
      <h1>Signin</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Please enter your password";
          } else if (values.password.length < 6) {
            errors.password = "password must be at least 5 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setUser({
            name: "Sourav Raj",
            email: values.email,
          });
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="login-button"
            >
              Submit
            </button>
            {user.name}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
