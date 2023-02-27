import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchText, restaurant, setRestaurant] = useRestaurant();

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴Offline, please check your internet connection!!</h1>;
  }

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setRestaurant(e.target.value)}
        />
      </div>
      <div className="restraunt-list">
        {restaurant?.length === 0 ? (
          <h1>No Restaurants Available Currently!</h1>
        ) : (
          restaurant.map((restaurant) => {
            return (
              <div className="col-container" key={restaurant.data.id}>
                <RestaurantCard {...restaurant.data} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
