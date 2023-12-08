import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { IoFlashOutline } from "react-icons/io5";
import SlideShow from "../../components/Slide";
import style from"./Home.modual.scss"
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId, value) => {
    setSelectedCard(cardId);
    setTym(!value);
  };
    return ( <>
        <SlideShow />
        <div className="inner">
          <div className="d-inline-flex justify-content-start" id="logo" >
            <Link to="/apple" className="border-logo-brand">
              <img className="logo-brand" src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
            </Link>
            <Link to="/samsung" className="border-logo-brand">
              <img className="logo-brand" src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
            </Link>
            <Link to="/xiaomi" className="border-logo-brand">
              <img className="logo-brand" src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
            </Link>
            <Link to="/oppo" className="border-logo-brand">
              <img className="logo-brand" src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
            </Link>
            <Link to="/vivo" className="border-logo-brand">
              <img className="logo-brand" src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
            </Link>
        </div>
          <div className="FlashSale">
            <div className="headerFlashSale d-flex justify-content-between">
              <h3 style={{marginTop:10,color:"white"}}>F<IoFlashOutline />LASH SALE</h3>
              <div style={{marginTop:17}} className="timeFlashSale">
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
            <Link to="/phoneDetail">
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
                <Card.Title style={{  fontSize: "1rem" }}>
                  Iphone 12 Pro Max123
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>3.500.000</p>
                </Card.Title>
                <div className="d-flex justify-content-end">
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
                <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                  Iphone 12 Pro Max123
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>3.500.000</p>
                </Card.Title>
                <div className="d-flex justify-content-end">
                  <button
                    className="heart"
                    onClick={() => handleCardClick(4, tym)}
                  >
                    {selectedCard === 4 && tym ? <FaHeart /> : <CiHeart />}
                  </button>
                </div>
              </Card.Body>
            </Card>
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
                <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                  Iphone 12 Pro Max123
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>3.500.000</p>
                </Card.Title>
                <div className="d-flex justify-content-end">
                  <button
                    className="heart"
                    onClick={() => handleCardClick(4, tym)}
                  >
                    {selectedCard === 4 && tym ? <FaHeart /> : <CiHeart />}
                  </button>
                </div>
              </Card.Body>
            </Card>
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
                <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                  Iphone 12 Pro Max123
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>3.500.000</p>
                </Card.Title>
                <div className="d-flex justify-content-end">
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
            <div className="PhoneHot">
                <div className="titlePhoneHot d-flex justify-content-between">
                    <h4> ĐIỆN THOẠI NỔI BẬT</h4>
                    <div className="d-flex">
                        <a>Apple</a>
                        <a>SamSung</a>
                        <a>Xiaomi</a>
                        <a>Oppo</a>
                        <a>Vivo</a>
                        <a>Nokia</a>
                    </div>
                </div>
                <div className="contentPhoneHot d-flex justify-content-start flex-wrap">
                <Card
              className="mt-3 p-3 col-3"
              
            >
              <Card.Img
                alt="1"
                variant="top"
                style={{ height: "160px" }}
                src="/images/detail/1/11.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
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
            <Card
              className="mt-3 p-3 col-3"
            >
              <Card.Img
                alt="1"
                variant="top"
                style={{ height: "160px" }}
                src="/images/detail/1/11.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                  Iphone 12 Pro Max123
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>3.500.000</p>
                </Card.Title>
                <div className="d-flex justify-content-end">
                  <button
                    className="heart"
                    onClick={() => handleCardClick(4, tym)}
                  >
                    {selectedCard === 4 && tym ? <FaHeart /> : <CiHeart />}
                  </button>
                </div>
              </Card.Body>
            </Card>
            <Card
              className="mt-3 p-3 col-3"
              
            >
              <Card.Img
                alt="1"
                variant="top"
                style={{ height: "160px" }}
                src="/images/detail/1/11.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                  Iphone 12 Pro Max123
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>3.500.000</p>
                </Card.Title>
                <div className="d-flex justify-content-end">
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
    </> );
}

export default Home;