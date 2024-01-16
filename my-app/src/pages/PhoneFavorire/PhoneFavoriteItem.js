import Card from "react-bootstrap/Card";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToWishList } from "../../features/products/productSlice";
import { IoMdClose } from "react-icons/io";


function PhoneFavoriteItem({ items,idFavorite }) {

  const item=items;
  const dispatch = useDispatch();
  const removeFromWishList=(id)=>{
    dispatch(removeToWishList(id))
  }
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
            src={`https://localhost:7126/images/product/${items.phone.image}`}
          />
        </Link>
        <Card.Body>
          <Card.Title style={{ height: "40px", fontSize: "1rem" }}>
            {items.phone.name}
          </Card.Title>
          <Card.Title
            className="font-weight-bold"
            style={{ height: "68px", fontSize: "1rem" }}
          >
              {items.price}
          </Card.Title>
          <div className="d-flex justify-content-end justify-content-between ">
            <button >
              <GiShoppingCart />
            </button>
            <button onClick={()=>removeFromWishList(idFavorite)}>
            <IoMdClose />
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default PhoneFavoriteItem;
