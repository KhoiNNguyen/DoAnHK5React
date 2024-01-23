import React, { useEffect, useState } from 'react'
import axiosClient from '../../../components/axiosClient/axiosClient';
import { Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModelAddNewVoucher from './ModelAddNewVoucher';
import { CSVLink } from 'react-csv';
import { toast } from 'react-toastify';
import Papa from 'papaparse';

const TableVoucher = () => {

    const [isModalShowAddNew, setIsModalShowAddNew] = useState(false);
    const _ = require('lodash');
    const [dataExport, setDataExport] = useState([]);
    const [voucher, setVoucher] = useState([]);

    const [showDelete, setShowDelete] = useState(false);
    const [selectedVoucher, setSelectedVoucher] = useState({});

    const [sortBy, setSortBy] = useState('asc');
    const [sortField, setSortField] = useState('voucherCode');

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedVoucher(voucher.find(a => a.id === id));
        setShowDelete(true);
    }
    const handleDelete = (id) => {
        axiosClient.delete(`/Vouchers/${id}`)
        setVoucher(prevVouchers => prevVouchers.filter(voucher => voucher.id !== id));
        setShowDelete(false)
    }
    useEffect(() => {
        axiosClient.get(`/Vouchers`)
            .then(res => setVoucher(res.data))
    }, [])

    const handleClose = () => {
        setIsModalShowAddNew(false)
        window.location.reload();
    }

    const handleSearch = (event) => {
        //console.log(event.target.value)
        let term = event.target.value;

        if (term) {
            let cloneListVoucher = _.cloneDeep(voucher)
            cloneListVoucher = cloneListVoucher.filter(item => item.voucherCode.includes(term))
            setVoucher(cloneListVoucher)
        } else {
            axiosClient.get(`/Vouchers`)
                .then(res => setVoucher(res.data))
        }
    }

    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy)
        setSortField(sortField)

        let cloneListVouchers = _.cloneDeep(voucher)
        cloneListVouchers = _.orderBy(cloneListVouchers, [sortField], [sortBy])
        //console.log(cloneListVouchers)
        setVoucher(cloneListVouchers);
    }

    const getVoucherExport = (event, done) => {
        let result = [];
        if (voucher && voucher.length > 0) {
            result.push(['Id', 'VoucherCode', 'Discound', 'StartTime', 'EndDate', 'Description', 'Status']);
            voucher.map((item, index) => {
                let arr = [];
                arr[0] = item.id;
                arr[1] = item.voucherCode;
                arr[2] = item.discound;
                arr[3] = item.startTime;
                arr[4] = item.EndDate;
                arr[5] = item.description;
                arr[6] = item.status ? "Hoạt động" : "ko hoạt động";
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
                        if (rawCSV[0] && rawCSV[0].length === 7) {
                            if (rawCSV[0][0] !== 'Id'
                                || rawCSV[0][1] !== 'VoucherCode'
                                || rawCSV[0][2] !== 'Discound'
                                || rawCSV[0][3] !== 'StartTime'
                                || rawCSV[0][4] !== 'EndDate'
                                || rawCSV[0][5] !== 'Description'
                                || rawCSV[0][6] !== 'Status'
                            ) {
                                toast.error('Wrong format header CSV file!')
                            } else {
                                let result = [];

                                rawCSV.map((item, index) => {
                                    if (index > 0 && item.length === 7) {
                                        // let obj = {
                                        //     product: { id: item[0] },
                                        //     voucher: { voucherCode: item[1] },
                                        //     status: item[2]
                                        // };
                                        // obj.product.id = item[0]
                                        // obj.voucher.voucherCode = item[1]
                                        // obj.Status = item[2]

                                        let obj = {
                                            id: item[0],
                                            voucherCode: item[1],
                                            discound: item[2],
                                            startTime: item[3],
                                            EndDate: item[4],
                                            description: item[5],
                                            status: item[6],
                                        };
                                        result.push(obj);
                                    }
                                })
                                console.log(result)
                                setVoucher(result)
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
                <span> List voucher:</span>
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
                        onClick={getVoucherExport}
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
                    onChange={(event) => handleSearch(event)}
                    placeholder='Tìm mã giảm giá'
                />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>
                            <div className='sort-header'>
                                <span>VoucherCode</span>
                                <span>
                                    <i
                                        className="fa-solid fa-arrow-down-long"
                                        onClick={() => handleSort('desc', 'voucherCode')}
                                    ></i>
                                    <i
                                        className="fa-solid fa-arrow-up-long"
                                        onClick={() => handleSort('asc', 'voucherCode')}
                                    ></i>
                                </span>
                            </div>
                        </th>
                        <th>Discound</th>
                        <th>StartTime</th>
                        <th>EndDate</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        voucher.map((item, index) =>
                            <tr key={`voucher-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.voucherCode}</td>
                                <td>{item.discound}</td>
                                <td>{item.startTime}</td>
                                <td>{item.endDate}</td>
                                <td>{item.description}</td>
                                <td>{item.status ? "Hoạt động" : "Ngưng hoạt động"}</td>
                                <td>
                                    <button className='btn btn-warning mx-3' variant="warning">
                                        <Link className='txt-edit' to={`/admin/Vouchers/Edit/${item.id}`}>Edit</Link>
                                    </button>
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
                    <Button variant="danger" onClick={() => handleDelete(selectedVoucher.id)}>
                        Ok
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <ModelAddNewVoucher
                show={isModalShowAddNew}
                handleClose={handleClose}
            />


        </>
    )
}

export default TableVoucher