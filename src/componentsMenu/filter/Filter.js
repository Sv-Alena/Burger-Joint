import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice";
import { useSelector, useDispatch } from "react-redux";

const Filter = ({ category }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div>
      <p
        onClick={() => {
          dispatch(filterCategory(category));
        }}
        className={
          selectedCategory === category
            ? "filter_categoryButtonSelected filter_categoryButton"
            : "filter_categoryButton"
        }
      >
        {category}
      </p>
    </div>
  );
};

export default Filter;
