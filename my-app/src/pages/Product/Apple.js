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
import { Button, Dropdown } from "react-bootstrap";


function Apple() {
  const [phones, SetPhones] = useState([]);
  const [productApples, setProductApples] = useState([]);
  const [productRom, setProductRom] = useState([]);
  const [productScreen, setProductScreen] = useState([]);

  // const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  const{addCartItem,addFavotiteItem}=useShoppingContext();

  const callAll = () => {
    return axiosClient.get("/Products").then((res) => setProductApples(res.data));
  }

  const filter64GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '64GB'
    });
    setProductApples(rom)
  }
  const filter128GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '128GB'
    });
    setProductApples(rom)
  }
  const filter256GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '256GB'
    });
    setProductApples(rom)
  }
  const filter512GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '512GB'
    });
    setProductApples(rom)
  }
  const filter1TB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '1TB'
    });
    setProductApples(rom)
  }

  const filterScreen6_1 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.1 inches"
    });
    setProductApples(screen)
  }
  const filterScreen6_7 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.7 inches"
    });
    setProductApples(screen)
  }
  const filterScreen6_4 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.4 inches"
    });
    setProductApples(screen)
  }

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
    axiosClient.get("/Products").then((res) => setProductRom(res.data));
    axiosClient.get("/Products").then((res) => setProductScreen(res.data));
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
            <Button onClick={callAll}>
              <span>Tất cả</span>
            </Button>
          </div>
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
          <Dropdown>
            <Dropdown.Toggle variant="success">Rom</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item  onClick={filter64GB}>64GB</Dropdown.Item>
              <Dropdown.Item  onClick={filter128GB}>128GB</Dropdown.Item>
              <Dropdown.Item  onClick={filter256GB}>256GB</Dropdown.Item>
              <Dropdown.Item  onClick={filter512GB}>512GB</Dropdown.Item>
              <Dropdown.Item  onClick={filter1TB}>1TB</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success">Màn hình</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item  onClick={filterScreen6_7}>6.7 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_1}>6.1 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_4}>6.4 inches</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex justify-content-start flex-wrap">
        {productApples.map((productApple) => {
          if(productApple.phone.brandId===1){
                  const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=productApple.phone
                  const {rom,price,color}=productApple
                  const item=productApple;
            return (
               <Card
                className="mt-3 p-3 col-3"
                style={{ width: "13.9rem", marginRight: 10 }}
              >
                <Link  to='/phoneDetail'
                  state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
                <Card.Img
                  alt="1"
                  variant="top"
                  style={{ height: "160px" }}
                  src={`https://localhost:7126/images/product/${productApple.phone.image}`}
                />
                </Link> 
                <Card.Body>
                  <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                    {productApple.phone.name} {productApple.rom}
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
          }}
        )}
      </div>
    </div>
  );
}

export default Apple;
