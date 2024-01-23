import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../../components/axiosClient/axiosClient';
import { Button, FormCheck, FormControl, FormGroup, FormLabel, Modal } from 'react-bootstrap';

const ModelAddNewPaymentMethod = (props) => {

    const { handleClose, show } = props;
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPaymentMethod(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setPaymentMethod(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/PaymentMethods`, paymentMethod)
            .then(res => {
                // Giả sử res.data chứa dữ liệu voucher mới được thêm vào
                setPaymentMethod(res.data);

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
                    <Modal.Title>Add new payment Method</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form onSubmit={handleSubmit}>
                            <FormGroup className="md-3">
                                <FormLabel>Name: </FormLabel>
                                <FormControl name="name" type="text" onChange={handleChange}></FormControl>
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
        </>
    )
}

export default ModelAddNewPaymentMethod