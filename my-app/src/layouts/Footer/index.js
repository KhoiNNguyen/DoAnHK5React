import React from "react"
import classNames from "classnames/bind"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhoneAlt } from "react-icons/fa";

import styles from'./Footer.modual.scss'

const cx=classNames.bind(styles)

function Footer() {
    return ( 
        <>
         <div className={cx("inner")}>
            <div className="bg">
            <div className={cx("col-content")}>
                    <div className={cx("link-content")}>
                    <h4>Hỗ Trợ - Dịch Vụ</h4>
                    <ul className={cx("contact")}>
                        <li>Mua hàng trả góp</li>
                        <li>Hướng dẫn đặt hàng và thanh toán</li>
                        <li>đơn hàng</li>
                        <li>Chính sách bảo hành</li>
                        <li>Phạm vi, điều khoản gói bảo hành mở rộng</li>
                        <li>Chính sách bảo mật</li>
                        <li>Chính sách giải quyết khiếu nại</li>
                        <li>Điều khoản mua bán hàng hóa</li>
                        <li>Câu hỏi thường gặp</li>
                    </ul>
                </div>
                    <div className={cx("link-content")}>
                    <h4>Thông Tin Liên Hệ</h4>
                    <ul className={cx("contact")}>
                        <li>Bán hàng Online</li>
                        <li>Chăm sóc khách hàng</li>
                        <li>Dịch vụ sửa chữa Hoàng Hà Care</li>
                        <li>Hợp tác kinh doanh</li>
                        <li>Tra cứu bảo hành</li>
                    </ul>
                </div>
                    <div className={cx("link-content")}>
                    <h4>Hệ thống 124 siêu thị trên toàn quốc</h4>
                    <ul className={cx("contact")}>
                        <li>Danh sách 124 siêu thị trên toàn quốc</li>
                    </ul>
                </div>
                <div className={cx("link-content")}>
                    <h4>Tổng đài</h4>
                    <button><span style={{color:"white"}}>19006067</span></button>
                </div>
        
                <div className={cx("list-pay")}>
                    <h4>Thanh toán miễn phí</h4>
                    <ul className={cx("list-logo")}>
                        <li className={cx("subLogo")}>
                            <img alt="1" style={{marginRight:5}}src="https://hoanghamobile.com/Content/web/img/logo-visa.png" />
                            <img alt="1" src="https://hoanghamobile.com/Content/web/img/logo-master.png" />
                        </li>
                        <li className={cx("subLogo")}>
                            <img alt="1" style={{marginRight:5}} src="https://hoanghamobile.com/Content/web/img/logo-jcb.png" />
                            <img alt="1" src="https://hoanghamobile.com/Content/web/img/logo-samsungpay.png" />
                        </li>
                        <li className={cx("subLogo")}>
                            <img alt="1" style={{marginRight:5}} src="https://hoanghamobile.com/Content/web/img/logo-atm.png" />
                            <img alt="1" src="https://hoanghamobile.com/Content/web/img/logo-vnpay.png" />
                        </li>
                    </ul>
                </div>
        
                <div className={cx("list-transport")}>
                    <h4>Hình thức vận chuyển</h4>
                    <ul className={cx("list-logo")}>
                        <li>
                            <img alt="1" style={{marginRight:5}} src="https://hoanghamobile.com/Content/web/img/nhattin.jpg" />
                            <img alt="1" src="https://hoanghamobile.com/Content/web/img/vnpost.jpg" />
                        </li>
                    </ul>
                    <div className={cx("mg-top20")}>
                        <a href="http://online.gov.vn/Home/WebDetails/28738" target="_blank"><img alt="1" src="https://hoanghamobile.com/Content/web/img/logo-bct.png" /></a>
                    </div>
                </div>
            </div>
        
            <div className={cx("info")}>
                <p>© 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ. MST:  0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng ký thay đổi ngày 24/11/2022)</p>
                <p><strong>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</strong></p>
                <p>Địa chỉ: Số 89 Đường Tam Trinh, Phường Mai Động, Quận Hoàng Mai, Thành Phố Hà Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách nhiệm nội dung: <strong>Hoàng Ngọc Chiến</strong>. </p>
            </div>
            <div id="navSocial">
                            <div className={cx("social")}>
                                <ul className={cx("contact")}>
                                    <li><a href="https://www.facebook.com/hoanghamobilecom" title="Facebook Hoàng Hà Mobile" target="_blank" className={cx("blue")}><span><i className={cx("icon-facebook")}></i></span></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCJm_GdFJzT8h1odq1oMu_7Q?sub_confirmation=1" title="Youtube Hoàng Hà Mobile Channel" target="_blank" className={cx("red")}><span><i className={cx("icon-youtube")}></i></span></a></li>
                                    <li><a href="https://www.instagram.com/hoanghamobile/?hl=vi" title="Hoàng Hà Mobile Instagram" target="_blank" className={cx("rainbow")}><span><i className={cx("icon-instagram")}></i></span></a></li>
                                    <li><a href="https://www.tiktok.com/@hoanghaangels?" title="Tiktok" target="_blank" className={cx("black")}><span><i className={cx("icon-tiktok")}></i></span></a></li>
                                </ul>
                            </div>
                </div>
                <div id="backtoTop">
                    <a id="top" href="javascript:;">
                        <i className={cx("icon-left")}></i>
                    </a>
                </div>
            </div>
            </div>

            </>         
    );
}

export default Footer;