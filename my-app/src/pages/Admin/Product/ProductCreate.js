import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCreate = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [phone, setPhone] = useState([]);

    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value
        setProduct(prev => ({...prev, [name]: value}));
    }
    const handleCheck = (e) =>{
        let name = e.target.name
        let value = e.target.checked
        setProduct(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`https://localhost:7126/api/Products`, product)
           .then(() => navigate('/Products'))
    }
    useEffect(() => {
        axios.get(`https://localhost:7126/api/Phones`)
            .then(res => setPhone(res.data));
      }, []);

    // date time
    
      
    return (
        <>
            <Form className="col-md-3">
                <FormGroup className="mb-3">
                    <FormLabel>ROM: </FormLabel>
                    <FormControl name="rom" type="text"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Quantity: </FormLabel>
                    <FormControl name="quantity" type="text"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Price: </FormLabel>
                    <FormControl name="price" type="text"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Color: </FormLabel>
                    <FormControl name="color" type="text"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>PhoneId: </FormLabel>
                    <FormSelect  name="phoneId" onChange={handleChange}>
                    <option> None </option>
                    {
                        phone.map(item =>{
                            return(
                                <option value={item.id} >{item.name} </option>
                            )
                        })
                    }
                    </FormSelect>
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
 
export default ProductCreate;