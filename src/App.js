import React from "react";
import Contacts from "./pages/contacts-page/Contacts";
import Home from "./pages/home-page/Home";
import MenuPage from "./pages/menu-page/MenuPage";
import Cart from "./componentsMenu/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="app-nav">
        <div className="nav-left">
          
            <Link to="/" className="link link-logo">
              <p className="burger">
                <span>
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/download_485179.png"
                    width="35px"
                  />
                </span>{" "}
                BURGER HOUSE
              </p>
            </Link>
          </div>

          <div className="nav-right">
            <div className="nav-right_phone">
              <p className="telephone">
                <span>
                  <img
                    src="https://www.pinclipart.com/picdir/big/552-5524916_express-truck-delivery-delivery-truck-icon-png-clipart.png"
                    width="35px"
                  />
                </span>{" "}
                Экспресс Доставка +7(932)854-63-54
              </p>
            </div>
          
          <div className="nav-right_menu">
            <Link to="/" className="link link-menu">
              ГЛАВНАЯ
            </Link>
            <Link to="/menu" className="link link-menu">
              МЕНЮ
            </Link>
            <Link to="/contacts" className="link link-menu">
              КОНТАКТЫ
            </Link>
            <span>
            <Cart />
            </span>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
