import { useState } from "react";
import { useSelector } from "react-redux";
import BoxCart from "./BoxCart";
import QuantityItemsInCart from "./quantiy-items-in-cart";
import "./Cart.css";

const Cart = () => {
  const product = useSelector((state) => state.cart.itemsInCart);
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const btnBuy = () => {
    setIsCartMenuVisible(false);
  };

  return (
    <div className="cart">
      <div className="cart_cart-icon">
        <QuantityItemsInCart quantityItems={product.length} />
        <img
          src="https://icg-extreme.team/wp-content/uploads/2016/07/cart-full-128.png"
          width="40px"
          alt="basket"
          className="cart_icons"
          onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        />
      </div>
      <div className="cart_box-product-list">
        {isCartMenuVisible && (
          <BoxCart 
          //boxCart={boxCart}
          onClick={btnBuy} />
        )}
      </div>
    </div>
  );
};

export default Cart;
