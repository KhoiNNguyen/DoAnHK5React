import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import style from"./order.modual.scss"
import { Link } from "react-router-dom";

function Order() {
    return ( 
    <div className="inner">
        <div className="navOrder">
            <Link to="/order"><button className="btn-order active">Tất cả</button></Link>
            <Link to="/order/DaDat"><button className="btn-order">Đã đặt</button></Link>
            <Link to="/order/DaGiao"><button className="btn-order">Đã Giao</button></Link>
            <Link to="/order/DaHuy"><button className="btn-order">Đả Hủy</button></Link>
            <Link to="/order/DangGiao"><button className="btn-order">Đang giao hàng</button></Link>
            <Link to="/order/DaXacNhan"><button className="btn-order">Đã xác nhận</button></Link>
        </div>
        <div className="contentOrder">
            <div className="d-flex">
              <div className="imageCart d-flex">
                <img
                  style={{ width: 100, height: 100 }}
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/b/mbp-silver-select-202206_2.jpg"
                  alt="1"
                />
              </div>
              <div className="product-info ">
                <div className="d-flex justify-content-between align-items-start  mr-4">
                  <div>
                    <p>Iphone 123promax</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <div class="block-box-price">
                    <span class="title-price" style={{ display: "none" }}>
                      :
                    </span>{" "}
                    <div class="box-info__box-price d-flex ">
                      <p class="product__price--show">29.890.000đ</p>
                    </div>
                  </div>
                </div>
              </div>
                <div style={{width:"34%"}}>
                    <div className="Dahuy d-flex">
                        <p>Da Huy</p>
                    </div>
                    <div className="sumProductHuy d-flex">
                        <p>Tong Tien : </p>
                        <p>26.900.000</p>
                    </div>
                </div>
          </div>
        </div>
        <div className="contentOrder">
            <div className="d-flex">
              <div className="imageCart d-flex">
                <img
                  style={{ width: 100, height: 100 }}
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/b/mbp-silver-select-202206_2.jpg"
                  alt="1"
                />
              </div>
              <div className="product-info ">
                <div className="d-flex justify-content-between align-items-start  mr-4">
                  <div>
                    <p>Iphone 123promax</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <div class="block-box-price">
                    <span class="title-price" style={{ display: "none" }}>
                      :
                    </span>{" "}
                    <div class="box-info__box-price d-flex ">
                      <p class="product__price--show">29.890.000đ</p>
                    </div>
                  </div>
                </div>
              </div>
                <div style={{width:"34%"}}>
                    <div className="Dahuy d-flex">
                        <p>Dang giao</p>
                    </div>
                    <div className="sumProductHuy d-flex">
                        <p>Tong Tien : </p>
                        <p>26.900.000</p>
                    </div>
                </div>
          </div>
        </div>
        <div className="contentOrder">
            <div className="d-flex">
              <div className="imageCart d-flex">
                <img
                  style={{ width: 100, height: 100 }}
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/b/mbp-silver-select-202206_2.jpg"
                  alt="1"
                />
              </div>
              <div className="product-info ">
                <div className="d-flex justify-content-between align-items-start  mr-4">
                  <div>
                    <p>Iphone 123promax</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <div class="block-box-price">
                    <span class="title-price" style={{ display: "none" }}>
                      :
                    </span>{" "}
                    <div class="box-info__box-price d-flex ">
                      <p class="product__price--show">29.890.000đ</p>
                    </div>
                  </div>
                </div>
              </div>
                <div style={{width:"34%"}}>
                    <div className="Dahuy d-flex">
                        <p>Da Giao</p>
                    </div>
                    <div className="sumProductHuy d-flex">
                        <p>Tong Tien : </p>
                        <p>26.900.000</p>
                    </div>
                </div>
          </div>
        </div>
        <div className="contentOrder">
            <div className="d-flex">
              <div className="imageCart d-flex">
                <img
                  style={{ width: 100, height: 100 }}
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/b/mbp-silver-select-202206_2.jpg"
                  alt="1"
                />
              </div>
              <div className="product-info ">
                <div className="d-flex justify-content-between align-items-start  mr-4">
                  <div>
                    <p>Iphone 123promax</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <div class="block-box-price">
                    <span class="title-price" style={{ display: "none" }}>
                      :
                    </span>{" "}
                    <div class="box-info__box-price d-flex ">
                      <p class="product__price--show">29.890.000đ</p>
                    </div>
                  </div>
                </div>
              </div>
                <div style={{width:"34%"}}>
                    <div className="Dahuy d-flex">
                        <p>Da Dat</p>
                    </div>
                    <div className="sumProductHuy d-flex">
                        <p>Tong Tien : </p>
                        <p>26.900.000</p>
                    </div>
                </div>
          </div>
        </div>
        <div className="contentOrder">
            <div className="d-flex">
              <div className="imageCart d-flex">
                <img
                  style={{ width: 100, height: 100 }}
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/b/mbp-silver-select-202206_2.jpg"
                  alt="1"
                />
              </div>
              <div className="product-info ">
                <div className="d-flex justify-content-between align-items-start  mr-4">
                  <div>
                    <p>Iphone 123promax</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <div class="block-box-price">
                    <span class="title-price" style={{ display: "none" }}>
                      :
                    </span>{" "}
                    <div class="box-info__box-price d-flex ">
                      <p class="product__price--show">29.890.000đ</p>
                    </div>
                  </div>
                </div>
              </div>
                <div style={{width:"34%"}}>
                    <div className="Dahuy d-flex">
                        <p>Da Xac Nhan</p>
                    </div>
                    <div className="sumProductHuy d-flex">
                        <p>Tong Tien : </p>
                        <p>26.900.000</p>
                    </div>
                </div>
          </div>
        </div>
    </div> );
}

export default Order;