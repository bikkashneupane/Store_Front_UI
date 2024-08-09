import { toast } from "react-toastify";
import { fetchClientSecretAxios } from "./cartAxios";
import { addToCart, updateCart } from "./cartSlice";

// add to cart
export const addToCartAction = (item) => async (dispatch) => {
  dispatch(addToCart(item));
};

// add to cart
export const updateCartAction = (item) => async (dispatch) => {
  dispatch(updateCart(item));
};
