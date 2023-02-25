import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurent, setRestaurent] = useState(null);

  useEffect(() => {
    getRestaurentIndo(resId);
  }, []);

  async function getRestaurentIndo(resId) {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.5355161&lng=77.3910265&menuId=307485"
    );
    const json = await data.json();
    // console.log(json.data);
    setRestaurent(json.data);
  }

  return !restaurent ? (
    <Shimmer />
  ) : (
    <div className="restaurent-menu">
      <div>
        <h1>Restaurant Id: {resId}</h1>
        <h2>{restaurent.name}</h2>
        <img
          className="restaurent-menu-image"
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
            Object.values(restaurent?.menu?.items).map((item) => (
              <li key={item.id}>{item?.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
