import { useEffect, useState } from "react";
import  "./Product.modual.scss";
import Card from "react-bootstrap/Card";
import {FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import axiosClient from "../../components/axiosClient/axiosClient";
import { CiHeart } from "react-icons/ci";
import { useShoppingContext } from "../../components/Context/ShoppingContext";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { Button, Dropdown } from "react-bootstrap";

function Apple() {
  const [phones, SetPhones] = useState([]);
  const [productOppos, setProductOppos] = useState([]);
  const [productRom, setProductRom] = useState([]);
  const [productScreen, setProductScreen] = useState([]);
  
  const{addCartItem,addFavotiteItem}=useShoppingContext();

  //Lọc ROM
  const filter64GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '64GB'
    });
    setProductOppos(rom)
  }
  const filter128GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '128GB'
    });
    setProductOppos(rom)
  }
  const filter256GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '256GB'
    });
    setProductOppos(rom)
  }
  const filter512GB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '512GB'
    });
    setProductOppos(rom)
  }
  const filter1TB = () =>{
    let rom= productRom.filter((item) => {
      return item.rom === '1TB'
    });
    setProductOppos(rom)
  }

  // Lọc Màn hình
  const filterScreen6_7 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.7 inches"
    });
    setProductOppos(screen)
  }
  const filterScreen6_6 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.6 inches"
    });
    setProductOppos(screen)
  }
  const filterScreen6_5 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.5 inches"
    });
    setProductOppos(screen)
  }
  const filterScreen6_4 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "6.4 inches"
    });
    setProductOppos(screen)
  }
  const filterScreen5_2 = () =>{
    let screen = productScreen.filter(item => {
      return item.phone.screen === "5.2 inches"
    });
    setProductOppos(screen)
  }

  const callAll = async () => {
    const res = await axiosClient.get("/Products");
    return setProductOppos(res.data);
  }

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

  useEffect(() => {
    axiosClient.get("/Phones").then((res) => SetPhones(res.data));
    axiosClient.get("/Products").then((res) => setProductOppos(res.data));
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
          <Link to="/OPPO">Oppo</Link>
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
              <Dropdown.Item  onClick={filterScreen6_6}>6.6 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_5}>6.5 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen6_4}>6.4 inches</Dropdown.Item>
              <Dropdown.Item  onClick={filterScreen5_2}>5.2 inches</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex justify-content-start flex-wrap">
        {productOppos.map((productOppo) => {
          if(productOppo.phone.brandId===3){
            const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId}=productOppo.phone
            const {rom,price,color}=productOppo
            const item=productOppo;
          
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
                  src={`https://localhost:7126/images/product/${productOppo.phone.image}`}
                />
                <Card.Body>
                  <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                    {productOppo.phone.name} {productOppo.rom}
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
              </Link>
            );
          }}
        )}
      </div>
    </div>
  );
}

export default Apple;
