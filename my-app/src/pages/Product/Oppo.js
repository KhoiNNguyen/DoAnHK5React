import { useEffect, useState } from "react";
import styles from "./Product.modual.scss";
import Card from "react-bootstrap/Card";
import { FaHeart, FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import axiosClient from "../../components/axiosClient/axiosClient";
import { CiHeart } from "react-icons/ci";
import { useShoppingContext } from "../../components/Context/ShoppingContext";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { Button } from "react-bootstrap";

function Apple() {
  const [phones, SetPhones] = useState([]);
  const [productOppos, setProductOppos] = useState([]);
  
  const{addCartItem,addFavotiteItem}=useShoppingContext();

  const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const sortUpToDown = () =>{
    let oppo = productOppos.filter(item => {
        return item.phone.brandId === 3;
    })
    setProductOppos(oppo.sort((a,b) => a.price > b.price ? -1 : 1))
  }
  const sortDownToUp = () =>{
    let oppo = productOppos.filter(item => {
        return item.phone.brandId === 3;
    })
    setProductOppos(oppo.sort((a,b) => a.price > b.price ? 1 : -1))
  }
  const handleCardClick = (cardId, value) => {
    setSelectedCard(cardId);
    setTym(!value);
  };

  useEffect(() => {
    axiosClient.get("/Phones").then((res) => SetPhones(res.data));
    axiosClient.get("/Products").then((res) => setProductOppos(res.data));

  }, []);

  return (
    <div className="inner">
  <Breadcrumb className="mb-4" separator="›">
        <Breadcrumb.Item>
          <Link to="/">Điện thoại</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/OPPO">Oppo</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="sapsep">
        <h4>Sắp xếp theo</h4>
        <div className="d-flex">
          <div style={{ marginRight: 6 }}>
            <Button onClick={sortUpToDown}>
              <FaSortAmountDown className="iconSapSep" />
              <span>giá cao-thấp</span>
            </Button>
          </div>
          <div>
            <Button onClick={sortDownToUp}> 
              <FaSortAmountDownAlt className="iconSapSep" />
              <span>giá thấp-cao</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start flex-wrap">
        {productOppos.map((productOppo) => {

          if(productOppo.phone.brandId===3)
            return (
              <Card
                className="mt-3 p-3 col-3"
                style={{ width: "13.9rem", marginRight: 10 }}
              >
                <Card.Img
                  alt="1"
                  variant="top"
                  style={{ height: "160px" }}
                  src={`https://localhost:7126/images/product/${productOppo.phone.image}`}
                />
                <Card.Body>
                  <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                    {productOppo.phone.name} {productOppo.color} {productOppo.rom}
                  </Card.Title>
                  <Card.Title
                    className="font-weight-bold"
                    style={{ height: "68px", fontSize: "1rem" }}
                  >
                   <p>
                      {productOppo.price}
                    </p> 
                  </Card.Title>
                  <div className="d-flex justify-content-end PhoneLike">
                    <span>Yêu Thích</span>
                    <button
                      className="heart"
                      onClick={() => {addFavotiteItem(productOppo)}
                      }
                    >
                       <CiHeart />
                    </button>
                    <button onClick={()=>addCartItem(productOppo)} ><GiShoppingCart /></button>
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

export default Apple;
