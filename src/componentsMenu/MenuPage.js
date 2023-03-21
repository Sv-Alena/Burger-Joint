import AllCategory from "./filter/AllCategory";
import Cart from "./cart/Cart";
import Dish from "./dishesComponent/Dish";

const MenuPage = () =>{
    return(<div className="box-menu">
        <div className="box-filter">
            <AllCategory />
            <Cart />
            <Dish />
            
            </div>
        </div>
        )}

        export default MenuPage