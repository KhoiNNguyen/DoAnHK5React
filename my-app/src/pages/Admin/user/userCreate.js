import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserCreate = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

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
    axios.post(`https://localhost:7126/api/Users`, user)
      .then(() => navigate('/user'))
  }
  return (
    <>
      <Form className="col-md-3">
        <FormGroup className="md-3">
          <FormLabel>Họ tên: </FormLabel>
          <FormControl name="userName" type="text" onChange={handleChange}></FormControl>
        </FormGroup>
        <FormGroup className="md-3">
          <FormLabel>Điện thoại: </FormLabel>
          <FormControl name="phone" type="text" onChange={handleChange}></FormControl>
        </FormGroup>
        <FormGroup className="md-3">
          <FormLabel>Địa chỉ: </FormLabel>
          <FormControl name="address" type="text" onChange={handleChange}></FormControl>
        </FormGroup>
        <FormGroup className="md-3">
          <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck} />
        </FormGroup>
        <Button type="submit" variant="success" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faPlus} /> Thêm
        </Button>
      </Form>
    </>
  )
}

export default UserCreate