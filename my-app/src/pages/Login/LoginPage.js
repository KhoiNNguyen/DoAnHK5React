import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../features/user/userSlice";
import { Row,Container } from "react-bootstrap";


const loginSchema = yup.object({
  username: yup
    .string()
    .required("Username is Required"),
  password: yup
    .string()
    .required("Password is Required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password:"",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(loginUser(values));
      resetForm(); // Optionally reset the form after successful submission
    },
  });
  return (
    <Container>
        <title>Đăng nhập</title>
      <Row className='justify-content-center align-items-center'>
        <form onSubmit={formik.handleSubmit} className='w-50'>
          <div>
            <h3 className='text-center'>Đăng nhập tài khoản</h3>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder='Username'
              value={formik.values.username}
              onChange={formik.handleChange('username')}
              onBlur={formik.handleBlur('username')}
            />
            <div className='error'>
              {
                formik.touched.username && formik.errors.username
              }
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder='Password'
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
            <div className='error'>
              {
                formik.touched.password && formik.errors.password
              }
            </div>
          </div>
          <div className="row mb-4">

            <div className="col">
              <a href="#!">Quên mật khẩu?</a>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 background-primary text-dark"
          >
            Đăng nhập
          </button>
          <div className="col d-flex justify-content-center">
            Bạn đã có tài khoản?{" "}
            <Link to="/register" className="ml-1">
              Đăng ký ngay
            </Link>
          </div>
        </form>
      </Row>
    </Container>
  );
};

export default LoginPage;
