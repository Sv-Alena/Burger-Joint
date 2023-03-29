// import React from "react";
// import './App.css';
// import Contacts from "./contacts/Contacts";
// import About from "./about-page/About";
// import Home from "./homeComponent/Home";
// import MenuPage from "./componentsMenu/MenuPage";
import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


//  function App() {

//  return(
//     <Router>
//     <nav>
//       <div className="logo">
//         <p className="burger"><span><img src='https://cdn.onlinewebfonts.com/svg/download_485179.png' width='30px'/>
//         </span> BURGER HOUSE</p>
//         <p className="telephone"><span><img src='https://www.pinclipart.com/picdir/big/552-5524916_express-truck-delivery-delivery-truck-icon-png-clipart.png' width='35px'/>
//           </span> Экспресс Доставка +7(932)854-63-54</p>
//       </div>
//       <div className="menu">
      
//       <Link to='/' className="link">ГЛАВНАЯ</Link>
//       <Link to='/about' className="link">О НАС</Link><p></p>
//       <Link to='/menu' className="link">МЕНЮ</Link>
//       <Link to='/contacts' className="link">КОНТАКТЫ</Link>
//       </div>
//     </nav>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/menu' element={<MenuPage/>}/>
//       <Route path='/contacts' element={<Contacts/>}/>
//     </Routes>
//     </Router>
//   )
//   }

import BuyBurger from './componentMain-page/buyBurger/BuyBurger';
import InfoCombo from './componentMain-page/infoAboutCombo/InfoCombo';
import ReserveTable from './componentMain-page/reserveTable/ReserveTable'
import MenuRouterBottom from './componentMain-page/manuBottom/MenuRouterBottom';
import Marketing from './componentMain-page/marketingBurger/Marketing';
import photo from './one.jpg';
import MenuRouter from './routerMenu/MenuRouter';
import './App.css';

function App() {
    return(
        <div>
          <MenuRouter />
        <div className='img-start'>
        <img src={photo} alt='fone' width='100%'/>
        </div>
        <Marketing />
        <BuyBurger />
        <InfoCombo />
        <ReserveTable />
        <MenuRouterBottom /> 
        </div>
    )
}



export default App

