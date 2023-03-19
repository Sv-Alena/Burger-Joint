import Filter from "./Filter"

function FilterCategory(){
    return(<div>
        
        {['ВСЕ', 'БУРГЕРЫ', 'СНЭКИ', 'СОУСЫ'].
        map(category => <Filter category={category}/>
            )}
        </div>
    )
}
export default FilterCategory