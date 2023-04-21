import AllCategory from "../../componentsMenu/filter/AllCategory";
import Cart from "../../componentsMenu/cart/Cart";
import Dishes from "../../componentsMenu/dishesComponent/Dishes";
import "./menu-page.css";

const MenuPage = () => {
  return (
    <div className="menu-page">
      <div className="menu-page_filter">
        <AllCategory />
      </div>
      <div className="menu-page_cart">
        <div className="flex1 wrapper"></div>
        <Cart />
      </div>
      <div className="wrapper menu-page_dishes">
        <Dishes />
      </div>
    </div>
  );
};

export default MenuPage;
