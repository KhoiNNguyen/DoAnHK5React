import Card from "react-bootstrap/Card";
import { GiShoppingCart } from "react-icons/gi";
import { useShoppingContext } from "../../components/Context/ShoppingContext";
import { Link } from "react-router-dom";

function PhoneFavoriteItem({ items, item }) {
  const { addCartItem } = useShoppingContext();
  console.log(items, item);
  const {
    id,
    name,
    screen,
    camSau,
    camTruoc,
    cpu,
    heDieuHanh,
    pin,
    sim,
    brandId,
  } = items.phone;
  const { rom, price, color } = items;
  return (
    <>
      <Card
        className="mt-3 p-3 col-3"
        style={{ width: "13.9rem", marginRight: 10 }}
      >
        <Link
          to="/phoneDetail"
          state={{
            name,
            id,
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
          }}
        >
          <Card.Img
            alt="1"
            variant="top"
            style={{ height: "160px" }}
            src={`https://localhost:7126/images/product/${item.image}`}
          />
        </Link>
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
            <button onClick={() => addCartItem(items)}>
              <GiShoppingCart />
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default PhoneFavoriteItem;
