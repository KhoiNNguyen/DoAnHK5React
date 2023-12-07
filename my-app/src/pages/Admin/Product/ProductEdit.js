import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axiosClient from "../../../components/axiosClient/axiosClient";

const ProductEdit = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [phone, setPhone] = useState([]);
    const { id } = useParams();

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
        axiosClient.put(`/Products/${id}`, product)
           .then(() => navigate('/Products'))
    }
    useEffect(() => {
        axiosClient.get(`/Products/${id}`)
            .then(res => setProduct(res.data));
      }, []);
    useEffect(() => {
        axiosClient.get(`/Phones`)
            .then(res => setPhone(res.data));
      }, []);
    return (
        <>
            <Form className="col-md-3">
                <FormGroup className="mb-3">
                    <FormLabel>ROM: </FormLabel>
                    <FormControl name="rom" type="text"  onChange={handleChange} value={product.rom}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Quantity: </FormLabel>
                    <FormControl name="quantity" type="text"  onChange={handleChange} value={product.quantity}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Price: </FormLabel>
                    <FormControl name="price" type="text"  onChange={handleChange} value={product.price}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Color: </FormLabel>
                    <FormControl name="color" type="text"  onChange={handleChange} value={product.color}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>PhoneId: </FormLabel>
                    {/* <FormControl name="phoneId" type="text"  onChange={handleChange}></FormControl> */}

                    <FormSelect className="mb-3" name="phoneId" onChange={handleChange} value={product.phoneId}>
                    {
                        phone.map(item =>{
                            return(
                                <option value={item.id}>{item.name}</option>
                            )
                        })
                    }
                    </FormSelect>
                </FormGroup>
                
                <FormGroup className="mb-3">
                    <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck} checked={product.status}/>
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faCheck}/> Cập nhật
                </Button>
            </Form>
        </>
    );
}
 
export default ProductEdit;