import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../../components/axiosClient/axiosClient";

const PaymentMethod = () => {
    var i = 1;

    const [paymentMethod, setPaymentMethod] = useState([]);

    const [showDelete, setShowDelete] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({});

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedPaymentMethod(paymentMethod.find(a => a.id === id));
        setShowDelete(true);
    }
    const handleDelete = (id) => {
        axiosClient.delete(`/PaymentMethods/${id}`)
        setShowDelete(false)
    }
    useEffect(() => {
        axiosClient.get(`/PaymentMethods`)
            .then(res => setPaymentMethod(res.data))
    }, [paymentMethod])
    return (
        <>
            <Link to={`/PaymentMethods/Create`} className="btn btn-success"><FontAwesomeIcon icon={faPlus} /> Create</Link>
            <Table className="table table-light">
                <thead className="table table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paymentMethod.map(item => {
                            return (
                                <tr>
                                    <td>{i++}</td>
                                    <td>{item.name}</td>
                                    <td>{item.status ? "Hoạt động" : "Không hoạt động"}</td>
                                    <td>
                                        <Button variant="warning">
                                            <Link to={`/PaymentMethods/Edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare} style={{ color: "black" }} /></Link>
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
                    <Button variant="danger" onClick={() => handleDelete(selectedPaymentMethod.id)}>
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

export default PaymentMethod;