import BuyBurger from '../componentMain-page/buyBurger/BuyBurger';
import InfoCombo from '../componentMain-page/infoAboutCombo/InfoCombo';
import ReserveTable from '../componentMain-page/reserveTable/ReserveTable'
import MenuRouterBottom from '../componentMain-page/manuBottom/MenuRouterBottom';
import Marketing from '../componentMain-page/marketingBurger/Marketing';
import photo from './one.jpg';


function Home(){
    return(
        <div>
        <div className='img-start'>
        <img src={photo} alt='fone' width='100%'/>
        </div>
        <Marketing />
        <BuyBurger />
        <InfoCombo />
        <ReserveTable />
        <MenuRouterBottom /> 
        </div>
    )
}

export default Home