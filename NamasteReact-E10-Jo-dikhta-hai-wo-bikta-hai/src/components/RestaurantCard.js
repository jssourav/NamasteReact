import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-80 h-[400px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-[20px_20px_30px_-24px_rgb(0,0,0,0.3)] hover:shadow-lg dark:shadow-gray-800 dark:bg-gray-50 dark:border-gray-700 mt-4 mb-4 hover:bg-gray-300">
      {cloudinaryImageId ? (
        <img
          className="rounded-t-lg w-80 h-64"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
      ) : (
        <div className="rounded-t-lg w-80 h-64"></div>
      )}
      <div className="p-5">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
          {cuisines.join(", ")}
        </p>
        <h4>{lastMileTravelString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
