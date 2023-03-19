import foneBottom from './fonBottom.jpg';
import './MenuBottom.css'

function MenuRouterBottom() {
    return(
        <div className ='box-bottom'>

            <img src={foneBottom} width = '100%' alt='foneBottom' className='imgPhotoBottom'/>
            <div className='burger-Bottom'>
            <p className="burger-logo"><span><img src='https://cdn.onlinewebfonts.com/svg/download_485179.png' width='60px'/>
        </span> BURGER HOUSE</p>
            </div>
        </div>
    )
}

export default MenuRouterBottom