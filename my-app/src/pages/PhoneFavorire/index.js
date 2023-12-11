
import { useShoppingContext } from "../../components/Context/ShoppingContext";
import PhoneFavoriteItem from "./PhoneFavoriteItem";

function PhoneFavorite() {
  const { cartFavorites } = useShoppingContext();

  return (
    <div>
      <div className="inner">
        <h5>San Pham Ban Da Yeu Thich</h5>
        <div className="d-flex justify-content-start flex-wrap">
          {cartFavorites.map((item) => {
            console.log(item)
            const { id, img, price } = item;
            const {name}=item.phone;
            const items = item; // Gán items là tất cả các mục yêu thích
            return (
              <PhoneFavoriteItem
                items={items}
                item={{ name, id, img, price }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PhoneFavorite;
