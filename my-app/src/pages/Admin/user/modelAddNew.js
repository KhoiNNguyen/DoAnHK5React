import React, { useState } from 'react'
import { Button, FormCheck, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../../components/axiosClient/axiosClient';

const ModelAddNew = (props) => {

    const { handleClose, show } = props;

    const navigate = useNavigate();
    const [user, setUser] = useState({
        Username: '',
        Password: '',
        Email: '',
        Phone: '',
        Fullname: '',
        Address: ''
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser(prev => ({ ...prev, [name]: value }));
    }
    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/Users/register`, user)
            .then(() => navigate('/user'))
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input name="Username" type="text" class="form-control" onClick={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Password</label>
                                <input name="Password" type="password" className="form-control" onClick={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Email</label>
                                <input name="Email" type="email" className="form-control" onClick={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Phone</label>
                                <input name="Phone" type="tel" className="form-control" onClick={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Fullname</label>
                                <input name="Fullname" type="text" className="form-control" onClick={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Address</label>
                                <input name="Address" type="text" className="form-control" onClick={handleChange} />
                            </div>

                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModelAddNew