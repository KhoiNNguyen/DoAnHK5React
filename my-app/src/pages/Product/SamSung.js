import { useEffect, useState } from "react";
import styles from "./Product.modual.scss";
import Card from "react-bootstrap/Card";
import { FaHeart, FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import axiosClient from "../../components/axiosClient/axiosClient";
import { CiHeart } from "react-icons/ci";
import { useShoppingContext } from "../../components/Context/ShoppingContext";
      import { Breadcrumb } from "antd";
      import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
function Samsung() {
  const [phones, SetPhones] = useState([]);
  const [productSamsungs, setProductSamsungs] = useState([]);
  const{addCartItem,addFavotiteItem}=useShoppingContext();

  const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId, value) => {
    setSelectedCard(cardId);
    setTym(!value);
  };

  useEffect(() => {
    axiosClient.get("/Phones").then((res) => SetPhones(res.data));
    axiosClient.get("/Products").then((res) => setProductSamsungs(res.data));

  }, []);

  return (
    <div className="inner">
  <Breadcrumb className="mb-4" separator="›">
        <Breadcrumb.Item>
          <Link to="/">Điện thoại</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/Samsung">SamSung</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="sapsep">
        <h4>Sắp xếp theo</h4>
        <div className="d-flex">
          <div style={{ marginRight: 6 }}>
            <button>
              <FaSortAmountDown className="iconSapSep" />
              <span>giá cao-thấp</span>
            </button>
          </div>
          <div>
            <button>
              <FaSortAmountDownAlt className="iconSapSep" />
              <span>giá thấp-cao</span>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start flex-wrap">
        {productSamsungs.map((productSamsung) => {

          if(productSamsung.phone.brandId===2)
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
                  <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                    {productSamsung.phone.name}
                  </Card.Title>
                  <Card.Title
                    className="font-weight-bold"
                    style={{ height: "68px", fontSize: "1rem" }}
                  >
                   <p>
                      {productSamsung.price}
                    </p> 
                  </Card.Title>
                  <div className="d-flex justify-content-end PhoneLike">
                    <span>Yêu Thích</span>
                    <button
                      className="heart"
                      onClick={() => {addFavotiteItem(productSamsung)}
                      }
                    >
                       <CiHeart />
                    </button>
                    <button onClick={()=>addCartItem(productSamsung)} ><GiShoppingCart /></button>
                  </div>
                </Card.Body>
              </Card>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Samsung;
