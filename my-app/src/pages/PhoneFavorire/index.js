import Card from "react-bootstrap/Card";
import { GiShoppingCart } from "react-icons/gi";

function PhoneFavorite() {
    return ( <div>
        <div className="inner">
            <h5>San Pham Ban Da Yeu Thich</h5>
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
                    <GiShoppingCart />
                </div>
              </Card.Body>
            </Card>
        </div>
    </div> );
}

export default PhoneFavorite;