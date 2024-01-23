import React, { useEffect, useState } from 'react'
import axiosClient from '../../../components/axiosClient/axiosClient';
import { Table } from 'react-bootstrap';
import ModelAddNewProductVoucher from './ModelAddNewProductVoucher';
import ModelEditProductVoucher from './ModelEditProductVoucher';
import './TableProductVoucher.css'
import { CSVLink } from 'react-csv';
import { toast } from 'react-toastify';
import Papa from 'papaparse'
import { Link } from 'react-router-dom';

function TableProductVoucher() {
    const [productVoucher, setProductVoucher] = useState([]);

    const [isModalShowAddNew, setIsModalShowAddNew] = useState(false);
    const [isModalShowEdit, setIsModalShowEdit] = useState(false);
    const [dataProductVoucherEdit, setDataProductVoucherEdit] = useState({});
    const [lgShow, setLgShow] = useState(false);
    const _ = require('lodash');

    const [sortBy, setSortBy] = useState('asc');
    const [sortField, setSortField] = useState('id');

    const [keyword, setKeyword] = useState('');
    const [dataExport, setDataExport] = useState([]);


    console.log(dataProductVoucherEdit)

    const handleClose = () => {
        setIsModalShowAddNew(false)
        window.location.reload();
    }

    useEffect(() => {
        axiosClient.get(`/ProductVouchers`)
            .then(res => setProductVoucher(res.data))
    }, [])


    const handleEditUser = (productVouchers) => {
        console.log(productVouchers);
        setDataProductVoucherEdit(productVouchers);
        setIsModalShowEdit(true);
    }

    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy)
        setSortField(sortField)

        let cloneListProductVoucher = _.cloneDeep(productVoucher)
        cloneListProductVoucher = _.orderBy(cloneListProductVoucher, [sortField], [sortBy])
        //console.log(cloneListProductVoucher)
        setProductVoucher(cloneListProductVoucher);
    }

    const handleSearch = (event) => {
        //console.log(event.target.value)
        let term = event.target.value;

        if (term) {
            let cloneListProductVoucher = _.cloneDeep(productVoucher)
            cloneListProductVoucher = cloneListProductVoucher.filter(item => item.voucher.voucherCode.includes(term))
            setProductVoucher(cloneListProductVoucher)
        } else {
            axiosClient.get(`/ProductVouchers`)
                .then(res => setProductVoucher(res.data))
        }
    }


    const getProductVoucherExport = (event, done) => {
        let result = [];
        if (productVoucher && productVoucher.length > 0) {
            result.push(['Id', 'ProductId', 'Vouchers', 'Status']);
            productVoucher.map((item, index) => {
                let arr = [];
                arr[0] = item.id;
                arr[1] = item.product.id;
                arr[2] = item.voucher.voucherCode;
                arr[3] = item.status ? "Không hoạt động" : "Hoạt động";
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
                        if (rawCSV[0] && rawCSV[0].length === 3) {
                            if (rawCSV[0][0] !== 'ProductId'
                                || rawCSV[0][1] !== 'Vouchers'
                                || rawCSV[0][2] !== 'Status'
                            ) {
                                toast.error('Wrong format header CSV file!')
                            } else {
                                let result = [];

                                rawCSV.map((item, index) => {
                                    if (index > 0 && item.length === 3) {
                                        let obj = {
                                            product: { id: item[0] },
                                            voucher: { voucherCode: item[1] },
                                            status: item[2]
                                        };
                                        // obj.product.id = item[0]
                                        // obj.voucher.voucherCode = item[1]
                                        // obj.Status = item[2]
                                        result.push(obj);
                                    }
                                })
                                console.log(result)
                                setProductVoucher(result)
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
                <span><b>List product voucher:</b></span>
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
                        onClick={getProductVoucherExport}
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
                    placeholder='Tìm mã khuyến mãi'
                />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >
                            <div className='sort-header'>
                                <span>ID</span>
                                <span>
                                    <i
                                        className="fa-solid fa-arrow-down-long"
                                        onClick={() => handleSort('desc', 'id')}
                                    ></i>
                                    <i
                                        className="fa-solid fa-arrow-up-long"
                                        onClick={() => handleSort('asc', 'id')}
                                    ></i>
                                </span>
                            </div>
                        </th>
                        <th>ProductId</th>
                        <th>
                            <div className='sort-header'>
                                <span>Vouchers</span>
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
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productVoucher.map((item, index) =>
                            <tr key={`productVouchers-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.product.id}</td>
                                <td>{item.voucher.voucherCode}</td>
                                <td>{item.status ? "Không hoạt động" : "Hoạt động"}</td>
                                <td>
                                    <button className='btn btn-warning mx-3' variant="warning">
                                        <Link className='txt-edit' to={`/admin/ProductVouchers/Edit/${item.id}`}>Edit</Link>
                                    </button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <ModelAddNewProductVoucher
                show={isModalShowAddNew}
                handleClose={handleClose}
            />
        </>
    )
}

export default TableProductVoucher