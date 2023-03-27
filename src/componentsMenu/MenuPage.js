import AllCategory from "./filter/AllCategory";
import Cart from "./cart/Cart";
import Dishes from "./dishesComponent/Dishes";
import './ProductsMenu.css'


const MenuPage = () =>{
    return(<div className="box-menu">
        <div className="box-filter">
            <AllCategory />
            <Cart />
            <Dishes />
           
            </div>
        </div>
        )}

        export default MenuPage