import React, { useEffect, useState } from 'react'
import { Button, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Modal } from 'react-bootstrap';
import axiosClient from '../../../components/axiosClient/axiosClient';

const ModelAddNewProduct = (props) => {
    const { handleClose, show } = props;
    const [product, setProduct] = useState([]);
    const [phone, setPhone] = useState([]);

    useEffect(() => {
        axiosClient.get(`/Phones`)
            .then(res => setPhone(res.data));
    }, []);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setProduct(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/Products`, product)
            .then(res => {
                // Giả sử res.data chứa dữ liệu voucher mới được thêm vào
                setProduct(res.data);

                // Đóng modal sau khi thêm voucher thành công
                handleClose();
            })
            .catch(error => {
                // Xử lý lỗi nếu cần thiết
                console.error("Lỗi khi thêm voucher:", error);
            });
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form onSubmit={handleSubmit}>
                            <FormGroup className="mb-3">
                                <FormLabel>ROM: </FormLabel>
                                <FormControl name="rom" type="text" onChange={handleChange}></FormControl>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Quantity: </FormLabel>
                                <FormControl name="quantity" type="text" onChange={handleChange}></FormControl>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Price: </FormLabel>
                                <FormControl name="price" type="text" onChange={handleChange}></FormControl>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Color: </FormLabel>
                                <FormControl name="color" type="text" onChange={handleChange}></FormControl>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>PhoneId: </FormLabel>
                                <FormSelect name="phoneId" onChange={handleChange}>
                                    <option> None </option>
                                    {
                                        phone.map(item => {
                                            return (
                                                <option value={item.id} >{item.name} </option>
                                            )
                                        })
                                    }
                                </FormSelect>
                            </FormGroup>

                            <FormGroup className="mb-3">
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
        </>
    )
}

export default ModelAddNewProduct