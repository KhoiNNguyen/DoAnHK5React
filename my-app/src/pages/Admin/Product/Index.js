import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState({});
    var i = 1

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedAccount(product.find(a => a.id == id));
        setShowDelete(true);
    }
    const handleDelete = (id) =>{
        axios.delete(`https://localhost:7126/api/Products/${id}`)
        setProduct(prev => prev.filter(item => item.id !== id));
        setShowDelete(false)
    }
    useEffect(() => {
        axios.get(`https://localhost:7126/api/Products`)
            .then(res => setProduct(res.data));
      }, []);
    return ( 
        <>
            <div className="container">
                <Link to={`/products/create`} className="btn btn-success"><FontAwesomeIcon icon={faPlus}/> Create</Link>
                <Table className="table table-light">
                    <thead className="table table-dark">
                        <tr>
                            <th>STT</th>
                            <th>ROM</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Phone</th>
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
                                        <td>{item.rom}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}$</td>
                                        <td>{item.color}</td>
                                        <td>{item.phone.name}</td>
                                        <td>{item.status?"Hoạt động":"Ngưng hoạt động"}</td>
                                        <td>
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
                    <Button variant="danger" onClick={() => handleDelete(selectedAccount.id)}>
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
 
export default Product;