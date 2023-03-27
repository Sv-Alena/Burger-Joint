import Dish from "./Dish"
import { getSelectedCategory } from "../../redux/dishesSlice"
import { useSelector } from 'react-redux'
import { dataDishes } from "../../dataMenu/dataDishes"


const Dishes = () =>{
    const selectedCategory = useSelector(getSelectedCategory)
    
    return(<div className="product-menu">
        {dataDishes
        .filter(dish =>{
            return selectedCategory === dish.category;
        })   
        .map(dish => <Dish key={dish.id} dish={dish}/>)}
        </div>
        
    )
}

export default Dishes;