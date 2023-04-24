import React from "react";
import Contacts from "./pages/contacts-page/Contacts";
import About from "./pages/page-aboutt/About";
import Home from "./pages/home-page/Home";
import MenuPage from "./pages/menu-page/MenuPage";
import Cart from "./componentsMenu/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <div className="logo">
          <Link to="/" className="link">
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
        <div className="menu">
          <Link to="/" className="link">
            ГЛАВНАЯ
          </Link>
          <Link to="/menu" className="link">
            МЕНЮ
          </Link>
          <Link to="/contacts" className="link">
            КОНТАКТЫ
          </Link>
          <Cart />
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
