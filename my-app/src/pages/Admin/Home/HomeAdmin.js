import HeaderAdmin from './Components/Header/header'
import { Container } from 'react-bootstrap'
import './HomeAdmin.css'
import TableProductVoucher from '../ProductVoucher/TableProductVoucher'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Outlet, Route, Routes } from 'react-router-dom'
import IndexAdmin from './Components/Index/IndexAdmin'
// import TableUser from '../user/tableUser'

const HomeAdmin = () => {



  return (
    <>

      <div className='admin-container'>
        <Container>
          <HeaderAdmin />
          <Outlet />
        </Container>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default HomeAdmin