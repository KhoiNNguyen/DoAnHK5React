import React, { useEffect, useState } from 'react'
import './TablePaymentMethod.css'
import axiosClient from '../../../components/axiosClient/axiosClient';
import { Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModelAddNewPaymentMethod from './ModelAddNewPaymentMethod';
import { CSVLink } from 'react-csv';
import Papa from 'papaparse';
import { toast } from 'react-toastify';

const TablePaymentMethod = () => {

    var i = 1;
    const _ = require('lodash');
    const [sortBy, setSortBy] = useState('asc');
    const [sortField, setSortField] = useState('name');
    const [paymentMethod, setPaymentMethod] = useState([]);
    const [dataExport, setDataExport] = useState([]);

    const [showDelete, setShowDelete] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({});
    const [isModalShowAddNew, setIsModalShowAddNew] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedPaymentMethod(paymentMethod.find(a => a.id === id));
        setShowDelete(true);
    }
    const handleDelete = (id) => {
        axiosClient.delete(`/PaymentMethods/${id}`)
        setShowDelete(false)
    }
    useEffect(() => {
        axiosClient.get(`/PaymentMethods`)
            .then(res => setPaymentMethod(res.data))
    }, [])

    const handleClose = () => {
        setIsModalShowAddNew(false)
        window.location.reload();
    }

    const handleSearch = (event) => {
        //console.log(event.target.value)
        let term = event.target.value;

        if (term) {
            let cloneListPaymentMethod = _.cloneDeep(paymentMethod)
            cloneListPaymentMethod = cloneListPaymentMethod.filter(item => item.name.includes(term))
            setPaymentMethod(cloneListPaymentMethod)
        } else {
            axiosClient.get(`/PaymentMethods`)
                .then(res => setPaymentMethod(res.data))
        }
    }

    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy)
        setSortField(sortField)

        let cloneListPaymentMethod = _.cloneDeep(paymentMethod)
        cloneListPaymentMethod = _.orderBy(cloneListPaymentMethod, [sortField], [sortBy])
        //console.log(cloneListPaymentMethod)
        setPaymentMethod(cloneListPaymentMethod);
    }

    const getPayMentMethodExport = (event, done) => {
        let result = [];
        let a=1;
        if (paymentMethod && paymentMethod.length > 0) {
            result.push(['STT', 'Name', 'Status']);
            paymentMethod.map((item, index) => {
                let arr = [];
                arr[0] = a++;
                arr[1] = item.name;
                arr[2] = item.status ? "Hoạt động" : "ko hoạt động";
                result.push(arr);
            })
            setDataExport(result);
            done();
        }
    }

    const handleImportCSV = (event) => {

        if (event.target && event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            if (file.type !== "text/csv") {
                toast.error('Only accept csv file...')
                return;
            }
            Papa.parse(file, {
                //header: true,
                complete: function (results) {
                    let rawCSV = results.data;
                    if (rawCSV.length > 0) {
                        if (rawCSV[0] && rawCSV[0].length === 2) {
                            if (rawCSV[0][0] !== 'Name'
                                || rawCSV[0][1] !== 'Status'
                            ) {
                                toast.error('Wrong format header CSV file!')
                            } else {
                                let result = [];

                                rawCSV.map((item, index) => {
                                    if (index > 0 && item.length === 2) {
                                        // let obj = {
                                        //     product: { id: item[0] },
                                        //     voucher: { voucherCode: item[1] },
                                        //     status: item[2]
                                        // };
                                        // obj.product.id = item[0]
                                        // obj.voucher.voucherCode = item[1]
                                        // obj.Status = item[2]

                                        let obj = {
                                            name: item[0],
                                            status: item[1]
                                        };
                                        result.push(obj);
                                    }
                                })
                                console.log(result)
                                setPaymentMethod(result)
                            }
                        } else {
                            toast.error('Wrong format CSV file!')
                        }
                    } else
                        toast.error('Not found data on CSV file!')
                }
            });
        }
    }

    return (
        <>
            <div className='my-3 add-new'>
                <span> List payment method:</span>
                <div className='group-btns'>
                    <label htmlFor='test' className='btn btn-warning'>
                        <i className="fa-solid fa-file-import"></i> Import
                    </label>
                    <input id='test' type='file' hidden
                        onChange={(event) => handleImportCSV(event)}
                    />

                    <CSVLink
                        data={dataExport}
                        filename={"my-file.csv"}
                        className="btn btn-primary"
                        asyncOnClick={true}
                        onClick={getPayMentMethodExport}
                    > <i className="fa-solid fa-file-export"></i> Export
                    </CSVLink>

                    <button
                        className='btn btn-success'
                        onClick={() => setIsModalShowAddNew(true)}
                    >
                        <i className="fa-solid fa-circle-plus"></i>
                        Add new
                    </button>
                </div>
            </div>
            <div className='col-4 my-3'>
                <input
                    className='form-control'
                    //value={keyword}
                    onChange={(event) => handleSearch(event)}
                    placeholder='Tìm phương thức thanh toán'
                />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>
                            <div className='sort-header'>
                                <span>Name</span>
                                <span>
                                    <i
                                        className="fa-solid fa-arrow-down-long"
                                        onClick={() => handleSort('desc', 'name')}
                                    ></i>
                                    <i
                                        className="fa-solid fa-arrow-up-long"
                                        onClick={() => handleSort('asc', 'name')}
                                    ></i>
                                </span>
                            </div>
                        </th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paymentMethod.map((item, index) =>
                            <tr key={`paymentMethod-${index}`}>
                                <td>{i++}</td>
                                <td>{item.name}</td>
                                <td>{item.status ? "Hoạt động" : "Không hoạt động"}</td>
                                <td>
                                    {/* <button
                                        className='btn btn-warning mx-3'
                                        onClick={() => {
                                            handleEditUser(item)
                                        }}
                                    >Edit</button> */}
                                    <button className='btn btn-warning mx-3' variant="warning">
                                        <Link className='txt-edit' to={`/admin/PaymentMethods/Edit/${item.id}`}>Edit</Link>
                                    </button>
                                    {/* <button className='btn btn-danger'
                                        onClick={() => handleShowDelete(item.id)}
                                    >Delete
                                    </button> */}
                                    <Button variant="danger" onClick={() => handleShowDelete(item.id)}>Delete
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
                    <Button variant="danger" onClick={() => handleDelete(selectedPaymentMethod.id)}>
                        Ok
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <ModelAddNewPaymentMethod
                show={isModalShowAddNew}
                handleClose={handleClose}
            />
        </>
    )
}

export default TablePaymentMethod