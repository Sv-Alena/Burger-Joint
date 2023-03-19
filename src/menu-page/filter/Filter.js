import { getSelectedCategory } from "../../redux/dishesSlice"
//импортировать юзселектор

const Filter = ({category}) => {
    
    const selectedCategory = useSelector(getSelectedCategory)
    return(<div>
        <p className="filter">{category}</p>
        
    </div>

    )
}

export default Filter