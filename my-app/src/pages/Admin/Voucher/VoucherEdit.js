import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const VoucherEdit = () => {
    const navigate = useNavigate();
    const [voucher, setVoucher] = useState({});
    const { id } = useParams();

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
        axios.put(`https://localhost:7126/api/Vouchers/${id}`, voucher)
           .then(() => navigate('/Vouchers'))
    }
    useEffect(() => {
        axios.get(`https://localhost:7126/api/Vouchers/${id}`)
            .then(res => setVoucher(res.data));
      }, []);
    return (  
        <>
            <Form className="col-md-3">
                <FormGroup className="mb-3">
                    <FormLabel>VoucherCode: </FormLabel>
                    <FormControl name="voucherCode" type="text"  onChange={handleChange} value={voucher.voucherCode}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Discound: </FormLabel>
                    <FormControl name="discound" type="text"  onChange={handleChange} value={voucher.discound}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>StartTime: </FormLabel>
                    <FormControl
                        name="startTime"
                        type="date"
                        format="yyyy-mm-dd"
                        value={voucher.startTime}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>EndDate: </FormLabel>
                    <FormControl
                        name="endDate"
                        type="date"
                        format="yyyy-mm-dd"
                        value={voucher.endDate}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Description: </FormLabel>
                    <FormControl name="description" type="text"  onChange={handleChange} value={voucher.description}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck} checked={voucher.status}/>
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faCheck}/> Cập nhật
                </Button>
            </Form>
        </>
    );
}
 
export default VoucherEdit;