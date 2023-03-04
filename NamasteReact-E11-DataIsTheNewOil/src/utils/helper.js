export function filterData(searchText, restaurants) {
  return restaurants
    ? restaurants.filter((restaurant) =>
        restaurant?.data?.name
          ?.toLowerCase()
          ?.includes(searchText?.toLowerCase())
      )
    : null;
}
