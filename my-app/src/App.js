import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Product from "./pages/Admin/Product/Index"
import ProductCreate from "./pages/Admin/Product/ProductCreate"
import ProductEdit from "./pages/Admin/Product/ProductEdit"
import Phone from "./pages/Admin/Phone/Index"
import PhoneCreate from "./pages/Admin/Phone/PhoneCreate"
import PhoneEdit from "./pages/Admin/Phone/PhoneEdit"

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    
                </Route>
                <Route path="/Products" element={<Product />}/>
                <Route path="/Products/Create" element={<ProductCreate />}/>
                <Route path="/Products/Edit/:id" element={<ProductEdit />}/>
                <Route path="/Phones" element={<Phone />}/>
                <Route path="/Phones/Create" element={<PhoneCreate />}/>
                <Route path="/Phones/Edit/:id" element={<PhoneEdit />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App