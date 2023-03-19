const Menu = ({menu}) => {

    return(<div className='product-card'>
        
        <img src={`./${menu.image}.avif`} alt='dishes' className="img-menu"/>
        <div className="box-menu">
        <p className='name-product'>{menu.title}</p>
        <h4 className='name-product'>{menu.price} ₽ <spen> <img src='https://icg-extreme.team/wp-content/uploads/2016/07/cart-full-128.png' width='35px' alt='basket' className="cart"/></spen></h4>
        <p className='about-product'>{menu.about}</p>
            </div>
           
    </div>)
}

export default Menu