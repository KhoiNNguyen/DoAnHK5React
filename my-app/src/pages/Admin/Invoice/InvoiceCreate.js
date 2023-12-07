import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../components/axiosClient/axiosClient";


const InvoiceCreate = () => {

    const navigate = useNavigate();
    const [Invoice, setInvoice] = useState({});
    const [paymentMethod, setPaymentMethod] = useState([]);
    const [user, setUser] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInvoice(prev => ({ ...prev, [name]: value }));
    }
    const handleCheck = (e) => {
        let name = e.target.name
        let value = e.target.checked
        setInvoice(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/Invoices`, Invoice)
            .then(() => navigate('/invoices'))
    }
    useEffect(() => {
        axiosClient.get(`/PaymentMethods`)
            .then(res => setPaymentMethod(res.data));
    }, []);

    useEffect(() => {
        axiosClient.get(`/Users`)
            .then(res => setUser(res.data));
    }, []);


    return (
        <>
            <Form className="col-md-3">
                <FormGroup className="mb-3">
                    <FormLabel>Khách hàng: </FormLabel>
                    {/* <FormControl name="userId"  type="text" onChange={handleChange} ></FormControl> */}
                    <FormSelect name="userId" onChange={handleChange}>
                        <option> None </option>
                        {
                            user.map(item => {
                                return (
                                    <option value={item.id} >{item.userName} </option>
                                )
                            })
                        }
                    </FormSelect>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Hình thức thanh toán: </FormLabel>
                    {/* <FormControl name="paymentMethodId"  type="text" onChange={handleChange} ></FormControl> */}
                    <FormSelect name="paymentMethodId" onChange={handleChange}>
                        <option> None </option>
                        {
                            paymentMethod.map(item => {
                                return (
                                    <option value={item.id} >{item.name} </option>
                                )
                            })
                        }
                    </FormSelect>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormLabel>Ngày lập hóa đơn: </FormLabel>
                    <FormControl name="invoiceDate"  type="date" format="yyyy-MM-dd" onChange={handleChange} ></FormControl>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormLabel>Địa chỉ giao hàng: </FormLabel>
                    <FormControl name="addressShip" type="text" onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormLabel>Discount: </FormLabel>
                    <FormControl name="discoundTotal" type="number" onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormLabel>Tổng tiền: </FormLabel>
                    <FormControl name="total" type="number" min="1000" onChange={handleChange}></FormControl>
                </FormGroup>

                <FormGroup className="md-3">
                    <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck} />
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus} /> Thêm
                </Button>
            </Form>
        </>
    )
}

export default InvoiceCreate