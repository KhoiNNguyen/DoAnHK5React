import Header from "../layouts/Header";
import { Outlet  } from "react-router-dom";
import { ToastContainer } from "react-toastify";


function LayoutHeader() {
    return ( <>
    <Header />
    <Outlet />
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
    </> );
}

export default LayoutHeader;