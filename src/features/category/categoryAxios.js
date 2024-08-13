import { axiosProcessor } from "../../axios/axiosHelper";

const CATEGORY_EP = import.meta.env.VITE_SERVER_API + "/categories";

// fetch active categories => get
export const fetchCategoriesAxios = () => {
  return axiosProcessor({
    url: CATEGORY_EP,
    method: "GET",
  });
};

// fetch active categories => get
export const fetchSubCatAxios = () => {
  return axiosProcessor({
    url: CATEGORY_EP + "/sub-categories",
    method: "GET",
  });
};
