import SlideShow from "../../components/Slide";
import Footer from "../Footer";

import classNames from "classnames/bind";
import styles from'./Header.modual.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch, faTruck, faTruckMoving } from "@fortawesome/free-solid-svg-icons";

const cx=classNames.bind(styles)
function Header() {
    return ( <>
    <div className={cx("top-link")}>
        <span class="pulse"></span> 
        <p><strong>Cơ hội sở hữu Samsung S20 FE 256GB chỉ với 6.990.000đ - SL có hạn</strong> 
        <a href="https://hoanghamobile.com/dien-thoai-di-dong/samsung-galaxy-s20-fe-256gb-chinh-hang" target="_top">Xem chi tiết</a>
        </p>
    </div>
    <header className={cx('wrapper-header')}>
        <div className={cx('Nav')}>
            <div className={cx("top-navigation")}>
                <div className={cx("container-header")}>
                    <ul>
                        <li><a>Gioi Thieu </a></li>
                        <li><a>San Pham  Da Xem</a></li> 
                        <li><a>He Thong </a></li>
                        <li><a>Tra Cuu Don Hang</a></li>
                        <li><a>Tuyen Dung </a></li>
                        <li><a>Dang Nhap </a></li>

                    </ul>
                </div>
            </div>
            <div className={cx('inner')}>
                <div className={cx("logo")} >  
                    <div className={cx("Brand")}>
                        <img src="https://hoanghamobile.com/Content/web/img/logo-text.png" alt="One People"></img>
                    </div>
                    <div className={cx("search")}>
                        <form method="get" action="/tim-kiem" onsubmit="return submitSearch(this);" enctype="application/x-www-form-urlencoded">
                            <div className={cx("border")}>
                                <input type="text" id="kwd" name="kwd" placeholder="Hôm nay bạn cần tìm gì?" autocomplete="off" />
                                <button type="submit" className={cx("search-btn")}><FontAwesomeIcon icon={faSearch} /></button>
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
                        <a href="/gio-hang">
                            <i className={cx("icon-cart")}><FontAwesomeIcon icon={faCartShopping} /></i>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </header>
    <SlideShow />
    </> );
}

export default Header;