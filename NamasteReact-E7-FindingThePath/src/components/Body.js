import { useState, useEffect } from "react";
import { restrauntList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //Api call
    getRestraunts();
  }, []);

  async function getRestraunts() {
    // aalternative api: https://mocki.io/v1/62fce427-c797-4565-beb7-39e32cf33139
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); // ?. optional chaining
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurants Available Currently!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
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
