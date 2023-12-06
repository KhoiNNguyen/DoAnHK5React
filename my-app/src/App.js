import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Product from "./pages/Admin/Product/Index"
import ProductCreate from "./pages/Admin/Product/ProductCreate"
import ProductEdit from "./pages/Admin/Product/ProductEdit"
import Phone from "./pages/Admin/Phone/Index"
import PhoneCreate from "./pages/Admin/Phone/PhoneCreate"
import PhoneEdit from "./pages/Admin/Phone/PhoneEdit"
import Brand from "./pages/Admin/Brand/Index"
import BrandCreate from "./pages/Admin/Brand/BrandCreate"
import Voucher from "./pages/Admin/Voucher/Index"
import VoucherCreate from "./pages/Admin/Voucher/VoucherCreate"
import VoucherEdit from "./pages/Admin/Voucher/VoucherEdit"
import PaymentMethod from "./pages/Admin/PaymentMethod/Index"
import PaymentMethodCreate from "./pages/Admin/PaymentMethod/PaymentMethodCreate"
import PaymentMethodEdit from "./pages/Admin/PaymentMethod/PaymentMethodEdit"
import ProductVoucher from "./pages/Admin/ProductVoucher/Index"
import ProductVoucherCreate from "./pages/Admin/ProductVoucher/ProductVoucherCreate"
import ProductVoucherEdit from "./pages/Admin/ProductVoucher/ProductVoucherEdit"
import Invoice from "./pages/Admin/Invoice"
import User from "./pages/Admin/user"
import InvoiceCreate from "./pages/Admin/Invoice/InvoiceCreate"
import UserCreate from "./pages/Admin/user/userCreate"
import UserEdit from "./pages/Admin/user/userEdit"
import InvoiceEdit from "./pages/Admin/Invoice/InvoiceEdit"

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
                <Route path="/Brands" element={<Brand />}/>
                <Route path="/Brands/Create" element={<BrandCreate />}/>
                <Route path="/Vouchers" element={<Voucher />}/>
                <Route path="/Vouchers/Create" element={<VoucherCreate />}/>
                <Route path="/Vouchers/Edit/:id" element={<VoucherEdit />}/>
                <Route path="/PaymentMethods" element={<PaymentMethod />}/>
                <Route path="/PaymentMethods/Create" element={<PaymentMethodCreate />}/>
                <Route path="/PaymentMethods/Edit/:id" element={<PaymentMethodEdit />}/>
                <Route path="/ProductVouchers" element={<ProductVoucher />}/>
                <Route path="/ProductVouchers/Create" element={<ProductVoucherCreate />}/>
                <Route path="/ProductVouchers/Edit/:id" element={<ProductVoucherEdit />}/>
                
                <Route path="/user" element={<User />}/>
                <Route path="/user/create" element={<UserCreate />}/>
                <Route path="/user/edit/:id" element={<UserEdit />}/>


                <Route path="/invoices" element={<Invoice />}/>
                <Route path="/invoices/create" element={<InvoiceCreate/>}/>
                <Route path="/invoices/edit/:id" element={<InvoiceEdit/>}/>


                
            </Routes>
        </BrowserRouter>
    )
}
export default App