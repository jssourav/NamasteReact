import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="col">
      <Link to={`restaurant/${id}`}>
        <div className="card">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
          <h2>{name}</h2>
          <h3>{cuisines.join(",")}</h3>
          <h4>{lastMileTravelString}</h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
