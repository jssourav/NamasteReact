import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurent = useRestaurantMenu(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  return !restaurent ? (
    <Shimmer />
  ) : (
    <div className="p-4 grid grid-cols-2 gap-3">
      <div>
        <h1 className="text-xl">Restaurant Id: {resId}</h1>
        <h2 className="pb-4 font-bold text-3xl">{restaurent.name}</h2>
        <img
          className="rounded-t-lg w-auto"
          src={IMG_CDN_URL + restaurent.cloudinaryImageId}
        />
        <h3>{restaurent.area}</h3>
        <h3>{restaurent.city}</h3>
        <h3>Rating: {restaurent.avgRating}</h3>
        <h3>{restaurent.costForTwoMsg}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {restaurent.menu &&
            Object.values(restaurent?.menu?.items).map((item) => {
              return (
                item?.price !== 0 && (
                  <li key={item.id}>
                    {item?.name} - ₹{item?.price / 100}
                    <button
                      className="m-2 p-2 text-white rounded"
                      onClick={() => removeFoodItem(item)}
                    >
                      ➖
                    </button>
                    <button
                      className="m-2 p-1 text-white rounded "
                      onClick={() => addFoodItem(item)}
                    >
                      ➕
                    </button>
                  </li>
                )
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
