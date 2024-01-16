
import { React } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/user/userSlice";

const signUpSchema = yup.object({
  email: yup
    .string()
    .email("Email Should be valid")
    .required("Email is Required"),
  username: yup
    .string()
    .required("Username is Required"),
  password: yup
    .string()
    .required("Password is Required"),
  repassword:yup
  .string()
  .required("RePassword is Required"),
});

const RegisterPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password:"",
      repassword:"",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  return (
    <Container>
      <title>Đăng ký</title>
      <Row className="justify-content-center align-items-center">
        <form onSubmit={formik.handleSubmit} className="w-50">
          <div>
            <h3 className="text-center">Đăng ký tài khoản</h3>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="firstname"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange("username")}
              onBlur={formik.handleBlur("username")}
            />
            <div className="error">
              {formik.touched.username && formik.errors.username}
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
            />
            <div className="error">
              {formik.touched.password && formik.errors.password}
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">repassword</label>
            <input
              type="repassword"
              className="form-control"
              name="repassword"
              placeholder="repassword"
              value={formik.values.repassword}
              onChange={formik.handleChange("repassword")}
              onBlur={formik.handleBlur("repassword")}
            />
            <div className="error">
              {formik.touched.repassword && formik.errors.repassword}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 background-primary text-dark"
          >
            Đăng ký
          </button>
          <div className="col d-flex justify-content-center">
            Bạn đã có tài khoản?{" "}
            <Link to="/login" className="ml-1">
              Đăng nhập ngay
            </Link>
          </div>
        </form>
      </Row>
    </Container>
  );
};

export default RegisterPage;
