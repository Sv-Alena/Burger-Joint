

const QuantityItemsInCart = ({quantityItems = 0 }) => {
   
    return quantityItems > 0 ? (
        <div className="quantity-items">
            {quantityItems}
        </div>
    ): null
}

export default QuantityItemsInCart