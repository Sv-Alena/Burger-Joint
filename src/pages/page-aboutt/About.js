import React from "react";
import DarkVariantExample from "../../about-page/Slider";
import ButtomMenu from "../../componentMain-page/buttom-menu/buttom-menu";
import "./page-about.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-page_box-slider">
        <div className="about-page_text">
          <h1>О НАС</h1>
          <p>
            BURGER HOUSE — модное, уютное и очень вкусное кафе в самом центре
            нашего города. Главная наша гордость — это открытая кухня, где гости
            могут наблюдать за процессом приготовления блюд. Мы делаем наши
            знаменитые бургеры, в которых мы используем мясо из 100% говядины
            Black Angus и наши домашние булочки которые мы печем по рецепту 1856
            г. — всё это вы также можете заказать с ДОСТАВКОЙ НА ДОМ, оформив
            заказ на нашем сайте или позвонив нам по телефону.
          </p>
        </div>
        <div className="about-page_slider">
          <DarkVariantExample />
        </div>
      </div>
      <div className="about-page_buttom-menu">
      <ButtomMenu />
      </div>
    </div>
  );
}

export default About;
