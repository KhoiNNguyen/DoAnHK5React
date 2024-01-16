import classNames from "classnames/bind";
import styles from './Header.modual.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const cx = classNames.bind(styles)
function Header() {
    const [searchValue, setSearchValue] = useState('')
    const [register, setRegister] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value)
    }
    console.log(searchValue)

    const handleSubmit = (e) => {
        console.log(searchValue)
        e.preventDefault();
    }

    const handleRegister = () => {
        setLgShow(false);
        setRegister(true);
    }

    const handleClose = () => setLgShow(false);
    const handleCloseRegister = () => setRegister(false);

    const handleShow = () => {
        setLgShow(true);

    };
    const handLogout =() =>{
        localStorage.removeItem('token');
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
                                <Link to="/cart">
                                    <i className={cx("icon-cart")}><FontAwesomeIcon icon={faCartShopping} /></i>
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