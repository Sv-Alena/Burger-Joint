import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { dataDishes } from "../../dataMenu/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";
//import { useSelector } from "react-redux";

const CartItems = ({ cartItem }) => {
  const dishes = dataDishes.find((item) => item.id === cartItem.dishId);
  //const product = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(removeItemFromCart({ cartItem: cartItem.id }));
  };
  return (
    <div className="cart-item">
      <div>
        <spen>{dishes.title}</spen>
        <span> {cartItem.quantity}(шт.)</span>
      </div>

      <div className="cart-item_price">
        <spen>{dishes.price * cartItem.quantity} ₽</spen>
      </div>
{/* сделать функцию как компонент */}
      <span>
        <AiOutlineCloseCircle size={22} onClick={deleteItem} />
      </span>
    </div>
  );
};

export default CartItems;
