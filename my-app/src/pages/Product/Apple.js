import classNames from "classnames/bind";
import styles from "./Product.modual.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";

const cx = classNames.bind(styles);
function Apple() {
  return (
    <div className="inner">
      <div className="sapsep">
        <h4>Sắp xếp theo</h4>
        <div className="d-flex">
          <div style={{marginRight:6}}>
            <button><FaSortAmountDown className="iconSapSep"/><span>giá cao-thấp</span></button>
          </div>
          <div>
            <button><FaSortAmountDownAlt className="iconSapSep" /><span>giá thấp-cao</span></button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around flex-wrap">
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
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Apple;
