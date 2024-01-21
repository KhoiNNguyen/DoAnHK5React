import classNames from "classnames/bind";
import styles from './Header.modual.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import axiosClient from "../../components/axiosClient/axiosClient";

const cx = classNames.bind(styles)
function Header() {
    const cartItem=useSelector((state) => state?.auth?.cartProduct);
    const [searchValue, setSearchValue] = useState('')
    const [register, setRegister] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [phone, setPhone] = useState([]);
    const [product, setProduct] = useState([]);
    const [keyWord, setKeyWord] = useState([]);
    const none = []
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        if(value == ""){
            let search = none.filter(item => {
                return item.name.toUpperCase().includes(value.toUpperCase())
            })
            setKeyWord(search)
        }
        else{
            let search = product.filter(item => {
                return item.phone.name.toUpperCase().includes(value.toUpperCase())
            })
            setKeyWord(search)
        }
        setSearchValue(value)
    }

    useEffect(()=>{
        axiosClient.get(`/Phones`)  
            .then(res => setPhone(res.data))
    },[])
    useEffect(()=>{
        axiosClient.get(`/Products`)
            .then(res => setProduct(res.data))
    },[])

    const handleSubmit = (e) => {
        console.log(searchValue)
        e.preventDefault();
    }

    const handleRegister = () => {
        setLgShow(false);
        setRegister(true);
    }

    const handleShow = () => {
        setLgShow(true);

    };
    const handLogout =() =>{
        localStorage.removeItem('customer');
        navigate('/')
    }
    return (<>
        <div className={cx("top-link")}>

        </div>
        <header className={cx('wrapper-header')}>
            <div className={cx('Nav')}>
                <div className={cx("top-navigation")}>
                    <div className={cx("container-header")}>
                        <ul className={cx("menu-header")}>
                            <li><Link to="/PhoneFavorite">Giới Thiệu</Link></li>
                            <li><Link to="/PhoneFavorite">Yêu Thích</Link></li>
                            <li><Link to="/ButtonSoSanh">So Sánh</Link></li>
                            <li><Link to="/order">Quản Lý Đơn Hàng</Link></li>
                            {/* <li><button className="btn-login" onClick={handleShow}>Đăng nhập</button></li> */}
                            <li>
                                <Navbar variant="" bg="" expand="lg">
                                    <Container fluid>
                                        <Navbar.Toggle aria-controls="navbar-example" />
                                        <Navbar.Collapse id="navbar-dark-example">
                                            <Nav>
                                                <NavDropdown
                                                    id=""
                                                    title="Setting"
                                                    menuVariant="dark"
                                                >
                                                    <NavLink to='/login' className='nav-link'>Login</NavLink>
                                                    <NavDropdown.Item onClick={() => handLogout()}> Log Out </NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('inner')}>
                    <div className={cx("logo")} >
                        <div className={cx("Brand")}>
                            <Link to="/"><img src="/Images/logo/logo.png" style={{ width: "260px", height: "60px" }} alt="One People" /></Link>
                        </div>
                        <div className={cx("search")}>
                            <form method="get" action="/tim-kiem" onsubmit="return submitSearch(this);" enctype="application/x-www-form-urlencoded">
                                <div className={cx("border")}>
                                    <input type="text" id="search" value={searchValue} name="search" placeholder="Hôm nay bạn cần tìm gì?" autocomplete="off" onChange={handleChange} />
                                    <button type="submit" onClick={handleSubmit} className={cx("search-btn")}><FontAwesomeIcon icon={faSearch} /></button>
                                </div>
                                <div className="result-list">
                                    {
                                        keyWord.map(itemPhone => {
                                            const item = itemPhone;
                                            const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,idBr}=itemPhone.phone
                                            const {rom,color,price} = itemPhone
                                            return (
                                                <>
                                                    <Link to={`/phoneDetail`} state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,idBr,color,price,item }} >
                                                        {itemPhone.phone.name} {itemPhone.color} ({itemPhone.rom}) 
                                                    </Link>
                                                </>
                                            )
                                        })
                                    }
                                </div> 
                            </form>
                        </div>
                        <div className={cx("order-tools")}>
                            <div className={cx("item check-order")}>
                                <a className={cx("btnCheckOrder")} style={{ width: 150 }}>
                                    <span className={cx("icon")}><FontAwesomeIcon icon={faTruckMoving} /></span>
                                    <span className={cx("text")}>Kiểm tra đơn hàng</span>
                                </a>
                            </div>
                            <div className={cx("item cart")}>
                                <Link to="/cart" className="d-flex">
                                    <i className={cx("icon-cart")}><FontAwesomeIcon icon={faCartShopping} /></i>
                                    {
                                        <button>{cartItem?.length}</button>}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </>);
}

export default Header;