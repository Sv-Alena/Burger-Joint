import React from "react";
import Contacts from "../contacts/Contacts";
import About from "../about-page/About";
import App from "../App";
import MenuPage from "../componentsMenu/MenuPage";

    import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link
      } from "react-router-dom";
      
      
      function MenuRouter() {
      
       return(
          <Router>
          <nav>
            <div className="logo">
              <p className="burger"><span><img src='https://cdn.onlinewebfonts.com/svg/download_485179.png' width='30px'/>
              </span> BURGER HOUSE</p>
              <p className="telephone"><span><img src='https://www.pinclipart.com/picdir/big/552-5524916_express-truck-delivery-delivery-truck-icon-png-clipart.png' width='35px'/>
                </span> Экспресс Доставка +7(932)854-63-54</p>
            </div>
            <div className="menu">
            
            <Link to='/' className="link">ГЛАВНАЯ</Link>
            <Link to='/about' className="link">О НАС</Link><p></p>
            <Link to='/menu' className="link">МЕНЮ</Link>
            <Link to='/contacts' className="link">КОНТАКТЫ</Link>
            </div>
          </nav>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/menu' element={<MenuPage/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
          </Router>
        )
}


export default MenuRouter