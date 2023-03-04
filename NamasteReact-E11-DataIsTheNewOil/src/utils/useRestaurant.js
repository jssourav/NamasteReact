import { useState, useEffect } from "react";
import { FETCH_RESTAURENTS_URL } from "../constants";
import { filterData } from "./helper";

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");

  function setRestaurant(searchText) {
    setSearchText(searchText);
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  }

  async function getRestraunts() {
    let results = await fetch(FETCH_RESTAURENTS_URL);
    results = await results.json();
    results = results?.data?.cards[2]?.data?.data?.cards;
    results = results ?? [];
    setAllRestaurants(results); // ?. optional chaining
    setFilteredRestaurants(results);
  }

  useEffect(() => {
    getRestraunts();
  }, []);

  useEffect(() => {
    setRestaurant(searchText);
  }, [searchText]);

  return [searchText, filteredRestaurants, setSearchText];
};

export default useRestaurant;
