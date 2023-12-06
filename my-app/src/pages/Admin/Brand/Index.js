import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../../components/axiosClient/axiosClient";

const Brand = () => {
    const [brand, setBrand] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState({});

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedBrand(brand.find(a => a.id == id));
        setShowDelete(true);
    }
    const handleDelete = (id) =>{
        axiosClient.delete(`/Brands/${id}`)
        setShowDelete(false)
    }
    useEffect(()=>{
        axiosClient.get(`/Brands`)
        .then(res => setBrand(res.data))
    },[brand])
    return (  
        <>
            <div className="container"> 
            <Link to={`/Brands/Create`} className="btn btn-success"><FontAwesomeIcon icon={faPlus}/> Create</Link>
            <Table className="table table-light">
                <thead className="table table-dark">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        brand.map(item => {
                            return(
                                <tr>
                                    <td style={{width: "200px"}}>
                                        <img src={`https://localhost:7126/images/brand/${item.image}`} style={{width: "100px",height: "100px"}}/>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.status?"Hoạt động":"Ngưng hoạt động"}</td>
                                    <td>
                                            <Button variant="warning">
                                                <Link to={`/Phones/Edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare} style={{color:"black"}}/></Link>
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
                    <Button variant="danger" onClick={() => handleDelete(selectedBrand.id)}>
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
 
export default Brand;