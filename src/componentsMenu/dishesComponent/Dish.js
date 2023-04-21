import QuantityPortion from "./quantity-portion";
import { useState } from "react";
import { addItemInCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import "./dishes.css"

const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="dish_product-card">
      <img
        src={`./menuImage/${dish.image}.avif`}
        alt="dishes"
        className="dish_img-menu"
      />
      <div className="dish_box-menu">
        <p className="dish_title">{dish.title}</p>
        <h4 className="dish_price">{dish.price} ₽ </h4>
        <p className="dish_about">{dish.about}</p>
        <div className="dish_cart-block">
          <QuantityPortion quantity={quantity} setQuantity={setQuantity} />
          <img
            onClick={() => {
              dispatch(addItemInCart({ dish, quantity }));
            }}
            src="https://icg-extreme.team/wp-content/uploads/2016/07/cart-full-128.png"
            width="45px"
            alt="basket"
            className="basket"
          />
        </div>
      </div>
    </div>
  );
};

export default Dish;
