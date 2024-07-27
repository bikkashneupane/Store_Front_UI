import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

//create slice
const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.find((item) => item._id === action.payload._id)) {
        state.cart.find((item) => item?._id === action.payload?._id).quantity +=
          action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    updateCart: (state, action) => {
      if (action.payload.quantity === 0) {
        state.cart = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
        return;
      }
      state.cart.find((item) => item?._id === action.payload?._id).quantity =
        action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
    },
  },
});

const { reducer, actions } = slice;
export const { addToCart, updateCart, removeFromCart } = actions;
export default reducer;
