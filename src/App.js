import React from "react";
import "./App.css";
import Contacts from "./pages/contacts-page/Contacts";
import About from "./pages/page-aboutt/About";
import Home from "./pages/home-page/Home";
import MenuPage from "./pages/menu-page/MenuPage";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <div className="logo">
          <p className="burger">
            <span>
              <img
                src="https://cdn.onlinewebfonts.com/svg/download_485179.png"
                width="30px"
              />
            </span>{" "}
            BURGER HOUSE
          </p>
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
          <Link to="/about" className="link">
            О НАС
          </Link>
          <p></p>
          <Link to="/menu" className="link">
            МЕНЮ
          </Link>
          <Link to="/contacts" className="link">
            КОНТАКТЫ
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
