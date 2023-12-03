import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentMethodCreate = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState();

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
        axios.post(`https://localhost:7126/api/PaymentMethods`,paymentMethod)
        .then(() => navigate('/PaymentMethods'))
    }
    return (  
        <>
            <Form className="col-md-3">
                <FormGroup className="md-3">
                    <FormLabel>Name: </FormLabel>
                    <FormControl name="name" type="text" onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck}/>
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus}/> Thêm
                </Button>
            </Form>
        </>
    );
}
 
export default PaymentMethodCreate;