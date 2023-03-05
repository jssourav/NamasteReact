export function filterData(searchText, restaurants) {
  return restaurants
    ? restaurants.filter((restaurant) =>
        restaurant?.data?.name
          ?.toLowerCase()
          ?.includes(searchText?.toLowerCase())
      )
    : null;
}

export const getLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name) ?? "[]");
};

export const setLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
