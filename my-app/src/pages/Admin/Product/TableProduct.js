import React, { useEffect, useState } from 'react'
import axiosClient from '../../../components/axiosClient/axiosClient';
import { Link } from 'react-router-dom';
import { Button, Table, Modal } from 'react-bootstrap';
import ModelAddNewProduct from './ModelAddNewProduct';
import { CSVLink } from 'react-csv';
import { toast } from 'react-toastify';
import Papa from 'papaparse';

const TableProduct = () => {
    const [product, setProduct] = useState([]);
    const [phone, setPhone] = useState([]);
    const [brand, setBrand] = useState([]);
    const [productType, setProductType] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedPhone, setSelectedPhone] = useState({});
    const [selectedBrand, setSelectedBrand] = useState({});
    const [selectedProductType, setSelectedProductType] = useState({});
    const [isModalShowAddNew, setIsModalShowAddNew] = useState(false);
    
    const _ = require('lodash');
    const [dataExport, setDataExport] = useState([]);
    const [sortBy, setSortBy] = useState('asc');
    const [sortField, setSortField] = useState('phone.name');

    const handleClosePhone = () => setShowPhone(false);
    const handleShowPhone = (id, brandId, productTypeId) => {
        setSelectedPhone(phone.find(a => a.id == id));
        setSelectedBrand(brand.find(a => a.id == brandId));
        setSelectedProductType(productType.find(a => a.id == productTypeId));
        setShowPhone(true);
    }

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (id) => {
        setSelectedProduct(product.find(a => a.id == id));
        setShowDelete(true);
    }
    const handleDelete = (id) => {
        axiosClient.delete(`/Products/${id}`)
        setShowDelete(false)
    }

    useEffect(() => {
        axiosClient.get(`/Products`)
            .then(res => setProduct(res.data));
    }, []);

    useEffect(() => {
        axiosClient.get(`/Phones`)
            .then(res => setPhone(res.data));
    }, []);

    useEffect(() => {
        axiosClient.get(`/ProductTypes`)
            .then(res => setProductType(res.data));
    }, []);

    useEffect(() => {
        axiosClient.get(`/Brands`)
            .then(res => setBrand(res.data));
    }, []);

    const handleClose = () => {
        setIsModalShowAddNew(false)
        window.location.reload();
    }

    const handleSearch = (event) => {
        //console.log(event.target.value)
        let term = event.target.value;

        if (term) {
            let cloneListProduct = _.cloneDeep(product)
            cloneListProduct = cloneListProduct.filter(item => item.phone.name.includes(term))
            setProduct(cloneListProduct)
        } else {
            axiosClient.get(`/Products`)
                .then(res => setProduct(res.data))
        }
    }

    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy)
        setSortField(sortField)

        let cloneListProduct = _.cloneDeep(product)
        cloneListProduct = _.orderBy(cloneListProduct, [sortField], [sortBy])
        //console.log(cloneListProduct)
        setProduct(cloneListProduct);
    }

    const getProductExport = (event, done) => {
        let result = [];
        if (product && product.length > 0) {
            result.push(['Id', 'Phone', 'ROM', 'Quantity', 'Price', 'Color', 'Status']);
            product.map((item, index) => {
                let arr = [];
                arr[0] = item.id;
                arr[1] = item.phone.name;
                arr[2] = item.rom;
                arr[3] = item.quantity;
                arr[4] = item.price;
                arr[5] = item.color;
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
                                || rawCSV[0][1] !== 'Phone'
                                || rawCSV[0][2] !== 'ROM'
                                || rawCSV[0][3] !== 'Quantity'
                                || rawCSV[0][4] !== 'Price'
                                || rawCSV[0][5] !== 'Color'
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
                                            phone: { name: item[1] },
                                            rom: item[2],
                                            quantity: item[3],
                                            price: item[4],
                                            color: item[5],
                                            status: item[6],
                                        };
                                        result.push(obj);
                                    }
                                })
                                console.log(result)
                                setProduct(result)
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
                <span> List product:</span>
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
                        onClick={getProductExport}
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
                    placeholder='Tìm sản phẩm'
                />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>
                            <div className='sort-header'>
                                <span>Phone</span>
                                <span>
                                    <i
                                        className="fa-solid fa-arrow-down-long"
                                        onClick={() => handleSort('desc', 'phone.name')}
                                    ></i>
                                    <i
                                        className="fa-solid fa-arrow-up-long"
                                        onClick={() => handleSort('asc', 'phone.name')}
                                    ></i>
                                </span>
                            </div>
                        </th>
                        <th>ROM</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item, index) =>
                            <tr key={`product-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.phone.name}</td>
                                <td>{item.rom}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}$</td>
                                <td>{item.color}</td>
                                <td>{item.status ? "Hoạt động" : "Ngưng hoạt động"}</td>
                                <td>
                                    <button className='btn btn-warning mx-3' variant="warning">
                                        <Link className='txt-edit' to={`/admin/Products/Edit/${item.id}`}>Edit</Link>
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
                    <Button variant="danger" onClick={() => handleDelete(selectedProduct.id)}>
                        Ok
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <ModelAddNewProduct
                show={isModalShowAddNew}
                handleClose={handleClose}
            />
        </>
    )
}

export default TableProduct