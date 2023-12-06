import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../../components/axiosClient/axiosClient";

const ProductVoucher = () => {
    var i = 1
    const [productVoucher, setProductVoucher] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedProductVoucher, setSelectedProductVoucher] = useState({});

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedProductVoucher(productVoucher.find(a => a.id == id));
        setShowDelete(true);
    }
    const handleDelete = (id) =>{
        axiosClient.delete(`/ProductVouchers/${id}`)
        setShowDelete(false)
    }
    useEffect(() => {
        axiosClient.get(`/ProductVouchers`)
        .then(res => setProductVoucher(res.data))
    },[productVoucher])
    return (  
        <>
            <Link to={`/ProductVouchers/Create`} className="btn btn-success"><FontAwesomeIcon icon={faPlus}/> Create</Link>
            <Table className="table table-light">
                <thead className="table table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Product</th>
                        <th>Voucher</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productVoucher.map(item => {
                            return(
                                <tr>
                                    <td>{i++}</td>
                                    <td>{item.product.id}</td>
                                    <td>{item.voucher.voucherCode}</td>
                                    <td>
                                        <Button variant="warning">
                                            <Link to={`/ProductVouchers/Edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare} style={{color:"black"}}/></Link>
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
                <Button variant="danger" onClick={() => handleDelete(selectedProductVoucher.id)}>
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
 
export default ProductVoucher;