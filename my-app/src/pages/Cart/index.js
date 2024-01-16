import { IoIosArrowBack } from "react-icons/io";
import "./Cart.modual.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { UpdateCart, getUserCart } from "../../features/user/userSlice";
import axiosClient from "../../components/axiosClient/axiosClient";
import { CiGift, CiTrash } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { removeProductCartItem } from "../../features/user/userSlice";
function Cart() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [phones, setPhones] = useState([]);
  const [sum, setSum] = useState();
  const [proDetail, setProDetail] = useState({});
  const userCartState = useSelector((state) => state?.auth?.cartProduct);
  const removeCartItem=(id)=>{
    dispatch(removeProductCartItem(id)) 
    setTimeout(()=>{
      dispatch(getUserCart())
    },300)
  }

  useEffect(()=>{
    if(proDetail!==null){
      dispatch(UpdateCart({id:proDetail?.id,quantity:proDetail?.quantity}))
     
    }
  },[proDetail])


  useEffect(() => {
    dispatch(getUserCart());
    axiosClient.get("Products").then((res) => setProducts(res.data));
    axiosClient.get("Phones").then((res) => setPhones(res.data));
  }, []);

console.log(sum)
  return (
    <>
      <div className="inner ">
        <div className=" w-50 m-auto">
          <div>
            <div className="header-cart d-flex">
              <div className="icon-headerCart">
                <Link to="/">
                  <IoIosArrowBack />
                </Link>
              </div>
              <div className="title-cart m-auto">
                <h5>Gio hang cua ban</h5>
              </div>
            </div>
            <div style={{ marginBottom: 160 }}>
              {products.map((product) => {
                const cartItem = userCartState?.find(
                  (item) => item.productId === product.id
                );

                if (cartItem) {
                  const { price } = product;
                  const {quantity,id}=cartItem;
                  const { name, image } = product.phone;

                  return (
                    <>
            <div className="d-flex">
              <div className="imageCart d-flex">
                <img
                  style={{ width: 100, height: 100 }}
                  src={`https://localhost:7126/images/product/${image}`}
                  alt="1"
                />
              </div>
              <div className="product-info ">
                <div className="d-flex justify-content-between align-items-start  mr-4">
                  <div>
                    <p>{name}</p>
                  </div>
                  <div>
                    <button onClick={()=>removeCartItem(id)}>
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
                      <p class="product__price--show">{price}</p>
                    </div>
                  </div>
                  <div class="action d-flex">
                   <input 
                    className="form-control"
                    type="number"
                    name=""
                    value={proDetail.quantity?proDetail.quantity:quantity}
                    onChange={(e)=>setProDetail({id:id,quantity:e.target.value})}
                   />
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
    </> 
                  );
                }

                return null; // or an alternative JSX if needed
              })}
            </div>
          </div>
        </div>
        <div className="ProductSelectPayment">
          <div className="sumProduct">
            <p>Tam Tinh</p>
            <p></p>
          </div>
          <div className="clickBuyNow">
            <Link to="/cart/payment">
              <button>Mua Ngay</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
