import { CiGift, CiTrash } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { GoPlus, GoShieldCheck } from "react-icons/go";
import { useShoppingContext } from "../../components/Context/ShoppingContext";

function CartItem({item}) {
    const { increaseQty, decreaseQty, removeCartItem } = useShoppingContext()
    return ( <>
            <div className="d-flex">
              <div className="imageCart d-flex">
                <img
                  style={{ width: 100, height: 100 }}
                  src={`https://localhost:7126/images/product/${item.image}`}
                  alt="1"
                />
              </div>
              <div className="product-info ">
                <div className="d-flex justify-content-between align-items-start  mr-4">
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <button onClick={()=>removeCartItem(item.id)}>
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
                      <p class="product__price--show">{item.price}</p>
                    </div>
                  </div>
                  <div class="action d-flex">
                    <button onClick={() => increaseQty(item.id)} style={{ height: 20 }}>
                      <GoPlus />
                    </button>
                    <p style={{ marginRight: 4, marginLeft: 4 }}>{item.qty}</p>
                    <button onClick={() => decreaseQty(item.id)}style={{ height: 20 }}>
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
    </> );
}

export default CartItem;