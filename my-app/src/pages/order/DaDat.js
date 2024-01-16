
import "./order.modual.scss"
import { Link, useLocation } from "react-router-dom";

function DaDat() {
  const location = useLocation();
  let cartItems = null;
  
  if (location.state && location.state.cartItems) {
    cartItems = location.state.cartItems;
  } else {
    cartItems = null;
  }

    return ( 
    <div className="inner">
        <div className="navOrder">
          <Link to="/order"><button className="btn-order">Tất cả</button></Link>
            <Link to="/order/DaDat"><button className="btn-order activeOrder">Đã đặt</button></Link>
            <Link to="/order/DaGiao"><button className="btn-order">Đã Giao</button></Link>
            <Link to="/order/DaHuy"><button className="btn-order">Đả Hủy</button></Link>
            <Link to="/order/DangGiao"><button className="btn-order">Đang giao hàng</button></Link>
            <Link to="/order/DaXacNhan"><button className="btn-order">Đã xác nhận</button></Link>
           
        </div>
          {cartItems ? (cartItems.map(item=>{
            return(
              <div className="contentOrder">
            <div className="d-flex">
            <div className="imageCart d-flex">
              <img
                style={{ width: 100, height: 100 }}
                src={`https://localhost:7126/images/product/${item.phone.image}`}
                alt="1"
              />
            </div>
            <div className="product-info ">
              <div className="d-flex justify-content-between align-items-start  mr-4">
                <div>
                  <p>{item.phone.name}</p>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-end">
                <div class="block-box-price">
                  <span class="title-price" style={{ display: "none" }}>
                    :
                  </span>{" "}
                  <div class="box-info__box-price d-flex ">
                    <p class="product__price--show">{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
              <div style={{width:"40%"}}>
                  <div className="Dahuy d-flex">
                      <p>Da Dat</p>
                  </div>
                  <div className="sumProductHuy d-flex">
                      <p>Thành Tiền : </p>
                      <p>{item.price}</p>
                  </div>
              </div>
            </div>
            </div>
        )
          })): undefined}
          
        </div> );
}

export default DaDat;