import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../../components/axiosClient/axiosClient';
import { toast } from 'react-toastify';
import { Button, FormCheck, FormGroup, FormLabel, FormSelect, Modal } from 'react-bootstrap';

const ModelEditProductVoucher = (props) => {
    const { handleClose, show } = props;
    const navigate = useNavigate();
    const [productVoucher, setProductVoucher] = useState();
    const [product, setProduct] = useState([]);
    const [voucher, setVoucher] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProductVoucher(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setProductVoucher(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/ProductVouchers`, productVoucher)
            .then(() => navigate('/admin'))
        toast.success('A product voucher create success!')

    }

    useEffect(() => {
        axiosClient.get(`/Products`)
            .then(res => setProduct(res.data));
    }, []);

    useEffect(() => {
        axiosClient.get(`/Vouchers`)
            .then(res => setVoucher(res.data));
    }, []);
    return (
        <div>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit a product voucher</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form onSubmit={handleSubmit}>
                            <FormGroup className="md-3">
                                <FormLabel>Product </FormLabel>
                                <FormSelect name="productId" onChange={handleChange}>
                                    <option> None </option>
                                    {
                                        product.map(item => {
                                            return (
                                                <option value={item.id} >{item.phone.name} </option>
                                            )
                                        })
                                    }
                                </FormSelect>
                            </FormGroup>
                            <FormGroup className="md-3">
                                <FormLabel>Voucher </FormLabel>
                                <FormSelect name="voucherId" onChange={handleChange}>
                                    <option> None </option>
                                    {
                                        voucher.map(item => {
                                            return (
                                                <option value={item.id} >{item.voucherCode} </option>
                                            )
                                        })
                                    }
                                </FormSelect>
                            </FormGroup>
                            <FormGroup className="md-3">
                                <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck} />
                            </FormGroup>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModelEditProductVoucher