import { fetchProductsAxios } from "./productAxios";
import { setProducts } from "./ProductSlice";

// fetch all products
export const fetchProductsAction = () => async (dispatch) => {
  const { status, products } = await fetchProductsAxios();
  if (status === "success") {
    dispatch(setProducts(products));
  }
};
