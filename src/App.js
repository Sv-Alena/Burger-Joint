import React from "react";
import Contacts from "./pages/contacts-page/Contacts";
import Home from "./pages/home-page/Home";
import MenuPage from "./pages/menu-page/MenuPage";
import Cart from "./componentsMenu/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBarMenu from "./componentMain-page/navBarMenu/navBarMenu";
import About from "./pages/page-aboutt/About";
import BuyBurger from "./componentMain-page/buyBurger/BuyBurger";
import ReserveTable from "./componentMain-page/reserveTable/ReserveTable";
import "./App.css";

    
function App(){
  return(
    <div>
  <Router>
    < NavBarMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<BuyBurger />} />
        <Route path="/" element={<ReserveTable />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </div>
  ); 
}

export default App;

