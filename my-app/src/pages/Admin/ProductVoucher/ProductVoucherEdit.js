import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../components/axiosClient/axiosClient";

const ProductVoucherEdit = () => {
    const navigate = useNavigate();
    const [productVoucher, setProductVoucher] = useState({});
    const [product, setProduct] = useState([]);
    const [voucher, setVoucher] = useState([]);
    const {id} = useParams();

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setProductVoucher(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axiosClient.put(`/ProductVouchers/${id}`,productVoucher)
        .then(() => navigate('/admin/productvoucher'))
    }
    useEffect(()=>{
        axiosClient.get(`/ProductVouchers/${id}`)
            .then(res => setProductVoucher(res.data))
    },[])
    useEffect(() => {
        axiosClient.get(`/Products`)
            .then(res => setProduct(res.data));
      }, []);
    useEffect(() => {
        axiosClient.get(`/Vouchers`)
            .then(res => setVoucher(res.data));
    }, []);
    return (  
        <>
        <div className='my-3 add-new'>
            <span>Edit product voucher</span>
        </div>
            <Form className="col-md-5">
                <FormGroup className="md-3 mt-2">
                    <FormLabel>Product</FormLabel>
                    <FormSelect  name="productId" onChange={handleChange} value={productVoucher.productId}>
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
                    <FormLabel>Voucher</FormLabel>
                    <FormSelect  name="voucherId" onChange={handleChange} value={productVoucher.voucherId}>
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
                    <FontAwesomeIcon icon={faCheck}/> Cập nhật
                </Button>
            </Form>
        </>
    );
}
 
export default ProductVoucherEdit;