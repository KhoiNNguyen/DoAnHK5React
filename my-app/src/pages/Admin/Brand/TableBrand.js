import React, { useEffect, useState } from 'react'
import axiosClient from '../../../components/axiosClient/axiosClient';
import { Table } from 'react-bootstrap';

function TableBrand() {
    const [brand, setBrand] = useState([]);

    useEffect(()=>{
        axiosClient.get(`/Brands`)
        .then(res => setBrand(res.data))
    },[brand])
  return (
    <>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                {
                        brand.map((item, index) =>
                            <tr key={`Users-${index}`}>
                                <td>{index++}</td>
                                <td style={{width: "200px"}}>
                                        <img alt='' src={`https://localhost:7126/images/brand/${item.image}`} style={{width: "100px",height: "100px"}}/>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.status?"Hoạt động":"Ngưng hoạt động"}</td>
                                {/* <td>
                                    <Button variant="warning">
                                        <Link to={`/user/edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare} style={{ color: "black" }} /></Link>
                                    </Button>
                                    <Button variant="danger" onClick={() => handleShowDelete(item.id)}>
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </Button>
                                </td> */}
                            </tr>
                        )
                    }
                </tbody>
            </Table>
    </>
  )
}

export default TableBrand