const Dish = ({dish}) => {

    return(<div className='product-card'>
        
        <img src={`./${dish.image}.avif`} alt='dishes' className="img-menu"/>
        console.log(dish);
        <div className="box-menu">
        <p className='name-product'>{dish.title}</p>
        <h4 className='name-product'>{dish.price} ₽ <spen> <img src='https://icg-extreme.team/wp-content/uploads/2016/07/cart-full-128.png' width='35px' alt='basket' className="cart"/></spen></h4>
        <p className='about-product'>{dish.about}</p>
            </div>
           
    </div>)
}

export default Dish