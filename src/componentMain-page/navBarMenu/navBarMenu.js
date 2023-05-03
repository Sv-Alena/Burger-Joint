import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../componentsMenu/cart/Cart";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import "./navBarMenu.css";

const NavBarMenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <div className="boxMenu">
      <div className="menu-header_logo">
        <div>
          <Link to="/">
            <h2 className="logo-burger">
              <span>
                <img
                  src="https://cdn.onlinewebfonts.com/svg/download_485179.png"
                  width="30px"
                />
              </span>{" "}
              BURGER HOUSE
            </h2>
          </Link>
        </div>
        <div>
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
      </div>
      <div className="menu-header_link">
        <nav className="main-nav ">
          {isResponsiveclose === true ? (
            <>
              <span
                className="menubar__button"
                style={{ display: "none" }}
                onClick={toggleClass}
              >
                {" "}
                <FiXCircle />{" "}
              </span>
            </>
          ) : (
            <>
              <span
                className="menubar__button"
                style={{ display: "none" }}
                onClick={toggleClass}
              >
                {" "}
                <FiAlignRight />{" "}
              </span>
            </>
          )}

          <ul className={boxClass.join(" ")}>
            <li
              onClick={toggleSubmenu}
              className="menu-item sub__menus__arrows"
            >
              <Link to="/">
                Главная 
              </Link>
            </li> 
            <li className="menu-item">
              <Link
                exact
                activeClassName="is-active"
                onClick={toggleClass}
                to={`/Menu`}
              >
                {" "}
                Меню{" "}
              </Link>
            </li>
            <li className="menu-item ">
              <Link
                onClick={toggleClass}
                activeClassName="is-active"
                to={`/Contacts`}
              >
                {" "}
                Контакты{" "}
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
      <Cart className="cart" />
    </div>
  );
};

export default NavBarMenu;
