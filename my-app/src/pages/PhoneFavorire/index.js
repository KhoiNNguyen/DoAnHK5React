import { useEffect, useState } from "react";
import axiosClient from "../../components/axiosClient/axiosClient";
import Card from "react-bootstrap/Card";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { removeToWishList } from "../../features/products/productSlice";
import { IoMdClose } from "react-icons/io";
import { UpdateCart, addProToCart } from "../../features/user/userSlice";

function PhoneFavorite() {
  const [cartFavorite, setCartFavorite] = useState([]);
  const [deleteFavorite,setDeleteFavorite]=useState(true)
  const [products, setProducts] = useState([]);
  const userCartState = useSelector((state) => state?.auth?.cartProduct);

  useEffect(() => {
    axiosClient.get("/Favorites").then((res) => setCartFavorite(res.data));
  }, [deleteFavorite]);

  useEffect(() => {
    axiosClient.get("/Products").then((res) => setProducts(res.data));
  }, []);

  const dispatch = useDispatch();

  const removeFromWishList = (id) => {
    dispatch(removeToWishList(id));
    setDeleteFavorite(!deleteFavorite)     
  };
  
  const userId = JSON.parse(localStorage.getItem("customer")).userId;
  
  const uploadToCard= (selectId,color,price) => {
      const findCart = userCartState?.find(item => item.productId === selectId);
      console.log(findCart)
      console.log(selectId);
      console.log(color);
      console.log(price);
      if (findCart) {
        const newQuantity = findCart.quantity + 1;
        dispatch(UpdateCart({ id:findCart.id, quantity: newQuantity }));
      } else {
        dispatch(addProToCart({
          userId: userId,
          productId: selectId,
          quantity: 1,
          color: color,
          price: price,
        }));
      }
      };
  

  return (
    <div>
      <div className="inner">
        <h5>San Pham Ban Da Yeu Thich</h5>
        <div className="d-flex justify-content-start flex-wrap">
          {cartFavorite.map((item) => {
            console.log(item);
            let idFavorite = item.id;
            if (item.userId === userId) {
              const product = products.find(
                (product) => item.productId === product.id
              );
              if (product) {
                const item=product;
                const {
                  id,
                  name,
                  screen,
                  camSau,
                  camTruoc,
                  cpu,
                  heDieuHanh,
                  pin,
                  sim,
                  brandId,
                } = product.phone;
                const { rom, price, color } = product;
                return (
                  <>
                    <Card
                      className="mt-3 p-3 col-3"
                      style={{ width: "13.9rem", marginRight: 10 }}
                    >
                      <Link
                        to="/phoneDetail"
                        state={{
                          name,
                          id,
                          screen,
                          camSau,
                          camTruoc,
                          cpu,
                          rom,
                          heDieuHanh,
                          pin,
                          sim,
                          brandId,
                          price,
                          color,
                          item,
                        }}
                      >
                        <Card.Img
                          alt="1"
                          variant="top"
                          src={`https://localhost:7126/images/product/${product.phone.image}`}
                        />
                      </Link>
                      <Card.Body>
                        <Card.Title
                          style={{ height: "40px", fontSize: "1rem" }}
                        >
                          {product.phone.name}
                        </Card.Title>
                        <Card.Title
                          className="font-weight-bold"
                          style={{ height: "68px", fontSize: "1rem" }}
                        >
                          {product.price}
                        </Card.Title>
                        <div className="d-flex justify-content-end justify-content-between ">
                          <button
                          onClick={(e) =>uploadToCard(item.id,color,price)}
                          >
                            <GiShoppingCart />
                          </button>
                          <button
                            onClick={() => removeFromWishList(idFavorite)}
                          >
                            <IoMdClose />
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </>
                );
              }
            }
            return null; // Make sure to include a default return or 'return null' if no conditions are met
          })}
        </div>
      </div>
    </div>
  );
}

export default PhoneFavorite;
