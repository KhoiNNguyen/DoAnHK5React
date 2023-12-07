import classNames from "classnames/bind";
import styles from'./Header.modual.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const cx=classNames.bind(styles)
function Header() {
    const [searchValue,setSearchValue]=useState('')
    const [register, setRegister] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const handleChange=(e)=>{
        const value=e.target.value;
        setSearchValue(value)
    }
    console.log(searchValue)

    const handleSubmit=(e)=>{
        console.log(searchValue)
        e.preventDefault();
    }

    const handleRegister=()=>{
        setLgShow(false);
        setRegister(true);
    }

    const handleClose = () => setLgShow(false);
    const handleCloseRegister = () => setRegister(false);

    const handleShow = () => {
        setLgShow(true);

    };
    return ( <>
    <div className={cx("top-link")}>
        
    </div>
    <header className={cx('wrapper-header')}>
        <div className={cx('Nav')}>
            <div className={cx("top-navigation")}>
                <div className={cx("container-header")}>
                    <ul className={cx("menu-header")}>
                        <li><Link to="/PhoneFavorite">Giới Thiệu</Link></li>
                        <li><Link to="/PhoneFavorite">Yêu Thích</Link></li>
                        <li><Link to="/PhoneFavorite">Sản Phẩm Đả Xem</Link></li>
                        <li><Link to="/order">Quản Lý Đơn Hàng</Link></li>
                        <li><button className="btn-login" onClick={handleShow}>Đăng nhập</button></li>
                    </ul>
                </div>
            </div>
            {/* Đăng nhập */}
            <Modal
                centered
                size='xl'
                show={lgShow}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Login
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="body-login">
                <div className="img-login">
                    <img src="https://hoanghamobile.com/Content/web/img/login-bg.png" alt="Login"></img>
                </div>
                <div className="content-login">
                    <div className="social-login">
                        <button className="btn-loginfb"><FaFacebookF className="bg-primary h4"/> Đăng nhập bằng FaceBook</button>
                        <button className="btn-logingg"><FcGoogle className="h4" /> Đăng Nhập bằng Google</button>
                    </div>
                    <hr/>
                    <div className="form-login">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-check mt-2">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div class="mt-3">
                            <button type="submit" className="btn-signIn">Sign In</button>
                            <button type="submit" className="btn-register" onClick={handleRegister}>Register</button>
                        </div>
                        <div className="forget-password mt-3">
                            <a href="#" style={{fontSize:"1rem"}}>Forget Password</a>
                        </div>
                    </form>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
            {/* Đăng Ký */}
            <Modal
                centered
                size='xl'
                show={register}
                onHide={handleCloseRegister}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Register
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="body-register d-flex">
                <div className="img-register">
                    <img src="https://hoanghamobile.com/Content/web/img/login-bg.png" alt="Login"></img>
                </div>
                <div className="content-register">
                    <div className="content">
                        <h4>Đăng ký tài khoản</h4>
                    </div>
                    <div className="form-register">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Tài Khoản</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="Username" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Họ Tên</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Mật Khẩu</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" name="Password" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nhập lại mật khẩu</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="NhapLaiMatKhau" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="Email" />
                        </div>
                        <div className="form-group">
                            <label>Giới tính:</label>
                            <div className="controls">
                                <label class="radio-ctn">
                                    <input type="radio" name="Sex" value="true" />
                                    <span><strong>Nam</strong></span>
                                </label>
                                <label class="radio-ctn">
                                    <input type="radio" name="Sex" value="false" />
                                    <span><strong>Nữ</strong></span>
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Ngày tháng năm sinh</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="Username" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Điện Thoại</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="Username" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Địa chỉ</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="Username" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Tỉnh/Thành Phố</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="Username" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Quận/Huyện</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="Username" />
                        </div>                    
                        <div class="mt-3 createRegister">
                            <button type="submit" className="btn-create-register">Register</button>
                        </div>
                    </form>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
            <div className={cx('inner')}>
                <div className={cx("logo")} >  
                    <div className={cx("Brand")}>
                        <Link to="/"><img src="/Images/logo/logo.png" style={{width:"260px",height:"60px"}} alt="One People" /></Link>
                    </div>
                    <div className={cx("search")}>
                        <form method="get" action="/tim-kiem" onsubmit="return submitSearch(this);" enctype="application/x-www-form-urlencoded">
                            <div className={cx("border")}>
                                <input type="text" id="search" value={searchValue} name="search" placeholder="Hôm nay bạn cần tìm gì?" autocomplete="off" onChange={handleChange}/>
                                <button type="submit" onClick={handleSubmit} className={cx("search-btn")}><FontAwesomeIcon icon={faSearch} /></button>
                            </div>
                        </form>
                    </div>
                <div className={cx("order-tools")}>
                    <div className={cx("item check-order")}>
                        <a className={cx("btnCheckOrder")}>
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

    </> );
}

export default Header;