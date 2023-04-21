import Dish from "./Dish"
import { getSelectedCategory } from "../../redux/dishesSlice"
import { useSelector } from 'react-redux'
import { dataDishes } from "../../dataMenu/dataDishes"
import "./dishes.css"

const Dishes = () =>{
    const selectedCategory = useSelector(getSelectedCategory)
    
    return(<div className="dishes_product-menu">
        {dataDishes
        .filter(dish =>{
            if(selectedCategory === 'ВСЕ') 
            return true;
            return selectedCategory === dish.category;
        })   
        .map(dish => <Dish key={dish.id} dish={dish}/>)}
        </div>
        
    )
}

export default Dishes;