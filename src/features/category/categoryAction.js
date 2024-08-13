import { fetchCategoriesAxios, fetchSubCatAxios } from "./categoryAxios";
import { setBrands, setCategories, setMaterials } from "./categorySlice";

// fetch all categories
export const fetchCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategoriesAxios();
  if (status === "success") {
    dispatch(setCategories(categories));
  }
};

// fetch all subCategroies
export const fetchSubCatAction = () => async (dispatch) => {
  const { status, brands, materials } = await fetchSubCatAxios();
  if (status === "success") {
    const sortedBrands = brands.sort((a, b) => a.name.localeCompare(b.name));

    const sortedMaterials = materials.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    dispatch(setBrands(sortedBrands));
    dispatch(setMaterials(sortedMaterials));
  }
};
