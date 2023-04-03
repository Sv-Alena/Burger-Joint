import { useSelector } from "react-redux";
import{ getCartItems} from "../../redux/cartSlice"
import BoxCart from "./BoxCart";



const Cart = () => {
    
    const itemsInCart = useSelector(getCartItems)
    
    return(<div>
        <img src='https://icg-extreme.team/wp-content/uploads/2016/07/cart-full-128.png' width='40px' alt='basket' className="basket"/>
           <span className="cart_total-price"> 2588 ₽</span>
           {itemsInCart.map(boxCart => <BoxCart boxCart={boxCart} key={boxCart.id}/>)}
            
    </div>
    )
}
    
    
    
    
    export default Cart