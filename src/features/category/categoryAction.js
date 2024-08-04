import { fetchCategoriesAxios, fetchSubCategoriesAxios } from "./categoryAxios";
import { setCategories, setSubCategories } from "./categorySlice";

// fetch all categories
export const fetchCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategoriesAxios();
  if (status === "success") {
    dispatch(setCategories(categories));
  }
};

// fetch all categories
export const fetchSubCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchSubCategoriesAxios();
  if (status === "success") {
    dispatch(setSubCategories(categories));
  }
};
