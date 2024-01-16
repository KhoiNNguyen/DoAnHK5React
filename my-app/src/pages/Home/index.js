import Card from "react-bootstrap/Card";
import { CiHeart } from "react-icons/ci";
import { IoFlashOutline } from "react-icons/io5";
import SlideShow from "../../components/Slide";
import "./Home.modual.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../components/axiosClient/axiosClient";
import { useShoppingContext } from "../../components/Context/ShoppingContext";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../features/products/productSlice";

function Home() {
  const [productApples, setProductApples] = useState([]);
  const{addCartItem,addFavotiteItem}=useShoppingContext();
  const dispatch = useDispatch();

  let isRenderApple=false;
  let isRenderOppo=false;
  let isRenderSamSung=false;
  let isRenderVivo=false;
  let isRenderXiaomi=false;

  const[appleProducts,setAppleProducts]=useState([])
  const[samsungProducts,setSamsungProducts]=useState([])
  const[oppoProducts,setOppoProduct]=useState([])
  const[xiaomiProducts,setXiaomiProduct]=useState([])
  const[vivoProducts,setVivoProduct]=useState([])
  
  const [brands, setBrand] = useState([]);
  const addToWish=(id)=>{
    const userId = JSON.parse(localStorage.getItem("customer")).userId;
      dispatch(addToWishlist({
        userId: userId,
        productId: id,
    }))
  }
  useEffect(() => {
    axiosClient.get("/Brands").then((res) => setBrand(res.data));
    axiosClient.get("/Products").then((res) =>setProductApples(res.data));
  }, []);
  
  useEffect(() => {
  // Check if productApples has data before processing it
  if (productApples.length > 0) {
    const appleProducts = productApples.filter(product => product.phone.brandId === 1).slice(0, 5);
    setAppleProducts(appleProducts);
    const samsungProducts = productApples.filter(product => product.phone.brandId === 2).slice(0, 5);
    setSamsungProducts(samsungProducts);
    const oppoProducts = productApples.filter(product => product.phone.brandId === 3).slice(0, 5);
    setOppoProduct(oppoProducts);
    const xiaomiProducts = productApples.filter(product => product.phone.brandId === 4).slice(0, 5);
    setXiaomiProduct(xiaomiProducts);
    const vivoProducts = productApples.filter(product => product.phone.brandId === 5).slice(0, 5);
    setVivoProduct(vivoProducts);
  }
}, []);

  return (
    <>
      <SlideShow />
      <div className="inner">
        <div className="d-inline-flex justify-content-start" id="logo">
          {brands.map((brand) => {
            return (
              <Link to={`/${brand.name}`} className="border-logo-brand">
                <img
                  className="logo-brand"
                  src={`https://localhost:7126/images/brand/${brand.image}`}
                  alt="a"
                />
              </Link>
            );
          })}
        </div>
        <div className="FlashSale">
          <div className="headerFlashSale d-flex justify-content-between">
            <h3 style={{ marginTop: 10, color: "white" }}>
              F<IoFlashOutline />
              LASH SALE
            </h3>
            <div style={{ marginTop: 17 }} className="timeFlashSale">
              <strong> 1 </strong>
              <strong> 4 </strong>
              <strong> 7 </strong>
              <span> : </span>
              <strong> 5 </strong>
              <strong> 1 </strong>
              <span> : </span>
              <strong> 2 </strong>
              <strong> 9 </strong>
            </div>
          </div>
          <div className="bodyFlashSale d-flex">
            {productApples.map((productApple) => {
                if (productApple.phone.brandId === 1&&!isRenderApple){
                  isRenderApple=true;
                  const item=productApple;
                  const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=productApple.phone
                  const {rom,price,color}=productApple
                  return (  
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                  >
                    <Link  to='/phoneDetail'
                          state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
                    <div className="h-100">
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px" }}
                      src={`https://localhost:7126/images/product/${productApple.phone.image}`}
                      />
                    </div>
                      </Link>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1rem" }}>
                        {productApple.phone.name}
                      </Card.Title>
                      <Card.Title
                        className="font-weight-bold"
                        style={{ height: "68px", fontSize: "1rem" }}
                      >
                        <p>{productApple.price}</p>
                      </Card.Title>
                      <div className="d-flex justify-content-end PhoneLike">
                        <span>Yêu Thích</span>
                        <button
                          className="heart"
                          onClick={(e)=>addToWish(productApple.id)}
                        >
                          <CiHeart />
                        </button>
                      </div>
                    </Card.Body>
                    </Card>
                  );
                }
                else if (productApple.phone.brandId === 2&&!isRenderSamSung){
                  isRenderSamSung=true;
                  const item=productApple;
                  const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=productApple.phone
                  const {rom,price,color}=productApple
                  return (
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                    >
                    <Link  to='/phoneDetail'
                    state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
                    <div className="h-100">
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px",width:"100%" }}
                      src={`https://localhost:7126/images/product/${productApple.phone.image}`}
                    />
                    </div>
                    </Link>
                    <Card.Body
                    style={{padding:"8px 8px"}}
                    >
                      <Card.Title style={{ fontSize: "1rem" }}>
                        {productApple.phone.name}
                      </Card.Title>
                      <Card.Title
                        className="font-weight-bold"
                        style={{ height: "55px", fontSize: "1rem" }}
                      >
                        <p>{productApple.price}</p>
                      </Card.Title>
                      <div className="d-flex justify-content-end PhoneLike">
                        <span>Yêu Thích</span>
                        <button
                          className="heart"
                          onClick={() => {addToWish(productApple.id)}}
                        >
                          <CiHeart />
                        </button>
                      </div>
                    </Card.Body>
                    </Card>
                  );
                }
                else if (productApple.phone.brandId === 3&&!isRenderOppo){
                  isRenderOppo=true;
                  const item=productApple;
                  const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=productApple.phone
                  const {rom,price,color}=productApple
                  return (
                    
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                  >
                    <Link  to='/phoneDetail'
                          state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
                    <div className="h-100">
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px",width:"100%" }}
                      src={`https://localhost:7126/images/product/${productApple.phone.image}`}
                    />
                    </div>
                      </Link>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1rem" }}>
                        {productApple.phone.name}
                      </Card.Title>
                      <Card.Title
                        className="font-weight-bold"
                        style={{ height: "68px", fontSize: "1rem" }}
                      >
                        <p>{productApple.price}</p>
                      </Card.Title>
                      <div className="d-flex justify-content-end PhoneLike">
                        <span>Yêu Thích</span>
                        <button
                          className="heart"
                          onClick={() => {addToWish(productApple.id)}}
                        >
                          <CiHeart />
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                  );
                }
                else if (productApple.phone.brandId === 4&&!isRenderXiaomi){
                  isRenderXiaomi=true;
                  const item=productApple;
                  const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=productApple.phone
                  const {rom,price,color}=productApple
                  return (
                    
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                  >
                    <Link  to='/phoneDetail'
                    state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
                    <div className="h-100">
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px",width:"100%" }}
                      src={`https://localhost:7126/images/product/${productApple.phone.image}`}
                    />
                    </div>
                      </Link>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1rem" }}>
                        {productApple.phone.name}
                      </Card.Title>
                      <Card.Title
                        className="font-weight-bold"
                        style={{ height: "68px", fontSize: "1rem" }}
                      >
                        <p>{productApple.price}</p>
                      </Card.Title>
                      <div className="d-flex justify-content-end PhoneLike">
                        <span>Yêu Thích</span>
                        <button
                          className="heart"
                          onClick={() => {addToWish(productApple.id)}}
                        >
                          <CiHeart />
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                  );
                }
                else if (productApple.phone.brandId === 5&&!isRenderVivo){
                  isRenderVivo=true;
                  const item=productApple;
                  const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=productApple.phone
                  const {rom,price,color}=productApple
                  return (
                    
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                  >
                    <Link  to='/phoneDetail'
                          state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
                   <div className="h-100">
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px",width:"100%" }}
                      src={`https://localhost:7126/images/product/${productApple.phone.image}`}
                    />
                    </div>
                      </Link>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1rem" }}>
                        {productApple.phone.name}
                      </Card.Title>
                      <Card.Title
                        className="font-weight-bold"
                        style={{ height: "68px", fontSize: "1rem" }}
                      >
                        <p>{productApple.price}</p>
                      </Card.Title>
                      <div className="d-flex justify-content-end PhoneLike">
                        <span>Yêu Thích</span>
                        <button
                          className="heart"
                          onClick={() => {addToWish(productApple.id)}}
                        >
                          <CiHeart />
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                  );
                }
                  
            })}
          </div>
        </div>
        <div className="PhoneHot">
          <div className="titlePhoneHot d-flex justify-content-between">
            <h4> ĐIỆN THOẠI NỔI BẬT</h4>
            <div className="d-flex">
              <Link to="/Apple">Apple</Link>
              <Link to="/SamSung">SamSung</Link>
              <Link to="Xiaomi">Xiaomi</Link>
              <Link to="/OPPO">Oppo</Link>
              <Link to="/Vivo">Vivo</Link>
            </div>
          </div>
          <div className="contentPhoneHot d-flex justify-content-start flex-wrap">
            {appleProducts.map(appleProduct=>{
               const item=appleProduct;
               const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=appleProduct.phone
               const {rom,price,color}=appleProduct
             return(
             <> 
                    
             <Card
              className="mt-3 p-3 col-3"
              style={{ width: "14.2rem", marginRight: 14.5 }}
            >
               <Link  to='/phoneDetail'
                          state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
              <Card.Img
                alt="1"
                variant="top"
                style={{ height: "160px" }}
                src={`https://localhost:7126/images/product/${appleProduct.phone.image}`}
              />
                </Link>
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {appleProduct.phone.name}
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>{appleProduct.price}</p>
                </Card.Title>
                <div className="d-flex justify-content-end PhoneLike">
                  <span>Yêu Thích</span>
                  <button
                    className="heart"
                    onClick={() => {addToWish(appleProduct.id)}}
                  >
                    <CiHeart />
                  </button>
                </div>
              </Card.Body>
                    </Card>
            </>)
            })}
            {samsungProducts.map(samsungProduct=>{
               const item=samsungProduct;
               const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=samsungProduct.phone
               const {rom,price,color}=samsungProduct
             return (
               <Card
              className="mt-3 p-3 col-3"
              style={{ width: "14.2rem", marginRight: 14.5 }}
            >
              <Link  to='/phoneDetail'
              state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
              <Card.Img
                alt="1"
                variant="top"
                src={`https://localhost:7126/images/product/${samsungProduct.phone.image}`}
              />
                </Link>
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {samsungProduct.phone.name}
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>{samsungProduct.price}</p>
                </Card.Title>
                <div className="d-flex justify-content-end PhoneLike">
                  <span>Yêu Thích</span>
                  <button
                    className="heart"
                    onClick={() => {addToWish(samsungProduct.id)}}
                  >
                    <CiHeart />
                  </button>
                </div>
              </Card.Body>
                    </Card>
             )
            })}
             {oppoProducts.map(oppoProduct=>{
               const item=oppoProduct;
               const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=oppoProduct.phone
               const {rom,price,color}=oppoProduct
             return (
               <Card
              className="mt-3 p-3 col-3"
              style={{ width: "14.2rem", marginRight: 14.5 }}
            >
              <Link  to='/phoneDetail'
              state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
              <Card.Img
                alt="1"
                variant="top"
                src={`https://localhost:7126/images/product/${oppoProduct.phone.image}`}
              />
                </Link>
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {oppoProduct.phone.name}
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>{oppoProduct.price}</p>
                </Card.Title>
                <div className="d-flex justify-content-end PhoneLike">
                  <span>Yêu Thích</span>
                  <button
                    className="heart"
                    onClick={() => {addToWish(oppoProduct.id)}}
                  >
                    <CiHeart />
                  </button>
                </div>
              </Card.Body>
                    </Card>
             )
            })}
            {xiaomiProducts.map(xiaomiProduct=>{
               const item=xiaomiProduct;
               const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=xiaomiProduct.phone
               const {rom,price,color}=xiaomiProduct
             return (
               <Card
              className="mt-3 p-3 col-3"
              style={{ width: "14.2rem", marginRight: 14.5 }}
            >
              <Link  to='/phoneDetail'
              state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
              <Card.Img
                alt="1"
                variant="top"
                src={`https://localhost:7126/images/product/${xiaomiProduct.phone.image}`}
              />
                </Link>
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {xiaomiProduct.phone.name}
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>{xiaomiProduct.price}</p>
                </Card.Title>
                <div className="d-flex justify-content-end PhoneLike">
                  <span>Yêu Thích</span>
                  <button
                    className="heart"
                    onClick={() => {addToWish(xiaomiProduct.id)}}
                  >
                    <CiHeart />
                  </button>
                </div>
              </Card.Body>
                    </Card>
             )
            })}
            {vivoProducts.map(vivoProduct=>{
               const item=vivoProduct;
               const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=vivoProduct.phone
               const {rom,price,color}=vivoProduct
             return (
               <Card
              className="mt-3 p-3 col-3"
              style={{ width: "14.2rem", marginRight: 14.5 }}
            >
              <Link  to='/phoneDetail'
              state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
              <Card.Img
                alt="1"
                variant="top"
                src={`https://localhost:7126/images/product/${vivoProduct.phone.image}`}
              />
                </Link>
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {vivoProduct.phone.name}
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>{vivoProduct.price}</p>
                </Card.Title>
                <div className="d-flex justify-content-end PhoneLike">
                  <span>Yêu Thích</span>
                  <button
                    className="heart"
                    onClick={() => {addToWish(vivoProduct.id)}}
                  >
                    <CiHeart />
                  </button>
                </div>
              </Card.Body>
                    </Card>
             )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
