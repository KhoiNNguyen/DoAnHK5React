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
import { Button, Dropdown } from "react-bootstrap";
function Samsung() {
  const [phones, SetPhones] = useState([]);
  const [productSamsungs, setProductSamsungs] = useState([]);
  const{addCartItem,addFavotiteItem}=useShoppingContext();
  const [productRom, setProductRom] = useState([]);
  const [productScreen, setProductScreen] = useState([]);

  const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

//Lọc ROM
  const filter64GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '64GB'
    });
    setProductSamsungs(rom)
  }
  const filter128GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '128GB'
    });
    setProductSamsungs(rom)
  }
  const filter256GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '256GB'
    });
    setProductSamsungs(rom)
  }
  const filter512GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '512GB'
    });
    setProductSamsungs(rom)
  }
  const filter1TB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '1TB'
    });
    setProductSamsungs(rom)
  }

  // Lọc Màn hình
  const filterScreen6_7 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.7 inches"
    });
    setProductSamsungs(screen)
  }
  const filterScreen7_6 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "7.6 inches"
    });
    setProductSamsungs(screen)
  }
  const filterScreen6_5 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.5 inches"
    });
    setProductSamsungs(screen)
  }
  const filterScreen6_4 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.4 inches"
    });
    setProductSamsungs(screen)
  }
  const filterScreen6_8 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.8 inches"
    });
    setProductSamsungs(screen)
  }

  const sortUpToDown = () =>{
    let samsung = productSamsungs.filter(item => {
        return item.phone.brandId === 2;
    })
    setProductSamsungs(samsung.sort((a,b) => a.price > b.price ? -1 : 1))
  }
  const sortDownToUp = () =>{
    let samsung = productSamsungs.filter(item => {
        return item.phone.brandId === 2;
    })
    setProductSamsungs(samsung.sort((a,b) => a.price > b.price ? 1 : -1))
  }

  const callAll = async () => {
    const res = await axiosClient.get("/Products");
    return setProductSamsungs(res.data);
  }

  const handleCardClick = (cardId, value) => {
    setSelectedCard(cardId);
    setTym(!value);
  };

  useEffect(() => {
    axiosClient.get("/Phones").then((res) => SetPhones(res.data));
    axiosClient.get("/Products").then((res) => setProductSamsungs(res.data));
    axiosClient.get("/Products").then((res) => setProductRom(res.data));
    axiosClient.get("/Products").then((res) => setProductScreen(res.data));
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
              <Dropdown.Item  onClick={filterScreen7_6}>7.6 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_8}>6.8 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_7}>6.7 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_5}>6.5 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_4}>6.4 inches</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex justify-content-start flex-wrap">
        {productSamsungs.map((productSamsung) => {

          if(productSamsung.phone.brandId===2){
            const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=productSamsung.phone
            const {rom,price,color}=productSamsung
            const item=productSamsung;
          
            return (
              <Link  to='/phoneDetail'
              state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,price,color,item }} >
              <Card
                className="mt-3 p-3 col-3"
                style={{ width: "13.9rem", marginRight: 10 }}
              >
                <Card.Img
                  alt="1"
                  variant="top"
                  src={`https://localhost:7126/images/product/${productSamsung.phone.image}`}
                />
                <Card.Body>
                  <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                    {productSamsung.phone.name} {productSamsung.rom}
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
              </Link>
            );
          }}
        )}
      </div>
    </div>
  );
}

export default Samsung;
