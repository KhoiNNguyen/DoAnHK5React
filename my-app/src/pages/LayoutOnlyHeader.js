import Header from "../layouts/Header";
import { Outlet  } from "react-router-dom";

function LayoutHeader() {
    return ( <>
    <Header />
    <Outlet />
    </> );
}

export default LayoutHeader;