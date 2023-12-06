import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../../components/axiosClient/axiosClient';

const InvoiceEdit = () => {
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState({});
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setInvoice(prev => ({ ...prev, [name]: value }));
  }
  const handleCheck = (e) => {
    let name = e.target.name
    let value = e.target.checked
    setInvoice(prev => ({ ...prev, [name]: value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.put(`/Invoices/${id}`, invoice)
      .then(() => navigate('/invoices'))
  }
  useEffect(() => {
    axiosClient.get(`/Invoices/${id}`)
      .then(res => setInvoice(res.data));
  }, []);
  useEffect(() => {
    axiosClient.get(`/PaymentMethods`)
      .then(res => setPaymentMethod(res.data));
  }, []);

  useEffect(() => {
    axiosClient.get(`/Users`)
      .then(res => setUser(res.data));
  }, []);
  return (
    <>
      <Form className="col-md-3">
        <FormGroup className="mb-3">
          <FormLabel>Dia chi giao hang: </FormLabel>
          <FormControl name="addressShip" type="text" onChange={handleChange} value={invoice.addressShip}></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>PhoneId: </FormLabel>
          <FormSelect className="mb-3" name="phoneId" onChange={handleChange} value={invoice.userId}>
            {
              user.map(item => {
                return (
                  <option value={item.id}>{item.userName}</option>
                )
              })
            }
          </FormSelect>
        </FormGroup>
        <FormGroup className="md-3">
          <FormLabel>Ngày lập hóa đơn: </FormLabel>
          <FormControl name="invoiceDate" type="date" format="yyyy-MM-dd" onChange={handleChange} value={invoice.invoiceDate} ></FormControl>
        </FormGroup>
        <FormGroup className="md-3">
          <FormLabel>Địa chỉ giao hàng: </FormLabel>
          <FormControl name="addressShip" type="text" onChange={handleChange} value={invoice.addressShip} ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Hình thức thanh toán: </FormLabel>
          <FormSelect name="paymentMethodId" onChange={handleChange} value={invoice.paymentMethodId}>
            <option> None </option>
            {
              paymentMethod.map(item => {
                return (
                  <option value={item.id} >{item.name} </option>
                )
              })
            }
          </FormSelect>
        </FormGroup>
        <FormGroup className="md-3">
          <FormLabel>Tổng tiền: </FormLabel>
          <FormControl name="total" type="number" min="1000" onChange={handleChange} value={invoice.total} ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormCheck name="status" type="switch" label="Hoạt đông" onChange={handleCheck} checked={invoice.status} />
        </FormGroup>
        <Button type="submit" variant="success" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faCheck} /> Cập nhật
        </Button>
      </Form>
    </>
  )
}

export default InvoiceEdit