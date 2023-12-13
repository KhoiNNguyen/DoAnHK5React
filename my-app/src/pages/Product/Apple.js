import { useEffect, useState } from "react";
import styles from "./Product.modual.scss";
import Card from "react-bootstrap/Card";
import { FaHeart, FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import axiosClient from "../../components/axiosClient/axiosClient";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { useShoppingContext } from "../../components/Context/ShoppingContext";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function Apple() {
  const [phones, SetPhones] = useState([]);
  const [productApples, setProductApples] = useState([]);

  // const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const{addCartItem,addFavotiteItem}=useShoppingContext();

  const sortUpToDown = () =>{
    let apple = productApples.filter(item => {
        return item.phone.brandId === 1;
    })
    setProductApples(apple.sort((a,b) => a.price > b.price ? -1 : 1))
  }
  const sortDownToUp = () =>{
    let apple = productApples.filter(item => {
        return item.phone.brandId === 1;
    })
    setProductApples(apple.sort((a,b) => a.price > b.price ? 1 : -1))
  }
  const handleCardClick = (cardId, value) => {
    // setSelectedCard(cardId);
    // setTym(!value);
  };

  useEffect(() => {
    axiosClient.get("/Phones").then((res) => SetPhones(res.data));
    axiosClient.get("/Products").then((res) => setProductApples(res.data));

  }, []);
  //giá trị nhỏ hơn 0 thì a sẽ đứng trước b.
  //giá trị lớn hơn 0 thì a sẽ đứng sau b.
  //giá trị bằng 0 thì giữ nguyên thứ tự a, b.
  return (
    <div className="inner">
      <Breadcrumb className="mb-4" separator="›">
        <Breadcrumb.Item>
          <Link to="/">Điện thoại</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/Apple">Apple</Link>
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
        {productApples.map((productApple) => {
          if(productApple.phone.brandId===1)
            return (
              <Card
                className="mt-3 p-3 col-3"
                style={{ width: "13.9rem", marginRight: 10 }}
              >
                <Card.Img
                  alt="1"
                  variant="top"
                  style={{ height: "160px" }}
                  src={`https://localhost:7126/images/product/${productApple.phone.image}`}
                />
                <Card.Body>
                  <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                    {productApple.phone.name} {productApple.color} {productApple.rom}
                  </Card.Title>
                  <Card.Title
                    className="font-weight-bold"
                    style={{ height: "68px", fontSize: "1rem" }}
                  >
                   <p>
                      {productApple.price}
                    </p> 
                  </Card.Title>
                  <div className="d-flex justify-content-end PhoneLike">
                    <span>Yêu Thích</span>
                    <button
                      className="heart"
                      onClick={() => {addFavotiteItem(productApple)}
                      }
                    >
                       <CiHeart />
                    </button>
                    <button onClick={()=>addCartItem(productApple)} ><GiShoppingCart /></button>
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
