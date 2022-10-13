import "./ShoppingCart.css";
import { useShoppingCart } from "./../Context/Context";
import CartItem from './../CartItem/CartItem';
import { formatCurenncy } from './../utilities/FormatCurency';
import { Users } from './../Users/Users';

const ShoppingCart = ({ cartOpen }) => {
  const { closeCart,itemCart } = useShoppingCart();
  return (
    <div className="cartShop">
      {cartOpen && (
        <div className="shoppingCart">
          <div className={ cartOpen === true ? 'itemCart' : "showShopingCart"}>
          <span className="close" onClick={closeCart}>
            <img src={require("../../images/close.png")} alt="" />
          </span>
                {
                  itemCart.map((item)=>{
                     return <CartItem key={item.id} {...item} />
                  })
                }
                <div className="total">
                  Total{formatCurenncy(itemCart.reduce((total,current)=>{
                    const item = Users.find((i) => i.id === current.id);
                    return total  + (item?.price || 0) * current.count
                  },0))}
                </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
