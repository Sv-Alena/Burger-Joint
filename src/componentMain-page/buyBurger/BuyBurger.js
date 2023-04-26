import { dataDishes } from "../../dataMenu/dataDishes";
import "./BuyBurger.css";

function BuyBurger({dish, quantity}) {
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
                <button className="three-burg_buttun"> ЗАКАЗАТЬ</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

//     dataDishes.filter(item => item.id === cartItem.dishId)
//     //const [chooseBurgtr, setChooseBurger] = useState(dataBuyBurger)
//  return(
//     <div className='box-threeBurger'>
//         {dataDishes.map((item => {
//             const{id, name, pictures, aboutBurger}= item;
//             return(<div key={id} className="card-threeBurger">

//                     <img src={pictures} width='350px' height='330px' alt='burgers'/>
//                     <div>
//                         {}
//                     <h2 className="name-threeBurg">{name}</h2>
//                     <p className="story-threeBurg">{aboutBurger}</p>
//                     <div className="btnThreeBurg">
//                     <button className=""> ЗАКАЗАТЬ</button>
//                     </div>
//                     </div>
//                 </div>
//             )
//         }))}
//     </div>
//  )
//}

export default BuyBurger;
