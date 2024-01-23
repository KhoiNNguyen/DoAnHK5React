import React, { useEffect, useState } from 'react'
import axiosClient from '../../../components/axiosClient/axiosClient';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { toast } from 'react-toastify';
import Papa from 'papaparse';


function TableAccount() {
    let i = 1;
    const [user, setUser] = useState([]);
    const _ = require('lodash');
    const [dataExport, setDataExport] = useState([]);
    const [sortBy, setSortBy] = useState('asc');
    const [sortField, setSortField] = useState('phone.name');


    useEffect(() => {
        axiosClient.get(`/Users`).then(res => setUser(res.data));
    }, [])

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



    const handleSearch = (event) => {
        //console.log(event.target.value)
        let term = event.target.value;

        if (term) {
            let cloneListUser = _.cloneDeep(user)
            cloneListUser = cloneListUser.filter(item => item.userName.includes(term))
            setUser(cloneListUser)
        } else {
            axiosClient.get(`/Users`)
                .then(res => setUser(res.data))
        }
    }

    const getUserExport = (event, done) => {
        let result = [];
        if (user && user.length > 0) {
            result.push(['Username', 'Phone', 'Address', 'Status']);
            user.map((item, index) => {
                let arr = [];
                arr[0] = item.userName;
                arr[1] = item.phone;
                arr[2] = item.address;
                arr[3] = item.status ? "Hoạt động" : "ko hoạt động";
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
                        if (rawCSV[0] && rawCSV[0].length === 4) {
                            if (rawCSV[0][0] !== 'Username'
                                || rawCSV[0][1] !== 'Phone'
                                || rawCSV[0][2] !== 'Address'
                                || rawCSV[0][3] !== 'Status'
                            ) {
                                toast.error('Wrong format header CSV file!')
                            } else {
                                let result = [];

                                rawCSV.map((item, index) => {
                                    if (index > 0 && item.length === 4) {
                                        // let obj = {
                                        //     product: { id: item[0] },
                                        //     voucher: { voucherCode: item[1] },
                                        //     status: item[2]
                                        // };
                                        // obj.product.id = item[0]
                                        // obj.voucher.voucherCode = item[1]
                                        // obj.Status = item[2]

                                        let obj = {
                                            userName: item[0],
                                            phone: item[1],
                                            address: item[2],
                                            status: item[3],
                                        };
                                        result.push(obj);
                                    }
                                })
                                console.log(result)
                                setUser(result)
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

    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy)
        setSortField(sortField)

        let cloneListUser = _.cloneDeep(user)
        cloneListUser = _.orderBy(cloneListUser, [sortField], [sortBy])
        //console.log(cloneListUser)
        setUser(cloneListUser);
    }

    return (
        <>
            <div className='my-3 add-new'>
                <span> List Account:</span>
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
                        onClick={getUserExport}
                    > <i className="fa-solid fa-file-export"></i> Export
                    </CSVLink>

                </div>
            </div>
            <div className='col-4 my-3'>
                <input
                    className='form-control'
                    onChange={(event) => handleSearch(event)}
                    placeholder='Tìm tài khoản'
                />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>
                            <div className='sort-header'>
                                <span>Username</span>
                                <span>
                                    <i
                                        className="fa-solid fa-arrow-down-long"
                                        onClick={() => handleSort('desc', 'userName')}
                                    ></i>
                                    <i
                                        className="fa-solid fa-arrow-up-long"
                                        onClick={() => handleSort('asc', 'userName')}
                                    ></i>
                                </span>
                            </div>
                        </th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, index) =>
                            <tr key={`user-${index}`}>
                                <td>{i++}</td>
                                <td>{item.userName}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.status ? "Hoạt động" : "Ngưng hoạt động"}</td>
                                <td>
                                    <button className='btn btn-warning mx-3' variant="warning">
                                        <Link className='txt-edit' to={`/admin/user/edit/${item.id}`}>Edit</Link>
                                    </button>
                                    <Button variant="danger" onClick={() => handleShowDelete(item.id)}>Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TableAccount