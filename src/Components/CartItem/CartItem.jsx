import { useShoppingCart } from "./../Context/Context";
import { Users } from "./../Users/Users";
import "./CartItem.css";
// import storeItems from "../data/items.json"
import { formatCurenncy } from "./../utilities/FormatCurency";

const CartItem = ({ id, count }) => {
  const { removeAllCart } = useShoppingCart();
  const item = Users.find((i) => i.id === id);
  if (item == null) {
    return null;
  }

  return (
    <div className="imgBar">
      <div className="imgBarOne">
        <div className="img">
          <img src={item.imgUrl} alt="" />
        </div>
        <div className="title">
          {item.name}
          {count > 1 && <span className="text-muted">x{count}</span>}
          <div className="priceItemOne">{formatCurenncy(item.price)}</div>
        </div>
      </div>

      <div className="imgBarTwo">
        <div className="priceItemTwo">{formatCurenncy(item.price * count)}</div>
        <button className="button" onClick={() => removeAllCart(item.id)}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
