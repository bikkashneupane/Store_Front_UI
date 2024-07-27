import { axiosProcessor } from "../../axios/axiosHelper";

const PRODUCT_EP = import.meta.env.VITE_SERVER_API + "/products";

// fetch active products => get
export const fetchProductsAxios = () => {
  return axiosProcessor({
    url: PRODUCT_EP,
    method: "GET",
  });
};

// fetch single product by ID => get
export const fetchProductByIdAxios = (id) => {
  return axiosProcessor({
    url: PRODUCT_EP + "/" + id,
    method: "GET",
  });
};
