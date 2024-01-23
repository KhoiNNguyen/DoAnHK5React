import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../../components/axiosClient/axiosClient';

const UserEdit = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const { id } = useParams();

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
        axiosClient.put(`/Users/${id}`, user)
            .then(() => navigate('/admin/user'))
    }
    useEffect(() => {
        axiosClient.get(`/Users/${id}`)
            .then(res => setUser(res.data))
    }, [])

    return (
        <>
            <Form className="col-md-3">
                <FormGroup className="md-3">
                    <FormLabel>User Name: </FormLabel>
                    <FormControl name="name" type="text" onChange={handleChange} value={user.userName}></FormControl>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormLabel>Phone: </FormLabel>
                    <FormControl name="phone" type="text" onChange={handleChange} value={user.phone}></FormControl>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormLabel>address: </FormLabel>
                    <FormControl name="address" type="text" onChange={handleChange} value={user.address}></FormControl>
                </FormGroup>
                <FormGroup className="md-3">
                    <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck} checked={user.status}/>
                </FormGroup>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus}/> Cập nhật
                </Button>
            </Form>
        </>
    )
}

export default UserEdit