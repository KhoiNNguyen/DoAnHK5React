import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const PaymentMethodEdit = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState({});
    const {id} = useParams();

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setPaymentMethod(prev => ({...prev, [name]: value}));
    }
    const handleCheck = (e) =>{
        let name = e.target.name;
        let value = e.target.checked;
        setPaymentMethod(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`https://localhost:7126/api/PaymentMethods/${id}`,paymentMethod)
        .then(() => navigate('/PaymentMethods'))
    }
    useEffect(()=>{
        axios.get(`https://localhost:7126/api/PaymentMethods/${id}`)
            .then(res => setPaymentMethod(res.data))
    },[])
    return (  
        <>
            <Form className="col-md-3">
                <FormGroup className="md-3">
                    <FormLabel>Name: </FormLabel>
                    <FormControl name="name" type="text" onChange={handleChange} value={paymentMethod.name}></FormControl>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck} checked={paymentMethod.status}/>
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus}/> Cập nhật
                </Button>
            </Form>
        </>
    );
}
 
export default PaymentMethodEdit;