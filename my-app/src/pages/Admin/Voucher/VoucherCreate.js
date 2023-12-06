import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../components/axiosClient/axiosClient";

const VoucherCreate = () => {
    const navigate = useNavigate();
    const [voucher, setVoucher] = useState({});

    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value
        setVoucher(prev => ({...prev, [name]: value}));
    }
    const handleCheck = (e) =>{
        let name = e.target.name
        let value = e.target.checked
        setVoucher(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axiosClient.post(`/Vouchers`, voucher)
           .then(() => navigate('/Vouchers'))
    }
    return (  
        <>
            <Form className="col-md-3">
                <FormGroup className="mb-3">
                    <FormLabel>VoucherCode: </FormLabel>
                    <FormControl name="voucherCode" type="text"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Discound: </FormLabel>
                    <FormControl name="discound" type="text"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>StartTime: </FormLabel>
                    <FormControl name="startTime" type="date" format="yyyy-mm-dd"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>EndDate: </FormLabel>
                    <FormControl name="endDate" type="date" format="yyyy-mm-dd"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Description: </FormLabel>
                    <FormControl name="description" type="text"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck}/>
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus}/> Thêm
                </Button>
            </Form>
        </>
    );
}
 
export default VoucherCreate;