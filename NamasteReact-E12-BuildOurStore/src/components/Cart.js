import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";
const Cart = () => {
  useEffect(() => {}, []);
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  if (cartItems.length === 0) {
    return (
      <h1 className="mt-10 mb-5 font-bold text-2xl text-center">Empty Cart</h1>
    );
  }

  const handleClearCart = () => {
    dispatch(clearCart());
    clearCart;
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <h1 className="mt-10 mb-5 font-bold text-2xl text-center">
        Cart Items - {cartItems.length}
        <button
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-4"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </h1>

      <div className="flex flex-col justify-center items-center">
        <table className="w-[50%] text-sm text-center text-black-500">
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-red-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr className="bg-white border-b" key={item.id}>
                  <th scope="row" className="px-6 py-4 font-medium">
                    <img
                      className="rounded-t-lg w-28 h-24"
                      src={IMG_CDN_URL + item?.cloudinaryImageId}
                    />
                  </th>
                  <td className="px-6 py-4">{item?.name}</td>
                  <td className="px-6 py-4">{item?.quantity}</td>
                  <td className="px-6 py-4">
                    ₹ {(item?.price / 100) * item?.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="m-2 p-2"
                      onClick={() => removeFoodItem(item)}
                    >
                      ➖
                    </button>
                    <button
                      className="m-2 p-1 "
                      onClick={() => addFoodItem(item)}
                    >
                      ➕
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
