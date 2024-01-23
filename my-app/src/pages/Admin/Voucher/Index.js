import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../../components/axiosClient/axiosClient";
// import VoucherCreate from "./VoucherCreate";

const Voucher = () => {
    const [voucher, setVoucher] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedVoucher, setSelectedVoucher] = useState({});

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedVoucher(voucher.find(a => a.id == id));
        setShowDelete(true);
    }
    const handleDelete = (id) =>{
        axiosClient.delete(`/Vouchers/${id}`)
        setShowDelete(false)
    }
    useEffect(()=>{
        axiosClient.get(`/Vouchers`)
        .then(res => setVoucher(res.data))
    },[voucher])
    return (  
        <>
            <Link to={`/vouchers/create`} className="btn btn-success"><FontAwesomeIcon icon={faPlus}/> Create</Link>
            <Table className="table table-light">
                <thead className="table table-dark">
                    <tr>
                        <th>VoucherCode</th>
                        <th>Discound</th>
                        <th>StartTime</th>
                        <th>EndDate</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        voucher.map(item => {
                            return(
                                <tr>
                                    <td>{item.voucherCode}</td>
                                    <td>{item.discound}</td>
                                    <td>{item.startTime}</td>
                                    <td>{item.endDate}</td>
                                    <td>{item.description}</td>
                                    <td>{item.status?"Hoạt động":"Ngưng hoạt động"}</td>
                                    <td>
                                            <Button variant="warning">
                                                <Link to={`/vouchers/edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare} style={{color:"black"}}/></Link>
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
                    <Button variant="danger" onClick={() => handleDelete(selectedVoucher.id)}>
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
 
export default Voucher;