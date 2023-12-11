import { IoIosArrowBack } from "react-icons/io";

import style from "./Cart.modual.scss";
import { Link } from "react-router-dom";
import { useShoppingContext } from "../../components/Context/ShoppingContext";
import CartItem from "./CartItem";

function Cart() {
  const {cartItems,totalPrice}=useShoppingContext();
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
          <div style={{marginBottom:160}}>
              {cartItems.map(item=>{
                const { id, img, price,qty } = item;
                const {name}=item.phone
                return (
                <div 
                className="contentCart">
                  <CartItem item={{ id,name, img, price,qty }} />    
                </div>)
              })}
          </div>
        </div>
      </div>
      <div className="ProductSelectPayment">
        <div className="sumProduct">
          <p>Tam Tinh</p>
          <p>{totalPrice}</p>
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
