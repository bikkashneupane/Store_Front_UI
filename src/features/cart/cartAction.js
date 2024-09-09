import { toast } from "react-toastify";
import { addToCart, updateCart } from "./cartSlice";

// add to cart
export const addToCartAction = (item) => async (dispatch) => {
  dispatch(addToCart(item));
  toast.success("Product added to Cart");
};

// add to cart
export const updateCartAction = (item) => async (dispatch) => {
  dispatch(updateCart(item));
};
