import React from "react";
import DarkVariantExample from "./Slider";
import "./page-about.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-page_box-slider">
        <div className="about-page_text">
          <h2>МЫ - BURGER HOUSE</h2>
          <p>
            Модное, уютное кафе, с очень вкусным меню, которое расположилось в самом центре нашего города.
            Главная наша гордость — это открытая кухня, где гости могут
            наблюдать за процессом приготовления блюд. Мы делаем наши знаменитые
            бургеры, в которых мы используем мясо из 100% говядины Black Angus и
            наши домашние булочки которые мы печем по рецепту 1856 г. — всё это
            вы также можете заказать с ДОСТАВКОЙ НА ДОМ, оформив заказ на нашем
            сайте или позвонив нам по телефону.
          </p>
        </div>
        <div className="about-page_slider">
          <DarkVariantExample />
        </div>
        
      </div>
    </div>
  );
}

export default About;
