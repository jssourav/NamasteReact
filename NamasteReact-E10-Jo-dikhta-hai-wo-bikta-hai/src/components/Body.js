import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurant from "../utils/useRestaurant";
import { Link } from "react-router-dom";

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
      <div className="container mx-auto mt-4">
        <div className="flex justify-center p-4">
          <input
            type="text"
            className="block w-2/4 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:bg-slate-300"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setRestaurant(e.target.value)}
          />
        </div>

        <div className="flex gap-x-4 flex-wrap space-x-4 justify-center">
          {restaurant?.length === 0 ? (
            <h1>No Restaurants Available Currently!</h1>
          ) : (
            restaurant.map((restaurant) => {
              return (
                <Link
                  to={`restaurant/${restaurant.data.id}`}
                  key={restaurant.data.id}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
