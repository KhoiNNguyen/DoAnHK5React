import { IoIosArrowBack } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { CiGift } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";

import style from "./Cart.modual.scss";
import Header from "../../layouts/Header";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
    <div className="inner ">
      <div className=" w-50 m-auto">
        <div>
          <div className="header-cart d-flex">
            <div className="icon-headerCart">
              <IoIosArrowBack />
            </div>
            <div className="title-cart m-auto">
              <h5>Gio hang cua ban</h5>
            </div>
          </div>
          <div className="selectAll">
            <input type="checkbox" style={{ width: 20 }} />
            <label>Chon Tat Ca</label>
          </div>
          <div className="contentCart">
            <div className="d-flex">
              <div className="imageCart d-flex">
                <input type="checkbox" style={{ width: 20 }} />
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
                  <div>
                    <button>
                      <CiTrash />
                    </button>
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
                  <div class="action d-flex">
                    <button style={{ height: 20 }}>
                      <GoPlus />
                    </button>
                    <p style={{ marginRight: 4, marginLeft: 4 }}>1</p>
                    <button style={{ height: 20 }}>
                      <FiMinus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-infoProduct">
              <div className="iconCoucher d-flex">
                <CiGift />
                <p>Chuong trinh khuyen mai</p>
              </div>
              <ul>
                <li>
                  <h6>
                    Mua Office Home & Student 2021 kèm Macbook chỉ còn 2,090,000
                  </h6>
                </li>
              </ul>
            </div>
          <div className="BaoHanh">
          <div className="box-infoProduct">
              <div className="iconCoucher d-flex">
                <GoShieldCheck />
                <p>Bao Hanh Toan Dien voi bao hanh mo rong</p>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <div className="ProductSelectPayment">
        <div className="sumProduct">
          <p>Tam Tinh</p>
          <p>0đ</p>
        </div>
        <div className="clickBuyNow">
          <Link to="/cart/payment"><button>Mua Ngay</button></Link>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Cart;
