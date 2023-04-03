import Filter from "./Filter"

function AllCategory(){
    return(<div  className="category">
        
        {['ВСЕ', 'БУРГЕРЫ', 'СНЭКИ', 'СОУСЫ'].
        map((category) => <Filter category={category} key={category}/>
            )}
        </div>
    )
}
export default AllCategory