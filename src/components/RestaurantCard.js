import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    deliveryTime,
    costForTwo,
  } = resData?.data;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg  bg-gray-100 hover:bg-gray-300">
      <img
        className=" rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>₹{costForTwo / 100} FOR TWO </h4>
      <h4>{deliveryTime} minutes </h4>
    </div>
  );
};
export default RestaurantCard;
