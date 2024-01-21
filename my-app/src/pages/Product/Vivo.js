import { useEffect, useState } from "react";
import styles from "./Product.modual.scss";
import Card from "react-bootstrap/Card";
import { FaHeart, FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import axiosClient from "../../components/axiosClient/axiosClient";
import { CiHeart } from "react-icons/ci";
import { useShoppingContext } from "../../components/Context/ShoppingContext";
import { GiShoppingCart } from "react-icons/gi";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";

function Vivo() {
  const [phones, SetPhones] = useState([]);
  const{addCartItem,addFavotiteItem}=useShoppingContext();
  const [productVivos, setProductVivos] = useState([]);
  const [productRom, setProductRom] = useState([]);
  const [productScreen, setProductScreen] = useState([]);

  const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  //Lọc ROM
  const filter64GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '64GB'
    });
    setProductVivos(rom)
  }
  const filter128GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '128GB'
    });
    setProductVivos(rom)
  }
  const filter256GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '256GB'
    });
    setProductVivos(rom)
  }
  const filter512GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '512GB'
    });
    setProductVivos(rom)
  }
  const filter1TB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '1TB'
    });
    setProductVivos(rom)
  }

  // Lọc Màn hình
  const filterScreen6_56 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.56 inches"
    });
    setProductVivos(screen)
  }
  const filterScreen6_58 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.58 inches"
    });
    setProductVivos(screen)
  }
  const filterScreen6_51 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.51 inches"
    });
    setProductVivos(screen)
  }
  const filterScreen6_44 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.44 inches"
    });
    setProductVivos(screen)
  }

  const callAll = async () => {
    const res = await axiosClient.get("/Products");
    return setProductVivos(res.data);
  }

  const sortUpToDown = () =>{
    let vivo = productVivos.filter(item => {
        return item.phone.brandId === 5;
    })
    setProductVivos(vivo.sort((a,b) => a.price > b.price ? -1 : 1))
  }
  const sortDownToUp = () =>{
    let vivo = productVivos.filter(item => {
        return item.phone.brandId === 5;
    })
    setProductVivos(vivo.sort((a,b) => a.price > b.price ? 1 : -1))
  }

  const handleCardClick = (cardId, value) => {
    setSelectedCard(cardId);
    setTym(!value);
  };

  useEffect(() => {
    axiosClient.get("/Phones").then((res) => SetPhones(res.data));
    axiosClient.get("/Products").then((res) => setProductVivos(res.data));
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
          <Link to="/Vivo">Vivo</Link>
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
              <Dropdown.Item  onClick={filterScreen6_58}>6.58 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_56}>6.56 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_51}>6.51 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_44}>6.44 inches</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex justify-content-start flex-wrap">
        {productVivos.map((productVivo) => {

          if(productVivo.phone.brandId===5){
            const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=productVivo.phone
            const {rom,price,color}=productVivo
            const item=productVivo;
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
                  src={`https://localhost:7126/images/product/${productVivo.phone.image}`}
                />
                <Card.Body>
                  <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                    {productVivo.phone.name} {productVivo.rom}
                  </Card.Title>
                  <Card.Title
                    className="font-weight-bold"
                    style={{ height: "68px", fontSize: "1rem" }}
                  >
                   <p>
                      {productVivo.price}
                    </p> 
                  </Card.Title>
                  <div className="d-flex justify-content-end PhoneLike">
                    <span>Yêu Thích</span>
                    <button
                      className="heart"
                      onClick={() => {addFavotiteItem(productVivo)}
                      }
                    >
                       <CiHeart />
                    </button>
                    <button onClick={()=>addCartItem(productVivo)} ><GiShoppingCart /></button>
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

export default Vivo;
