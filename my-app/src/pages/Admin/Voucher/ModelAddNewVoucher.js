import React, { useState } from 'react'
import axiosClient from '../../../components/axiosClient/axiosClient';
import { Button, FormCheck, FormControl, FormGroup, FormLabel, Modal } from 'react-bootstrap';

const ModelAddNewVoucher = (props) => {

    const { handleClose, show } = props;
    const [voucher, setVoucher] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setVoucher(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setVoucher(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/Vouchers`, voucher)
            .then(res => {
                // Giả sử res.data chứa dữ liệu voucher mới được thêm vào
                setVoucher(res.data);

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
                    <Modal.Title>Add new voucher</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form onSubmit={handleSubmit}>
                            <FormGroup className="mb-3">
                                <FormLabel>VoucherCode: </FormLabel>
                                <FormControl name="voucherCode" type="text" onChange={handleChange}></FormControl>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Discound: </FormLabel>
                                <FormControl name="discound" type="text" onChange={handleChange}></FormControl>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>StartTime: </FormLabel>
                                <FormControl name="startTime" type="date" format="yyyy-mm-dd" onChange={handleChange}></FormControl>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>EndDate: </FormLabel>
                                <FormControl name="endDate" type="date" format="yyyy-mm-dd" onChange={handleChange}></FormControl>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Description: </FormLabel>
                                <FormControl name="description" type="text" onChange={handleChange}></FormControl>
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

export default ModelAddNewVoucher