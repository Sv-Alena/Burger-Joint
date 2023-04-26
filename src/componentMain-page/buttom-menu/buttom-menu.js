import logo from "./icons/whaitBurg.png";
import mail from "./icons/mail.png";
import geo from "./icons/гео-метка.png";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialVkontakte } from "react-icons/sl";
import "./buttom-menu.css";


const ButtomMenu = () => {
  return (
    <div className="fon-buttom">
      <div className="fon-buttom_logo">
        <img src={logo} className="bottom-menu_logo" />
        <p className="bottom-menu_logo-name">BURGER HOUSE</p>
      </div>

      <div className="bottom-menu_box-info">
        <div className="bottom-menu_box-info-job">
          <p className="bottom-menu_box-info-text">
            Наше кафе работает для вас каждый день без выходных. Мы всегда рады
            новым гостям! Для вас всегда свежая выпечка.
          </p>
        </div>
        <div className="bottom-menu_box-info-contacts">
          <img src={geo} className="logo-geo" />
          <span className="bottom-menu_box-info-adres">
            {" "}
            Москва, ул. Ивана Сусанина, д.15
          </span>
          <div>
            <img src={mail} className="logo-mail" />
            <span className="bottom-menu_box-info-adres">
              {" "}
              Burger_House@mail.com
            </span>
          </div>
        </div>
        <div className="bottom-menu_box-social">
          <div className="bottom-menu_box-social-star">
            <p className="bottom-menu_box-social-star-text">
              * Все фото и названия взяты из открытых источников, в рамках
              учебного проекта.
            </p>
          </div>
          <div className="bottom-menu_box-box-social-network">
            <SlSocialInstagram
              className="bottom-menu_box-box-social-icons"
              size={25}
            />
            <SlSocialTwitter
              className="bottom-menu_box-box-social-icons"
              size={25}
            />
            <SlSocialVkontakte
              className="bottom-menu_box-box-social-icons"
              size={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ButtomMenu;
