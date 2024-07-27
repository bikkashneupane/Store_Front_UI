import { addToCart } from "./cartSlice";

// add to cart
export const addToCartAction = (item) => async (dispatch) => {
  dispatch(addToCart(item));
};
