import Card from "react-bootstrap/Card";
import { GiShoppingCart } from "react-icons/gi";
import { useShoppingContext } from "../../components/Context/ShoppingContext";



function PhoneFavoriteItem({items,item}) {
  const{addCartItem}=useShoppingContext();

    return ( <>
        <Card
              className="mt-3 p-3 col-3"
              style={{ width: "13.9rem", marginRight: 10 }}
            >
              <Card.Img
                alt="1"
                variant="top"
                style={{ height: "160px" }}
                src={item.img}
              />
              <Card.Body>
                <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
                  {item.name}
                </Card.Title>
                <Card.Title
                  className="font-weight-bold"
                  style={{ height: "68px", fontSize: "1rem" }}
                >
                  <p>{item.price}</p>
                </Card.Title>
                <div className="d-flex justify-content-end">
                <button onClick={()=>addCartItem(items)} ><GiShoppingCart /></button>
                </div>
              </Card.Body>
            </Card>

    </>  );
}

export default PhoneFavoriteItem;