import './Marketing.css'
import burg2 from './burg2.jpg';
import burg1 from './burg1.jpg';
import burg3 from './burg3.jpg';

function Marketing() {
    return(
    <div>
        <div className="box-market">
        <div className="box-market-one">
            <img src={burg1} width='650px'  alt='burger'/>
        </div>
        <div className="box-market-two">
            <img src={burg2} width='550' height='200px' alt='burger'/>
            <img src={burg3} width='550' height='200px' alt='burger' />
        </div>
        </div>
        {/* <img src='https://w7.pngwing.com/pngs/914/693/png-transparent-line-angle-brand-logo-up-angle-triangle-logo.png' width='100px' height='100px' className="arrow"/> */}
        <div className='slogan-marketing'>
        <div className="box-button">
                <p className="btnTestyBurg">ВСЕГДА ВКУСНЫЕ БУРГЕРЫ</p>
            </div>
            <div className="box-button">
                <h2 className="chooseEnjoy">ВЫБИРАЙТЕ & НАСЛАЖДАЙТЕСЬ</h2>
                <h3>Новинки этой недели</h3>
            </div>
            <div className="box-button">
                <p className="slogan">Большие крафтовые бургеры, основная часть которых — это натуральные овощи, авторские соусы и котлеты из настоящей мраморной говядины</p>
            </div>
            </div>
    </div>)
}

export default Marketing