import classNames from "classnames/bind";
import styles from "./Home.modual.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
const cx = classNames.bind(styles);
const Home = ()=> {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7126/api/Products`)
        .then(res => setProduct(res.data));
  }, []);
  return (
    <div>
      <Container id={cx("logo")} >
        <div className="d-inline-flex">
          <a href="#" className={cx("border-logo-brand")}>
            <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
          </a>
          <a href="#" className={cx("border-logo-brand")}>
            <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
          </a>
          <a href="#" className={cx("border-logo-brand")}>
            <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
          </a>
          <a href="#" className={cx("border-logo-brand")}>
            <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
          </a>
          <a href="#" className={cx("border-logo-brand")}>
            <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
          </a>
          <a href="#" className={cx("border-logo-brand")}>
            <img className={cx("logo-brand")} src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="a"/>
          </a>
        </div>
        <Row>      
          {
            product.map(item =>{
              return(
                <Col md={3}>
                  <img src="logo192.png" alt=""/>
                  <h1> {item.phone.name} {item.color}</h1>
                  <Button style={{background:"white",color:"blue"}}>{item.rom}</Button>
                  <h3>Giá: {item.price}VND</h3>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default Home;
