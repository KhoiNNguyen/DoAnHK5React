import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const PhoneEdit = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState({});
    const [brand, setBrand] = useState([]);
    const [productType, setProductType] = useState([]);
    const { id } = useParams();

    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value
        setPhone(prev => ({...prev, [name]: value}));
    }
    const handleCheck = (e) =>{
        let name = e.target.name
        let value = e.target.checked
        setPhone(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`https://localhost:7126/api/Phones/${id}`, phone)
           .then(() => navigate('/Phones'))
    }
    useEffect(()=>{
        axios.get(`https://localhost:7126/api/Phones/${id}`)
            .then(res => setPhone(res.data))
    },[])
    useEffect(()=>{
        axios.get(`https://localhost:7126/api/Brands`)
            .then(res => setBrand(res.data))
    },[])
    useEffect(()=>{
        axios.get(`https://localhost:7126/api/ProductTypes`)
            .then(res => setProductType(res.data))
    },[])
    return (  
        <>
            <Form className="col-md-3">
                <FormGroup className="mb-3">
                    <FormLabel>Name: </FormLabel>
                    <FormControl name="name" type="text"  onChange={handleChange} value={phone.name}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Screen: </FormLabel>
                    <FormControl name="screen" type="text"  onChange={handleChange} value={phone.screen}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>CPU: </FormLabel>
                    <FormControl name="cpu" type="text"  onChange={handleChange} value={phone.cpu}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Pin: </FormLabel>
                    <FormControl name="pin" type="text"  onChange={handleChange} value={phone.pin}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>SIM: </FormLabel>
                    <FormControl name="sim" type="text"  onChange={handleChange} value={phone.sim}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Cam Trước: </FormLabel>
                    <FormControl name="camTruoc" type="text"  onChange={handleChange} value={phone.camTruoc}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Cam Sau: </FormLabel>
                    <FormControl name="camSau" type="text"  onChange={handleChange} value={phone.camSau}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Hệ Điều Hành: </FormLabel>
                    <FormControl name="heDieuHanh" type="text"  onChange={handleChange} value={phone.heDieuHanh}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Description: </FormLabel>
                    <FormControl name="description" type="text"  onChange={handleChange} value={phone.description}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>AverageRating: </FormLabel>
                    <FormControl name="averageRating" type="text"  onChange={handleChange} value={phone.averageRating}></FormControl>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Brand: </FormLabel>
                    {/* <FormControl name="brandId" type="text"  onChange={handleChange}></FormControl> */}

                    <FormSelect  name="brandId" onChange={handleChange} value={phone.brandId}>
                        <option> None </option>
                        {
                            brand.map(item =>{
                                return(
                                    <option value={item.id} >{item.name} </option>
                                )
                            })
                        }
                    </FormSelect>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>ProductType: </FormLabel>
                    {/* <FormControl name="productTypeId" type="text"  onChange={handleChange}></FormControl> */}

                    <FormSelect name="productTypeId" onChange={handleChange} value={phone.productTypeId}>
                    <option> None </option>
                    {
                        productType.map(item => {
                            return(
                                <option value={item.id}>{item.name}</option>
                            )
                         })
                    }
                    </FormSelect>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck} checked={phone.status}/>
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faCheck}/> Cập Nhật
                </Button>
            </Form>
        </>
    );
}
 
export default PhoneEdit;