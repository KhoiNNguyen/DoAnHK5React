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
import Style from "./ProductDetail.modual.scss";
import Card from "react-bootstrap/Card";
import { faAddressCard, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PhoneDetail = () => {
  const [tym, setTym] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId, value) => {
    setSelectedCard(cardId);
    setTym(!value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [rating, setRating] = useState(0);
  // Mảng chứa các icon đánh giá
  // const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  // Hàm xử lý sự kiện khi người dùng nhấp vào một icon đánh giá

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };
  return (
    <div className="inner">
      <Breadcrumb className="mb-4" separator="›">
        <Breadcrumb.Item>
          <Link to="/">Điện thoại</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/iphone">Điện thoại iPhone (Apple)</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Container className="pl-0 ml-0">
        <h5 style={{ display: "inline-block", marginRight: 20 }}>
          Điện thoại iPhone 12 128GB
        </h5>
        <a href="1" style={{ color: "#f59e0b", marginRight: 10 }}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </a>
        <span>171 đánh giá</span>
        <Link to="/phoneDetail/SoSanh">
        <button className="btn-sosanh">
          <FontAwesomeIcon icon={faPlus} />
          So sánh
        </button>
        </Link>
      </Container>
      <Container className="border-top">
        <Row>
          <Col xl={7}>
            {/* Slider điện thoại */}
            <Carousel
              className="bg-light "
              data-bs-theme="dark"
              prevIcon={null}
              nextIcon={null}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/1.jpg"
                  alt="First1 slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/2.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/3.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/4.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/6.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/7.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/8.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/9.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/10.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/11.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/12.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/13.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/detail/1/14.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
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
              <Row>
                <img
                  alt="1"
                  src="/images/detail/1/note.jpg"
                  style={{ width: "100%" }}
                />
              </Row>
              <Row className="mt-5">
                <h5>Thông tin sản phẩm</h5>
                <h5>
                  <strong>Apple</strong> đã trình diện đến người dùng mẫu{" "}
                  <stong>điện thoại iPhone 12 128GB</stong> với sự tuyên bố về
                  một kỷ nguyên mới của iPhone 5G, nâng cấp về màn hình và hiệu
                  năng hứa hẹn đây sẽ là smartphone cao cấp đáng để mọi người
                  đầu tư sở hữu
                </h5>
                <h5>Hiệu năng vượt trội, thách thức mọi giới hạn</h5>
                <p>
                  Phone 12 được trang bị chipset A14 Bionic - bộ xử lý được
                  trang bị lần đầu trên iPad Air 4 vừa cho ra mắt cách đây không
                  lâu, mở đầu xu thế chip 5 nm thương mại trên toàn thế giới.
                </p>
              </Row>
              <Row className="mt-5">
                <h5>Đánh giá Điện Thoại iPhone 12 128GB</h5>
                <h5>
                  <strong>Apple</strong> đã trình diện đến người dùng mẫu{" "}
                  <stong>điện thoại iPhone 12 128GB</stong> với sự tuyên bố về
                  một kỷ nguyên mới của iPhone 5G, nâng cấp về màn hình và hiệu
                  năng hứa hẹn đây sẽ là smartphone cao cấp đáng để mọi người
                  đầu tư sở hữu
                </h5>
                <h5>Hiệu năng vượt trội, thách thức mọi giới hạn</h5>
                <p>
                  Phone 12 được trang bị chipset A14 Bionic - bộ xử lý được
                  trang bị lần đầu trên iPad Air 4 vừa cho ra mắt cách đây không
                  lâu, mở đầu xu thế chip 5 nm thương mại trên toàn thế giới.
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
                      <a
                        href="https://cellphones.com.vn/iphone-15-512gb.html"
                        className="item-linked button__link linked-undefined false"
                        data-v-da80e888=""
                      >
                        <div data-v-da80e888="">
                          <strong>512GB</strong>
                        </div>{" "}
                        <span data-v-da80e888="">28.490.000 đ</span>
                      </a>
                      <a
                        href="https://cellphones.com.vn/iphone-15-256gb.html"
                        className="item-linked button__link linked-undefined false"
                        data-v-da80e888=""
                      >
                        <div data-v-da80e888="">
                          <strong>256GB</strong>
                        </div>{" "}
                        <span data-v-da80e888="">24.790.000 đ</span>
                      </a>
                      <a
                        href="https://cellphones.com.vn/iphone-15.html"
                        className="item-linked button__link linked-undefined active"
                        data-v-da80e888=""
                      >
                        <div data-v-da80e888="">
                          <strong>128GB</strong>
                        </div>{" "}
                        <span data-v-da80e888="">21.990.000 đ</span>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <div className="box-content">
                    <ul className="list-variants">
                      <li className="item-variant false disable">
                        <a
                          href="1"
                          data-index="0"
                          name="0"
                          title="Xanh"
                          className="button__change-color is-flex is-align-items-center disabled"
                        >
                          <img
                            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119_1_1.jpg"
                            width="50"
                            height="50"
                            alt="Samsung Galaxy S22 Ultra (12GB - 256GB)-Xanh"
                            loading="lazy"
                          />
                          <div className="is-flex is-flex-direction-column">
                            <strong className="item-variant-name">Xanh</strong>{" "}
                            <span>17.190.000₫</span>
                          </div>
                        </a>
                      </li>
                      <li
                        className="item-variant active
  false"
                      >
                        <a
                          href="1"
                          data-index="1"
                          name="1"
                          title="Đen"
                          className="button__change-color is-flex is-align-items-center"
                        >
                          <img
                            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_phantomblack_211119_3.jpg"
                            width="50"
                            height="50"
                            alt="Samsung Galaxy S22 Ultra (12GB - 256GB)-Đen"
                            loading="lazy"
                          />{" "}
                          <div className="is-flex is-flex-direction-column">
                            <strong className="item-variant-name">Đen</strong>{" "}
                            <span>17.190.000₫</span>
                          </div>
                        </a>
                      </li>
                      <li
                        className="item-variant false
  false"
                      >
                        <a
                          href="1"
                          data-index="2"
                          name="2"
                          title="Đỏ"
                          className="button__change-color is-flex is-align-items-center"
                        >
                          <img
                            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119_5.jpg"
                            width="50"
                            height="50"
                            alt="Samsung Galaxy S22 Ultra (12GB - 256GB)-Đỏ"
                            loading="lazy"
                          />{" "}
                          <div className="is-flex is-flex-direction-column">
                            <strong className="item-variant-name">Đỏ</strong>{" "}
                            <span>17.190.000₫</span>
                          </div>
                        </a>
                      </li>
                      <li
                        className="item-variant false
  disable"
                      >
                        <a
                          href="1"
                          data-index="3"
                          name="3"
                          title="Trắng"
                          className="button__change-color is-flex is-align-items-center disabled"
                        >
                          <img
                            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_phantomwhite_211119_1_2.jpg"
                            width="50"
                            height="50"
                            alt="Samsung Galaxy S22 Ultra (12GB - 256GB)-Trắng"
                            loading="lazy"
                          />{" "}
                          <div className="is-flex is-flex-direction-column">
                            <strong className="item-variant-name">Trắng</strong>{" "}
                            <span>17.190.000₫</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl={12} md={12} sm={12}>
                  <h5>Giá</h5>
                  <p className="h4 detail-price text-danger font-weight-bold">
                    10.490.000đ
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
                      <Button variant="danger" className="w-100">
                        MUA NGAY GIÁ RẺ QUÁ{" "}
                      </Button>
                      <button className="btn-cart"><PiShoppingCartThin className="iconCartAdd" /></button>
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
                <h5>Cấu hình Điện Thoại iPhone 12 128GB</h5>
                <Table striped bordered>
                  <tbody>
                    <tr>
                      <td>Màn hình:</td>
                      <td>OLED 6.1" Super Retina XDR</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành:</td>
                      <td>iOS 15</td>
                    </tr>
                    <tr>
                      <td>Camera sau:</td>
                      <td>2 camera 12 MP</td>
                    </tr>
                    <tr>
                      <td>Camera trước:</td>
                      <td>12 MP</td>
                    </tr>
                    <tr>
                      <td>Chip:</td>
                      <td>Apple A14 Bionic</td>
                    </tr>
                    <tr>
                      <td>RAM:</td>
                      <td>4 GB</td>
                    </tr>
                    <tr>
                      <td>Dung lượng lưu trữ:</td>
                      <td>128 GB</td>
                    </tr>
                    <tr>
                      <td>SIM:</td>
                      <td>1 Nano SIM & 1 eSIM Hỗ trợ 5G</td>
                    </tr>
                    <tr>
                      <td>Pin, Sạc:</td>
                      <td>2815 mAh, 20 W</td>
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
              <div className="d-flex items-start justify-start  ">
                <div className="avatar overflow-hidden pr-5 ml-5">
                  <img
                    alt="1"
                    src="https://didongviet.vn/images/pc/defaultavatar.png"
                  />
                </div>
                <div className="flex-column items-start justify-start px-3 w-11/12">
                  <div className="d-flex items-center">
                    <p className="text-ddv font-bold text-16 mt-1">
                      Di Động Việt xin chào Anh Tân ạ! Di động việt xin chân
                      thành cảm ơn Anh Tài đã tin tưởng và sử dụng dịch vụ cũng
                      như sản phẩm tại Di Động Việt ạ! Di Động Việt hy vọng tiếp
                      được phục vụ Anh Tài trong tương lai ạ !
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
                <div className="mb-5">
                  <Form>
                    <Row className="flex flex-wrap md:flex-nowrap w-full items-start h-full justify-between my-2">
                      <Col md={7} className="w-full h-full mb-3 md:mb-0">
                        <Form.Group className="mantine-InputWrapper-root mantine-Textarea-root mantine-1m3pqry">
                          <Form.Control
                            as="textarea"
                            className="rounded-lg border-neutral-300 mantine-Input-input mantine-Textarea-input mantine-1jx8v2y"
                            id="mantine-r8"
                            placeholder="Nhận xét về sản phẩm"
                            rows="6"
                            aria-invalid="false"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={5} className="w-full flex flex-col md:px-2">
                        <Form.Group className="mantine-InputWrapper-root mantine-TextInput-root mantine-1m3pqry">
                          <Form.Control
                            type="text"
                            className="rounded-lg border-neutral-300 mb-4 mantine-Input-input mantine-TextInput-input mantine-1gixdds"
                            id="mantine-r9"
                            placeholder="Họ và tên"
                            aria-invalid="false"
                            value=""
                          />
                        </Form.Group>
                        <Form.Group className="mantine-InputWrapper-root mantine-TextInput-root mantine-1m3pqry">
                          <Form.Control
                            type="text"
                            className="rounded-lg border-neutral-300 mb-4 mantine-Input-input mantine-TextInput-input mantine-1gixdds"
                            id="mantine-ra"
                            placeholder="Số điện thoại"
                            aria-invalid="false"
                            value=""
                          />
                        </Form.Group>
                        <Button
                          variant="primary"
                          type="submit"
                          className="mantine-UnstyledButton-root mantine-Button-root bg-ddv hover:bg-ddv text-white rounded-lg cursor-pointer mt-2 mantine-ijj40k"
                          style={{ width: "100%", height: "44px" }}
                        >
                          Gửi
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div className="pt-4">
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
                            Có loại Ram 6gb chưa e?
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex items-start justify-start  ">
                    <div className="avatar overflow-hidden pr-5 ml-5">
                      <img
                        alt="1"
                        src="https://didongviet.vn/images/pc/defaultavatar.png"
                      />
                    </div>
                    <div className="flex-column items-start justify-start px-3 w-11/12">
                      <div className="d-flex items-center">
                        <p className="text-ddv font-bold text-16 mt-1">
                          Di Động Việt xin chào Anh Hải ạ !<br />
                          Dạ sản phẩm anh quan tâm em tạm hết hiện chỉ còn ram
                          4gb Samsung Galaxy A05s 128GB Chính Hãng giá chỉ từ
                          3.790.000.
                          <br />
                          Ưu đãi khi mua cùng máy
                          <br />
                          Tặng PMH 200.000đ - Gía mua ngay 3.590.000đ (Tham khảo
                          bảng giá hôm nay tại đây)
                          <br />
                          Tặng thêm voucher 100.000đ cho khách hàng mới
                          <br />
                          Giảm thêm 5%, tối đa 500.000đ cho Tài xế công nghệ
                          <br />
                          Tặng thêm đến 2.000.000đ khi thu cũ đổi mới (tùy model
                          máy cũ)
                          <br />
                          Để được tư vấn chi tiết hơn, Anh vui lòng liên hệ tổng
                          đài 1800 6018 (miễn phí). Trân trọng !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
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
                            Có loại Ram 6gb chưa e?
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex items-start justify-start  ">
                    <div className="avatar overflow-hidden pr-5 ml-5">
                      <img
                        alt="1"
                        src="https://didongviet.vn/images/pc/defaultavatar.png"
                      />
                    </div>
                    <div className="flex-column items-start justify-start px-3 w-11/12">
                      <div className="d-flex items-center">
                        <p className="text-ddv font-bold text-16 mt-1">
                          Di Động Việt xin chào Anh Hải ạ !<br />
                          Dạ sản phẩm anh quan tâm em tạm hết hiện chỉ còn ram
                          4gb Samsung Galaxy A05s 128GB Chính Hãng giá chỉ từ
                          3.790.000.
                          <br />
                          Ưu đãi khi mua cùng máy
                          <br />
                          Tặng PMH 200.000đ - Gía mua ngay 3.590.000đ (Tham khảo
                          bảng giá hôm nay tại đây)
                          <br />
                          Tặng thêm voucher 100.000đ cho khách hàng mới
                          <br />
                          Giảm thêm 5%, tối đa 500.000đ cho Tài xế công nghệ
                          <br />
                          Tặng thêm đến 2.000.000đ khi thu cũ đổi mới (tùy model
                          máy cũ)
                          <br />
                          Để được tư vấn chi tiết hơn, Anh vui lòng liên hệ tổng
                          đài 1800 6018 (miễn phí). Trân trọng !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
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
                            Có loại Ram 6gb chưa e?
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex items-start justify-start  ">
                    <div className="avatar overflow-hidden pr-5 ml-5">
                      <img
                        alt="1"
                        src="https://didongviet.vn/images/pc/defaultavatar.png"
                      />
                    </div>
                    <div className="flex-column items-start justify-start px-3 w-11/12">
                      <div className="d-flex items-center">
                        <p className="text-ddv font-bold text-16 mt-1">
                          Di Động Việt xin chào Anh Hải ạ !<br />
                          Dạ sản phẩm anh quan tâm em tạm hết hiện chỉ còn ram
                          4gb Samsung Galaxy A05s 128GB Chính Hãng giá chỉ từ
                          3.790.000.
                          <br />
                          Ưu đãi khi mua cùng máy
                          <br />
                          Tặng PMH 200.000đ - Gía mua ngay 3.590.000đ (Tham khảo
                          bảng giá hôm nay tại đây)
                          <br />
                          Tặng thêm voucher 100.000đ cho khách hàng mới
                          <br />
                          Giảm thêm 5%, tối đa 500.000đ cho Tài xế công nghệ
                          <br />
                          Tặng thêm đến 2.000.000đ khi thu cũ đổi mới (tùy model
                          máy cũ)
                          <br />
                          Để được tư vấn chi tiết hơn, Anh vui lòng liên hệ tổng
                          đài 1800 6018 (miễn phí). Trân trọng !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
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
                            Có loại Ram 6gb chưa e?
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex items-start justify-start  ">
                    <div className="avatar overflow-hidden pr-5 ml-5">
                      <img
                        alt="1"
                        src="https://didongviet.vn/images/pc/defaultavatar.png"
                      />
                    </div>
                    <div className="flex-column items-start justify-start px-3 w-11/12">
                      <div className="d-flex items-center">
                        <p className="text-ddv font-bold text-16 mt-1">
                          Di Động Việt xin chào Anh Hải ạ !<br />
                          Dạ sản phẩm anh quan tâm em tạm hết hiện chỉ còn ram
                          4gb Samsung Galaxy A05s 128GB Chính Hãng giá chỉ từ
                          3.790.000.
                          <br />
                          Ưu đãi khi mua cùng máy
                          <br />
                          Tặng PMH 200.000đ - Gía mua ngay 3.590.000đ (Tham khảo
                          bảng giá hôm nay tại đây)
                          <br />
                          Tặng thêm voucher 100.000đ cho khách hàng mới
                          <br />
                          Giảm thêm 5%, tối đa 500.000đ cho Tài xế công nghệ
                          <br />
                          Tặng thêm đến 2.000.000đ khi thu cũ đổi mới (tùy model
                          máy cũ)
                          <br />
                          Để được tư vấn chi tiết hơn, Anh vui lòng liên hệ tổng
                          đài 1800 6018 (miễn phí). Trân trọng !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhoneDetail;
