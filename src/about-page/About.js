import React from 'react'
import './about.css'

import DarkVariantExample from './Slider'

function About() {
    return(<div className='box-about'>
        

<div className='box-text'>
    <h1>О НАС</h1>
        <p>BURGER HOUSE — модное, уютное и очень вкусное кафе в самом центре нашего города.
Главная наша гордость — это открытая кухня, где гости могут наблюдать за процессом приготовления блюд.
Мы делаем наши знаменитые бургеры, в которых мы используем мясо из 100% говядины Black Angus и наши домашние булочки которые мы печем по рецепту 1856 г. — всё это вы также можете заказать с ДОСТАВКОЙ НА ДОМ, оформив заказ на нашем сайте или позвонив нам по телефону.
</p>
</div>
<div className='box-slider'>
    <DarkVariantExample />
</div>
</div>

    )
}

export default About



