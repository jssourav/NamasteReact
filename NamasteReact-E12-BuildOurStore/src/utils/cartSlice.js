import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "./helper";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getLocalStorage("cartItems"),
  },
  reducers: {
    addItem: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      setLocalStorage("cartItems", state.items);
    },
    removeItem: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      const IndexOfItemInCart = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (IndexOfItemInCart > -1 && itemInCart.quantity === 1) {
        state.items.splice(IndexOfItemInCart, 1);
      } else if (IndexOfItemInCart > -1 && itemInCart.quantity > 1) {
        itemInCart.quantity--;
      }
      setLocalStorage("cartItems", state.items);
    },
    clearCart: (state, action) => {
      state.items = [];
      setLocalStorage("cartItems", state.items);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
