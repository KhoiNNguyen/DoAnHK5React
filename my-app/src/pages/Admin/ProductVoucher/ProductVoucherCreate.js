import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductVoucherCreate = () => {
    const navigate = useNavigate();
    const [productVoucher, setProductVoucher] = useState();
    const [product, setProduct] = useState([]);
    const [voucher, setVoucher] = useState([]);

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setProductVoucher(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`https://localhost:7126/api/ProductVouchers`,productVoucher)
        .then(() => navigate('/ProductVouchers'))
    }
    useEffect(() => {
        axios.get(`https://localhost:7126/api/Products`)
            .then(res => setProduct(res.data));
      }, []);
      useEffect(() => {
        axios.get(`https://localhost:7126/api/Vouchers`)
            .then(res => setVoucher(res.data));
      }, []);
    return (  
        <>
            <Form className="col-md-3">
                <FormGroup className="md-3">
                    <FormLabel>Product: </FormLabel>
                    <FormSelect  name="productId" onChange={handleChange}>
                        <option> None </option>
                        {
                            product.map(item =>{
                                return(
                                    <option value={item.id} >{item.phone.name} </option>
                                )
                            })
                        }
                    </FormSelect>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormLabel>Voucher: </FormLabel>
                    <FormSelect  name="voucherId" onChange={handleChange}>
                        <option> None </option>
                        {
                            voucher.map(item =>{
                                return(
                                    <option value={item.id} >{item.voucherCode} </option>
                                )
                            })
                        }
                    </FormSelect>
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus}/> Thêm
                </Button>
            </Form>
        </>
    );
}
 
export default ProductVoucherCreate;