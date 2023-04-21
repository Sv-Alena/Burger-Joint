import Filter from "./Filter"
import "./filter.css"

function AllCategory(){
    return(<div  className="all-category">
        
        {['ВСЕ', 'БУРГЕРЫ', 'СНЭКИ', 'СОУСЫ'].
        map((category) => <Filter category={category} key={category}/>
            )}
        </div>
    )
}
export default AllCategory