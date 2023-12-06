import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../components/axiosClient/axiosClient";

const BrandCreate = () => {
    const navigate = useNavigate();
    const [brand, setBrand] = useState({});

    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value
        setBrand(prev => ({...prev, [name]: value}));
    }
    const handleCheck = (e) =>{
        let name = e.target.name
        let value = e.target.checked
        setBrand(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axiosClient.post(`/Brands`, brand)
           .then(() => navigate('/Brands'))
    }
    return (  
        <>
            <Form className="col-md-3">
                <FormGroup className="mb-3">
                    <FormLabel>Name: </FormLabel>
                    <FormControl name="name" type="text"  onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Image: </FormLabel>
                    <FormControl name="image" type="file" onChange={handleChange}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormCheck name="status" type="switch" label="Hoạt động" onChange={handleCheck}/>
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus}/> Thêm
                </Button>
            </Form>
        </>
    );
}
 
export default BrandCreate;