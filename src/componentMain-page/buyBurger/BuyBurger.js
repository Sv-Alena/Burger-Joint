import { dataDishes } from "../../dataMenu/dataDishes";
import { useNavigate } from "react-router-dom";
import "./BuyBurger.css";

function BuyBurger() {
  const navigate = useNavigate()
  const burger = dataDishes.filter((item) => item.id > 18);
  return (
    <div className="box-threeBurger">
      {burger.map((item) => {
        const { id, title, image, about } = item;
        return (
          <div key={id} className="card-threeBurger">
            <img
              src={`./menuImage/${image}.jpg`}
              alt="burgers"
              className="card-threeBurger_img card-threeBurger_animation "
            />
            <div>
              {}
              <h2 className="name-threeBurg">{title}</h2>
              <p className="story-threeBurg">{about}</p>
              <div className="btnThreeBurg">
                <button className="three-burg_buttun" onClick={()=> navigate('../../pages/menu-page/MenuPage')}> ЗАКАЗАТЬ</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BuyBurger;
