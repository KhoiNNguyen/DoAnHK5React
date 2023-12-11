import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { IoFlashOutline } from "react-icons/io5";
import SlideShow from "../../components/Slide";
import style from "./Home.modual.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axiosClient from "../../components/axiosClient/axiosClient";
import PhoneFavorite from "../PhoneFavorire";


function Home() {
  const [productApples, setProductApples] = useState([]);
  const [productOppos, setProductOppos] = useState([]);
  const [productSamsungs, setProductSamsungs] = useState([]);
  const [productVivos, setProductVivos] = useState([]);
  const [productXiaomis, setProductXiaomis] = useState([]);
  let isRenderApple=false;
  let isRenderOppo=false;
  let isRenderSamSung=false;
  let isRenderVivo=false;
  let isRenderXiaomi=false;

  
  const [countApple, setCountApple] = useState(0);

  const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [brands, setBrand] = useState([]);

  useEffect(() => {
    axiosClient.get("/Brands").then((res) => setBrand(res.data));
    axiosClient.get("/Products").then((res) => setProductApples(res.data));
  }, []);

  const handleCardClick = (cardId, value) => {
    setSelectedCard(cardId);
    setTym(!value);
  };
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
                  const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,idBr}=productApple.phone
                  const {rom}=productApple
                  return (  
                    <Link  to='/phoneDetail'
                          state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,idBr }} >
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                  >
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px" }}
                      src="/images/detail/1/11.jpg"
                    />
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
                          onClick={() => handleCardClick(4, tym)}
                        >
                          {selectedCard === 4 && tym ? <FaHeart /> : <CiHeart />}
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                    </Link>
                  );
                }
                else if (productApple.phone.brandId === 2&&!isRenderSamSung){
                  isRenderSamSung=true;
                  return (
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                  >
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px" }}
                      src="/images/detail/1/11.jpg"
                    />
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
                          onClick={() => handleCardClick(4, tym)}
                        >
                          {selectedCard === 4 && tym ? <FaHeart /> : <CiHeart />}
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                  );
                }
                else if (productApple.phone.brandId === 3&&!isRenderOppo){
                  isRenderOppo=true;
                  return (
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                  >
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px" }}
                      src="/images/detail/1/11.jpg"
                    />
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
                          onClick={() => handleCardClick(4, tym)}
                        >
                          {selectedCard === 4 && tym ? <FaHeart /> : <CiHeart />}
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                  );
                }
                else if (productApple.phone.brandId === 4&&!isRenderXiaomi){
                  isRenderXiaomi=true;
                  return (
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                  >
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px" }}
                      src="/images/detail/1/11.jpg"
                    />
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
                          onClick={() => handleCardClick(4, tym)}
                        >
                          {selectedCard === 4 && tym ? <FaHeart /> : <CiHeart />}
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                  );
                }
                else if (productApple.phone.brandId === 5&&!isRenderVivo){
                  isRenderVivo=true;
                  return (
                    <Card
                    className="mt-3 p-3 col-3"
                    style={{ width: "13.9rem", marginRight: 10 }}
                  >
                    <Card.Img
                      alt="1"
                      variant="top"
                      style={{ height: "160px" }}
                      src="/images/detail/1/11.jpg"
                    />
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
                          onClick={() => handleCardClick(4, tym)}
                        >
                          {selectedCard === 4 && tym ? <FaHeart /> : <CiHeart />}
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
              <a>Apple</a>
              <a>SamSung</a>
              <a>Xiaomi</a>
              <a>Oppo</a>
              <a>Vivo</a>
            </div>
          </div>
          <div className="contentPhoneHot d-flex justify-content-start flex-wrap">
            <Card
              className="mt-3 p-3 col-3"
              style={{ width: "13.9rem", marginRight: 10 }}
            >
              <Card.Img
                alt="1"
                variant="top"
                style={{ height: "160px" }}
                src="/images/detail/1/11.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  Iphone 12 Pro Max123
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>3.500.000</p>
                </Card.Title>
                <div className="d-flex justify-content-end PhoneLike">
                  <span>Yêu Thích</span>
                  <button
                    className="heart"
                    onClick={() => handleCardClick(4, tym)}
                  >
                    {selectedCard === 4 && tym ? <FaHeart /> : <CiHeart />}
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
