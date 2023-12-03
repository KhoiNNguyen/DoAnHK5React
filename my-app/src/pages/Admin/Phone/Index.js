import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Phone = () => {
    const [phone, setPhone] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedPhone, setSelectedPhone] = useState({});

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedPhone(phone.find(a => a.id == id));
        setShowDelete(true);
    }
    useEffect(() => {
        axios.get(`https://localhost:7126/api/Phones`)
        .then(res => setPhone(res.data));
    },[phone])
    const handleDelete = (id) =>{
        axios.delete(`https://localhost:7126/api/Phones/${id}`)
        setShowDelete(false)
    }
    return ( 
        <>
            <div className="container">
                <Link to={`/Phones/Create`} className="btn btn-success"><FontAwesomeIcon icon={faPlus}/> Create</Link>
                <Row>
                    {
                        phone.map(item => {
                            return(
                                <>
                                    <div className="border pe-5" style={{height: "260px"}}>
                                    <Col md={3} >
                                        <dl>
                                            <dt>Name: </dt>
                                            <dd>{item.name}</dd>
                                            <dt>Screen: </dt>
                                            <dd>{item.screen}</dd>
                                            <dt>CPU: </dt>
                                            <dd>{item.cpu}</dd>
                                            <dt>Pin: </dt>
                                            <dd>{item.pin}</dd>
                                        </dl>
                                    </Col>
                                    <Col  md={3}>
                                        <dl>
                                            <dt>SIM: </dt>
                                            <dd>{item.sim}</dd>
                                            <dt>Cam Trước: </dt>
                                            <dd>{item.camTruoc}</dd>
                                            <dt>Cam Sau: </dt>
                                            <dd>{item.camSau}</dd>
                                            <dt>Hệ Điều Hành: </dt>
                                            <dd>{item.heDieuHanh}</dd>
                                        </dl>
                                    </Col>
                                    <Col  md={3}>
                                        <dl>
                                            <dt>Description: </dt>
                                            <dd>{item.description}</dd>
                                            <dt>AverageRating: </dt>
                                            <dd>{item.averageRating}</dd>
                                            <dt>Brand: </dt>
                                            <dd>{item.brand.name}</dd>
                                            <dt>ProductType: </dt>
                                            <dd>{item.productType.name}</dd>
                                        </dl>
                                    </Col>
                                    <Col  md={3}>
                                        <dl>
                                            <dt>Status: </dt>
                                            <dd>{item.status?"Hoạt động":"Ngưng hoạt động"}</dd>
                                            <dt>Function: </dt>
                                            <dd>
                                                <Button variant="warning">
                                                    <Link to={`/Phones/Edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare} style={{color:"black"}}/></Link>
                                                </Button>
                                                <Button variant="danger" onClick={() => handleShowDelete(item.id)}>
                                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                                </Button>
                                            </dd>
                                        </dl>
                                    </Col>
                                    </div>
                                </>
                            )
                        })
                    }   
                </Row>
                <Modal show={showDelete} onHide={handleCloseDelete}>
                    <Modal.Body>
                        Do you want delete?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={() => handleDelete(selectedPhone.id)}>
                        Ok
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
     );
}
 
export default Phone;