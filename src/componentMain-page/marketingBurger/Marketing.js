import burg2 from "./burg2.jpg";
import burg1 from "./burg1.jpg";
import burg3 from "./burg3.jpg";
import "./Marketing.css";


function Marketing() {
   
  return (
    <div>
      <div className="box-market">
        <div className="box-market-one">
          <img src={burg1} alt="burger"  className="box-market_burg-one"/>
        </div>
        <div className="box-market-two">
          <img src={burg2}  alt="burger" className="box-market_burg-two"/>
          <img src={burg3}  alt="burger"  className="box-market_burg-three"/>
        </div>
      </div>
      <div className="slogan-marketing">
        <div className="box-button">
          <p className="btnTestyBurg">ВСЕГДА ВКУСНЫЕ БУРГЕРЫ</p>
        </div>
        <div className="box-button">
          <p className="chooseEnjoy">ВЫБИРАЙТЕ & НАСЛАЖДАЙТЕСЬ</p>
        </div>
        <div className="box-button">
          <p className="slogan">
            Большие крафтовые бургеры, основная часть которых — это натуральные
            овощи, авторские соусы и котлеты из настоящей мраморной говядины
          </p>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
