import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axiosClient from "../../components/axiosClient/axiosClient";
import { Link } from "react-router-dom";


function Iphone1() {
  const [phones, SetPhones] = useState([]);
  const [productApples, setProductApples] = useState([]);

  useEffect(() => {
    axiosClient.get("/Phones").then((res) => SetPhones(res.data));
    axiosClient.get("/Products").then((res) => setProductApples(res.data));

  }, []);

  return (
    <div className="inner">
      <div className="d-flex justify-content-start flex-wrap">
        {productApples.map((productApple) => {
                  const {id,name,screen,camSau,camTruoc,cpu,heDieuHanh,pin,sim,brandId,image}=productApple.phone
                  const {rom}=productApple;
                  const item=productApple;
            return (
              <Link  to='/ButtonSoSanh'
              state= {{ name,id,screen,camSau,camTruoc,cpu,rom,heDieuHanh,pin,sim,brandId,item,image,key:'phone1' }} >
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
                    {productApple.phone.name}
                  </Card.Title>
                  <Card.Title
                    className="font-weight-bold"
                    style={{ height: "68px", fontSize: "1rem" }}
                  >
                   <p>
                      {productApple.price}
                    </p> 
                  </Card.Title>
                </Card.Body>
              </Card>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Iphone1;

