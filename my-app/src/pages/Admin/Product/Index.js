import { faInfo, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [phone, setPhone] = useState([]);
    const [brand, setBrand] = useState([]);
    const [productType, setProductType] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedPhone, setSelectedPhone] = useState({});
    const [selectedBrand, setSelectedBrand] = useState({});
    const [selectedProductType, setSelectedProductType] = useState({});
    var i = 1

    const handleClosePhone = () => setShowPhone(false);
    const handleShowPhone = (id,brandId,productTypeId) => {
        setSelectedPhone(phone.find(a => a.id == id));
        setSelectedBrand(brand.find(a => a.id == brandId));
        setSelectedProductType(productType.find(a => a.id == productTypeId));
        setShowPhone(true);
    }
    
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedProduct(product.find(a => a.id == id));
        setShowDelete(true);
    }
    const handleDelete = (id) =>{
        axios.delete(`https://localhost:7126/api/Products/${id}`)
        setShowDelete(false)
    }

    useEffect(() => {
        axios.get(`https://localhost:7126/api/Products`)
            .then(res => setProduct(res.data));
      }, [product]);

    useEffect(() => {
        axios.get(`https://localhost:7126/api/Phones`)
            .then(res => setPhone(res.data));
    }, []);

    useEffect(() => {
        axios.get(`https://localhost:7126/api/ProductTypes`)
            .then(res => setProductType(res.data));
    }, []);
    
    useEffect(() => {
        axios.get(`https://localhost:7126/api/Brands`)
            .then(res => setBrand(res.data));
    }, []);
    return ( 
        <>
            <div className="container">
                <Link to={`/products/create`} className="btn btn-success"><FontAwesomeIcon icon={faPlus}/> Create</Link>
                <Table className="table table-light">
                    <thead className="table table-dark">
                        <tr>
                            <th>STT</th>
                            <th>Phone</th>
                            <th>ROM</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Status</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map(item =>{
                                return(
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{item.phone.name}</td>
                                        <td>{item.rom}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}$</td>
                                        <td>{item.color}</td>
                                        <td>{item.status?"Hoạt động":"Ngưng hoạt động"}</td>
                                        <td>
                                            <Button variant="success" onClick={() => handleShowPhone(item.phone.id,item.phone.brandId,item.phone.productTypeId)}>
                                                <FontAwesomeIcon icon={faInfo} />
                                            </Button>
                                            <Button variant="warning">
                                                <Link to={`/products/edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare} style={{color:"black"}}/></Link>
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
                    <Button variant="danger" onClick={() => handleDelete(selectedProduct.id)}>
                        Ok
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showPhone} onHide={handleClosePhone} fullscreen={true}>
                    <Modal.Header closeButton>
                    <Modal.Title>Phone</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={3}>
                                <dl>
                                    <dt>Name: </dt>
                                    <dd>{selectedPhone.name}</dd>
                                    <dt>Screen: </dt>
                                    <dd>{selectedPhone.screen}</dd>
                                    <dt>CPU: </dt>
                                    <dd>{selectedPhone.cpu}</dd>
                                </dl>
                            </Col>
                            <Col  md={3}>
                                <dl>
                                    <dt>Pin: </dt>
                                    <dd>{selectedPhone.pin}</dd>
                                    <dt>SIM: </dt>
                                    <dd>{selectedPhone.sim}</dd>
                                    <dt>Cam Trước: </dt>
                                    <dd>{selectedPhone.camTruoc}</dd>
                                </dl>
                            </Col>
                            <Col  md={3}>
                                <dl>
                                    <dt>Cam Sau: </dt>
                                    <dd>{selectedPhone.camSau}</dd>
                                    <dt>Hệ Điều Hành: </dt>
                                    <dd>{selectedPhone.heDieuHanh}</dd>
                                    <dt>Description: </dt>
                                    <dd>{selectedPhone.description}</dd>
                                </dl>
                            </Col>
                            <Col  md={3}>
                                <dl>
                                    <dt>AverageRating: </dt>
                                    <dd>{selectedPhone.averageRating}</dd>
                                    <dt>Brand: </dt>
                                    <dd>{selectedBrand.name}</dd>
                                    <dt>ProductType: </dt>
                                    <dd>{selectedProductType.name}</dd>
                                </dl>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePhone}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>            
            </div>
        </>
     );
}
 
export default Product;