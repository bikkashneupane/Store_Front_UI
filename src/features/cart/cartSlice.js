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
      state.cart = state.cart.push(action.payload);
    },
  },
});

const { reducer, actions } = slice;
export const { addToCart } = actions;
export default reducer;
