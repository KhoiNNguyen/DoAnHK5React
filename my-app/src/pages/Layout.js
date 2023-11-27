import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { Outlet  } from "react-router-dom";

function Layout() {
    return (<>
    <Header />
    <Outlet />
    <Footer />
    </>  );
}

export default Layout;