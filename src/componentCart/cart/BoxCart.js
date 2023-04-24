import { getCartItems } from "../../redux/cartSlice";
import CartItems from "./cart-items";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cartSlice";

const BoxCart = ({ boxCart }) => {
  const itemsInCart = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="box-cart_item">
      <div>
        {itemsInCart.map((cartItem) => (
          <CartItems cartItem={cartItem} />
        ))}
      </div>

      <div className="box-cart_item-price"></div>
      <div>
        <span>Итого: </span>
        <span>{totalPrice} ₽</span>
      </div>

      
      <button className="box-cart_btn-total-price">Оформить заказ</button>
    </div>
  );
};

export default BoxCart;
