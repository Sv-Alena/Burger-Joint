import { dataMenu } from "../../dataMenu/dataMenu"
import Menu from "./Menu"
import '../ProductsMenu.css'
import FilterCategory from "../filter/FilterCategory"
import Cart from "../cart/Cart"

const ProductsMenu = () =>{
    return(<div className="box-menu">
        <div  className="box-filter">
            <FilterCategory/>
            <Cart />
            </div>
        <div className="product-menu">
            
        {dataMenu.map(menu => <Menu menu={menu}/>)}
        </div>
        </div>
    )
}

export default ProductsMenu