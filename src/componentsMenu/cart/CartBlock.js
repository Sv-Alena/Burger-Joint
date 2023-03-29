const CartBlock = ({quantity, setQuantity}) => {
    const addItem = () =>{
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeItem = () =>{
        if(quantity <= 1) return
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return(<div className="btnCart">
        <button onClick={removeItem}>-</button>
        <span>{quantity}</span>
        <button onClick={addItem}>+</button>
        
    </div>)
}

export default CartBlock