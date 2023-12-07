import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosClient from '../../../components/axiosClient/axiosClient';

const User = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axiosClient.get(`/Users`).then(res=>setUser(res.data));
    }, [user])

    const [showDelete, setShowDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedUser(user.find(a => a.id === id));
        setShowDelete(true);
    }
    const handleDelete = (id) => {
        axiosClient.delete(`/Users/${id}`)
        setShowDelete(false)
    }

    let i = 1;

    return (
        <>
            <Link to={`/user/create`} className="btn btn-success"><FontAwesomeIcon icon={faPlus} /> Create</Link>
            <Table>
                <thead className='table-dark'>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Phone</th>
                        <th>Địa chỉ</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(item =>
                            <tr>
                                <td>{i++}</td>
                                <td>{item.userName}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.status ? "Hoạt động" : "Không hoạt động"}</td>
                                <td>
                                    <Button variant="warning">
                                        <Link to={`/user/edit/${item.id}`}><FontAwesomeIcon icon={faPenToSquare} style={{ color: "black" }} /></Link>
                                    </Button>
                                    <Button variant="danger" onClick={() => handleShowDelete(item.id)}>
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Body>
                    Do you want delete?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => handleDelete(selectedUser.id)}>
                        Ok
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default User