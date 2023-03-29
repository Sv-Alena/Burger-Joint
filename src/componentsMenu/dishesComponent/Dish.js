import CartBlock from "../cart/CartBlock";
import { useState } from "react";
import { addItemInCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    return(<div className='product-card'>
        
        <img src={`./menuImage/${dish.image}.avif`} alt='dishes' className="img-menu"/>
        <div className="box-menu">
        <p className='name-product'>{dish.title}</p>
        <h4 className='name-product'>{dish.price} ₽ </h4>
        <p className='about-product'>{dish.about}</p>
            <div className="box-cart">
                <CartBlock quantity={quantity} setQuantity={setQuantity}/> 
                <img onClick={() => {dispatch(addItemInCart({dish, quantity}))}} src='https://icg-extreme.team/wp-content/uploads/2016/07/cart-full-128.png' width='45px' alt='basket' className="cart"/>
        </div>
            </div>
           
    </div>)
}

export default Dish