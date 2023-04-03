import AllCategory from "./filter/AllCategory";
import Cart from "./cart/Cart";
import Dishes from "./dishesComponent/Dishes";
import './ProductsMenu.css'
import BoxCart from "./cart/BoxCart";


const MenuPage = () =>{
    return(<div className="box-menu">
        <div className="box-filter">

            <div className="menu-page_filter">
            <AllCategory />
            <div>
 <Cart/>
            </div>
           
            </div>
            
            <BoxCart />
        </div>
        <div>
            <Dishes />
            </div>
        </div>
        )}

        export default MenuPage