import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../../components/axiosClient/axiosClient";


const Invoice = () => {
    var i = 1;

    const [Invoice, setInvoice] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState([]);
    const [user, setUser] = useState([]);
    
    const [showDelete, setShowDelete] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState({});

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedInvoice(Invoice.find(a => a.id == id));
        setShowDelete(true);
    }
    const handleDelete = (id) =>{
        axiosClient.delete(`/Invoices/${id}`)
        setShowDelete(false)
    }
    useEffect(() => {
        axiosClient.get(`/Invoices`)
        .then(res => setInvoice(res.data))
    },[Invoice])

    useEffect(() => {
        axiosClient.get(`/PaymentMethods`)
            .then(res => setPaymentMethod(res.data));
    }, []);

    useEffect(() => {
        axiosClient.get(`/Users`)
            .then(res => setUser(res.data));
    }, []);

    const getPaymentMethodName = (paymentMethodId) => {
        const method = paymentMethod.find(method => method.id === paymentMethodId);
        return method ? method.name : 'Unknown';
    };

    const getUserName = (userId) => {
        const method = user.find(method => method.id === userId);
        return method ? method.userName : 'Unknown';
    };

    return (  
        <>
             <Link to={`/invoices/create`} className="btn btn-success"><FontAwesomeIcon icon={faPlus} /> Create</Link>
            <Table className="table table-light">
                <thead className="table table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Mã hóa đơn</th>
                        <th>Khách hàng</th>
                        <th>Ngày lập hóa đơn</th>
                        <th>Địa Chỉ Giao Hàng</th>
                        <th>Hình Thức Thanh Toán</th>
                        <th>Tổng Tiền</th>
                        <th>Trạng Thái</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Invoice.map(item => {
                            return(
                                <tr>
                                    <td>{i++}</td>
                                    <td>{item.id}</td>
                                    <td>{getUserName(item.userId)}</td>
                                    <td>{item.invoiceDate}</td>
                                    <td>{item.addressShip}</td>
                                    <td>{getPaymentMethodName(item.paymentMethodId)}</td>
                                    <td>{item.total}</td>
                                    <td>{item.status?"Hoạt động":"Không hoạt động"}</td>
                                    <td>
                                        <Button variant="warning">
                                            <Link to={`/invoices/edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare} style={{color:"black"}}/></Link>
                                        </Button>
                                        <Button variant="danger" onClick={() => handleShowDelete(item.id)}>
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Modal show={showDelete} onHide={handleCloseDelete}>
                    <Modal.Body>
                        Do you want delete?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={() => handleDelete(selectedInvoice.id)}>
                        Ok
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
        </>
    );
}
 
export default Invoice;