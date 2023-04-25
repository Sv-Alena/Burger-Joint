import { useState } from "react";
import { useSelector } from "react-redux";
import BoxCart from "./BoxCart";
import QuantityItemsInCart from "./quantiy-items-in-cart";
import bag from "./icon-bag.png"
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
          src={bag}
          width="35px"
          alt="basket"
          className="cart_icons"
          onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        />
      </div>
      <div className="cart_box-product-list">
        {isCartMenuVisible && (
          <BoxCart onClick={btnBuy} />
        )}
      </div>
    </div>
  );
};

export default Cart;
