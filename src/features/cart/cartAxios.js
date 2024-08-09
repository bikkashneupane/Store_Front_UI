const orderEP =
  import.meta.env.VITE_SERVER_API + "/orderEP/create-payment-intent";

// request client secret axios
import { axiosProcessor } from "../../axios/axiosHelper";
export const fetchClientSecretAxios = (obj) => {
  return axiosProcessor({
    url: orderEP,
    method: "post",
    data: obj,
    isToast: true,
  });
};
