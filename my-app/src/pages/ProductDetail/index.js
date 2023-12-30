import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { RiRefund2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { BsShieldCheck, BsBox } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Table,
  Form,
} from "react-bootstrap";
import "./ProductDetail.modual.scss";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import axiosClient from "../../components/axiosClient/axiosClient";
import { useShoppingContext } from "../../components/Context/ShoppingContext";
import Comment from "../Comment/Comment";

const PhoneDetail = () => {

  // Sử dụng giá trị location
  const location = useLocation();
  // Kiểm tra xem location.state có tồn tại không trước khi truy cập thuộc tính bên trong nó console.log(lacation)
  const {
    id,
    name,
    screen,
    camSau,
    camTruoc,
    cpu,
    rom,
    heDieuHanh,
    pin,
    sim,
    brandId,
    price,
    color,
    item,
  } = location.state;

  const [imgs, setImg] = useState([]);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState({});
  const [prices,setPrices]=useState(price);
  const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [nameBr, setNameBr] = useState("");
  const [phones,setPhones] =useState([]);
  const [selectedColor, setSelectedColor] = useState(color); // State để lưu màu được chọn
  const [selectedRom, setSelectedRom] = useState(rom); // State để lưu Rom được chọn

  const handleColorChange = (id,color) => {
    setSelectedColor(color); // Cập nhật màu được chọn
  };
  const handleRomChange = (id,rom) => {
    setSelectedRom(rom); // Cập nhật màu được chọn
  };
  
  const { addCartItem } = useShoppingContext();

  const handleCardClick = (cardId, value) => {
    setSelectedCard(cardId);
    setTym(!value);
  };
  
  useEffect(() => {
    axiosClient.get("/Images").then((res) => setImg(res.data));
    axiosClient.get("/Products").then((res) => setProducts(res.data));
    axiosClient.get("/Phones").then((res) => setPhones(res.data));
  }, []);
  
  useEffect(()=>{
    products.map(product=>{
      if(product.phoneId===id&&product.color===selectedColor&&product.rom===selectedRom)
      setPrices(product.price);
    })
  },[selectedColor])

  useEffect(()=>{
    products.map(product=>{
      if(product.phoneId===id&&product.rom===selectedRom&&product.color===selectedColor)
      setPrices(product.price);
    })
  },[selectedRom])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axiosClient.get("/Brands").then((res) => {
      setBrands(res.data);
      // Logic để tìm và set giá trị cho nameBr dựa trên idBr
      const foundBrand = res.data.find((brand) => brand.id === brandId);
      if (foundBrand) {
        setNameBr(foundBrand.name);
      }
    });
  }, [brandId]);

  return (
    <div className="inner">
      <Breadcrumb className="mb-4" separator="›">
        <Breadcrumb.Item>
          <Link to="/">Điện thoại</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/${nameBr}`}>{nameBr}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <p>{name}</p>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pl-0 ml-0">
        <h5 style={{ display: "inline-block", marginRight: 20 }}>{name}</h5>
        <a href="1" style={{ color: "#f59e0b", marginRight: 10 }}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </a>
        <span>171 đánh giá</span>
      </Container>
      <Container className="border-top">
        <Row>
          <Col xl={7}>
            {/* Slider điện thoại */}
            <Carousel
              className="bg-light mt-4"
              data-bs-theme="dark"
              prevIcon={null}
              nextIcon={null}
            >
              {imgs.map((img) => {
                if (img.phoneId === id) {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={`https://localhost:7126/images/product/${img.name}`}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  );
                }
              })}
            </Carousel>

            {/* Bảo hành */}
            <Container className="mt-5 bg-light ">
              <Row className="detail-boder p-4">
                <Col xl={6} md={6} sm={6} className="p-2">
                  <span>
                    <RiRefund2Line
                      style={{
                        fontSize: "32px",
                        padding: "4px",
                        color: "blue",
                      }}
                    />{" "}
                    Hư gì đổi nấy <strong>12 tháng</strong> tại 3300 siêu thị
                    toàn quốc (miễn phí tháng đầu)
                  </span>
                </Col>
                <Col xl={6} md={6} sm={6} className="p-2">
                  <span>
                    <BsShieldCheck
                      style={{
                        fontSize: "32px",
                        padding: "4px",
                        color: "blue",
                      }}
                    />{" "}
                    Bảo hành <strong>chính hãng</strong> điện thoại{" "}
                    <strong>1 năm</strong> tại các trung tâm bảo hành hãng
                  </span>
                </Col>
                <Col xl={6} md={6} sm={6} className="p-2">
                  <span>
                    <BsBox
                      style={{
                        fontSize: "32px",
                        padding: "4px",
                        color: "blue",
                      }}
                    />{" "}
                    Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp
                    Lightning - Type{" "}
                  </span>
                </Col>
              </Row>
            </Container>
            {/* Ảnh thông tin điện thoại */}
            <Container className="bg-light ">
              <Row></Row>
              <Row className="mt-5">
                <h5>Thông tin sản phẩm</h5>
                <h5>
                  <strong>{nameBr}</strong> đã trình diện đến người dùng mẫu{" "}
                  <stong>điện thoại {name}</stong> với sự tuyên bố về một kỷ
                  nguyên mới của iPhone 5G, nâng cấp về màn hình và hiệu năng
                  hứa hẹn đây sẽ là smartphone cao cấp đáng để mọi người đầu tư
                  sở hữu
                </h5>
                <h5>Hiệu năng vượt trội, thách thức mọi giới hạn</h5>
                <p>
                  {nameBr} được trang bị chipset {cpu} - bộ xử lý được trang bị
                  lần đầu trên iPad Air 4 vừa cho ra mắt cách đây không lâu, mở
                  đầu xu thế chip 5 nm thương mại trên toàn thế giới.
                </p>
              </Row>
              <Row className="mt-5">
                <h5>Đánh giá Điện Thoại {name}</h5>
                <h5>
                  <strong>{nameBr}</strong> đã trình diện đến người dùng mẫu{" "}
                  <stong>điện thoại {name}</stong> với sự tuyên bố về một kỷ
                  nguyên mới của iPhone 5G, nâng cấp về màn hình và hiệu năng
                  hứa hẹn đây sẽ là smartphone cao cấp đáng để mọi người đầu tư
                  sở hữu
                </h5>
                <h5>Hiệu năng vượt trội, thách thức mọi giới hạn</h5>
                <p>
                  {name} được trang bị chipset {cpu} - bộ xử lý được trang bị
                  lần đầu trên iPad Air 4 vừa cho ra mắt cách đây không lâu, mở
                  đầu xu thế chip 5 nm thương mại trên toàn thế giới.
                </p>
              </Row>
            </Container>
          </Col>
          <Col xl={5}>
            <Container className="bg-light ">
              <Row>
                <Col className="mt-2">
                  <div className="box-linked" data-v-da80e888="">
                    <div className="list-linked" data-v-da80e888="">
                      {products.map((phone) => {
                        if (phone.phoneId === id && phone.color === color) {
                          return (
                            <>
                              <button className="btn-sosanh" onClick={()=>handleRomChange(phone.phoneId,phone.rom)}>
                                <span>{phone.rom}</span>
                              </button>
                            </>
                          );
                        }
                      })}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <div className="box-content">
                    <ul className="list-variants">
                      {products.map((phone) => {
                        if (phone.phoneId === id && phone.rom === rom) {
                          return (
                            <>
                               <button className="btn-sosanh1 primary" onClick={()=>handleColorChange(phone.phoneId,phone.color)}>
                                <span>{phone.color}</span>
                              </button>
                            </>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl={12} md={12} sm={12}>
                  <h5>Giá</h5>
                  <p className="h4 detail-price text-danger font-weight-bold">
                    {prices}
                  </p>
                </Col>
                <Col xl={12} md={12} sm={12}>
                  <div className="detail-boder p-2">
                    <h6>Khuyến mãi</h6>
                    <sub>
                      Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 15/11
                    </sub>
                    <div className="detail-boder">
                      <ul>
                        <li>
                          Cơ hội trúng 50 sổ tiết kiệm, tổng trị giá đến 500
                          triệu đồng
                        </li>
                        <li>
                          Thu cũ Đổi mới: Giảm đến 1 triệu (Tuỳ model máy cũ,
                          Không kèm Trả góp 0%, thanh toán qua cổng online, mua
                          kèm){" "}
                        </li>
                        <li>
                          Giảm thêm 5% khi mua cùng sản phẩm có giá cao hơn (trừ
                          Xe đạp, sản phẩm Apple, sản phẩm giá sốc)
                        </li>
                        <li>
                          Hoàn 200,000đ cho chủ thẻ tín dụng HOME CREDIT khi
                          thanh toán đơn hàng từ 5,000,000đ
                        </li>
                        <li>
                          Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi
                          thanh toán qua MOMO
                        </li>
                      </ul>
                    </div>
                    <div className="w-100">
                      <div className="d-flex">
                        <Button variant="danger" className="w-100" style={{marginLeft:4}}>
                          MUA NGAY GIÁ RẺ QUÁ{" "}
                        </Button>
                        <button
                          className="btn-cart"
                          onClick={() => addCartItem(item)}
                        >
                          <PiShoppingCartThin className="iconCartAdd" />
                        </button>
                      </div>
                      <Button
                        variant="primary"
                        style={{ width: "48%", margin: "1%" }}
                        className=" mt-1  "
                      >
                        MUA TRẢ GÓP
                      </Button>
                      <Button
                        variant="primary"
                        style={{ width: "48%", margin: "1%" }}
                        className=" mt-1 "
                      >
                        TRẢ GÓP QUA THẺ
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container className=" bg-light ">
              <Row className="ml-4">
                <h5>Cấu hình Điện Thoại {name}</h5>
                <Table striped bordered>
                  <tbody>
                    <tr>
                      <td>Màn hình:</td>
                      <td>{screen}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành:</td>
                      <td>{heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera sau:</td>
                      <td>{camSau}</td>
                    </tr>
                    <tr>
                      <td>Camera trước:</td>
                      <td>{camTruoc}</td>
                    </tr>
                    <tr>
                      <td>Chip:</td>
                      <td>{cpu}</td>
                    </tr>
                    <tr>
                      <td>Dung lượng lưu trữ:</td>
                      <td>{selectedRom}</td>
                    </tr>
                    <tr>
                      <td>SIM:</td>
                      <td>{sim}</td>
                    </tr>
                    <tr>
                      <td>Pin, Sạc:</td>
                      <td>{pin}, 20 W</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <div className="same-product">
        <div className="same-product-options-list is-flex is-justify-content-space-between">
          <div className="product-options-tabs">
            <div className="item button__tab active">SẢN PHẨM TƯƠNG TỰ</div>
          </div>
        </div>
        <div className="same-product-header mt-2">
          <h2>San Pham Tuong Tu</h2>
        </div>
        <div className="container">
          <div className="d-flex justify-content-start flex-wrap">
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
                <div className="d-flex justify-content-between">
                  <div className="star">
                    <a style={{ color: "#f59e0b", marginRight: 10 }} href="/">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </a>
                  </div>
                  <button
                    className="heart"
                    onClick={() => handleCardClick(1, tym)}
                  >
                    {selectedCard === 1 && tym ? <FaHeart /> : <CiHeart />}
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
                    onClick={() => handleCardClick(2, tym)}
                  >
                    {selectedCard === 2 && tym ? <FaHeart /> : <CiHeart />}
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
                    onClick={() => handleCardClick(3, tym)}
                  >
                    {selectedCard === 3 && tym ? <FaHeart /> : <CiHeart />}
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
                    onClick={() => handleCardClick(5, tym)}
                  >
                    {selectedCard === 5 && tym ? <FaHeart /> : <CiHeart />}
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* Đánh giá sản phẩm */}
      <Container className="bg-light shadow p-3 mb-5 bg-white rounded  mt-3">
        <Row>
          <Col>
            {/* <div>
                  <h2>Đánh giá sản phẩm</h2>
                  <p>Điểm đánh giá: {rating}</p>
                  <div> */}
            {/* Hiển thị các icon đánh giá */}
            {/* {stars.map((star) => (
                      <span
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        style={{
                          cursor: "pointer",
                          color: star <= rating ? "gold" : "gray",
                        }}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div> */}
            <div className="d-flex justify-start items-center">
              <p className="mt-1 mr-2">Lọc đánh giá theo</p>
              <button className="btn-danhgia">Tất cả</button>
              <button className="btn-danhgia">5 sao</button>
              <button className="btn-danhgia">4 sao</button>
              <button className="btn-danhgia">3 sao</button>
              <button className="btn-danhgia">2 sao</button>
              <button className="btn-danhgia">1 sao</button>
            </div>
            <div className="mt-4">
              <div className="d-flex items-start justify-start ">
                <div className="avatar overflow-hidden">
                  <img
                    alt="1"
                    src="https://didongviet.vn/images/pc/defaultavatar.png"
                  />
                </div>
                <div className="flex-column items-start justify-start pl-2 w-11/12">
                  <div className="d-flex items-center">
                    <span
                      style={{
                        display: "inline-block",
                        direction: "1tr",
                      }}
                    >
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inline-block",
                          position: "relative",
                        }}
                      >
                        &#9733;
                      </span>
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inline-block",
                          position: "relative",
                        }}
                      >
                        &#9733;
                      </span>
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inline-block",
                          position: "relative",
                        }}
                      >
                        &#9733;
                      </span>
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inline-block",
                          position: "relative",
                        }}
                      >
                        &#9733;
                      </span>
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inline-block",
                          position: "relative",
                        }}
                      >
                        &#9733;
                      </span>
                    </span>
                    <p className="text-brow text-sm mx-2">
                      2023-11-03T07:07:29.000Z
                    </p>
                  </div>
                  <div className="d-flex items-center">
                    <p className="text-ddv font-bold text-16">
                      <span className="text-16 mx-2 text-black font-normal">
                        sản phẩm tạm ổn, phục vụ ok
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Bình luận */}
      <Container className="bg-light shadow p-3 mb-5 bg-white rounded ">
        <Row>
          <Col>
            <div className=" my-2 rounded-lg  bg-white py-3 px-3">
              <div className="flex-column">
                <h4 className="text-danger font-weight-bold p-0">Bình luận</h4>
                        <Comment />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhoneDetail;
