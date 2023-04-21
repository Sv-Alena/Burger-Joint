import BuyBurger from '../../componentMain-page/buyBurger/BuyBurger';
import InfoCombo from '../../componentMain-page/infoAboutCombo/InfoCombo';
import ReserveTable from '../../componentMain-page/reserveTable/ReserveTable'
import Marketing from '../../componentMain-page/marketingBurger/Marketing';
import photo from './one.jpg';
import ButtomMenu from '../../componentMain-page/buttom-menu/buttom-menu';


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
        <ButtomMenu/> 
        </div>
    )
}

export default Home