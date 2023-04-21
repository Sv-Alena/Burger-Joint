//import { useState } from "react"
import './BuyBurger.css'
import { dataBuyBurger } from "./dataBuyBurger"


function BuyBurger(){

    //const [chooseBurgtr, setChooseBurger] = useState(dataBuyBurger)
 return(
    <div className='box-threeBurger'>
        {dataBuyBurger.map((item => {
            const{id, name, pictures, aboutBurger}= item;
            return(<div key={id} className="card-threeBurger">
                
                    <img src={pictures} width='350px' height='330px' alt='burgers'/>
                    <div>
                    <h2 className="name-threeBurg">{name}</h2>
                    <p className="story-threeBurg">{aboutBurger}</p>
                    <div className="btnThreeBurg">
                    <button className=""> ЗАКАЗАТЬ</button>
                    </div>
                    </div>
                </div>
            )
        }))}
    </div>
 )
}

export default BuyBurger