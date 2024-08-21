const orderEP = import.meta.env.VITE_SERVER_API + "/v1/orders";

// request client secret axios
import { axiosProcessor } from "../../axios/axiosHelper";
export const fetchClientSecretAxios = (obj) => {
  return axiosProcessor({
    url: orderEP + "/create-payment-intent",
    method: "post",
    data: obj,
    isPrivate: true,
    isToast: true,
  });
};

// fetch all my orders
export const fetchAllOrders = () => {
  return axiosProcessor({
    url: orderEP + "/my-orders",
    method: "get",
    isPrivate: true,
  });
};
