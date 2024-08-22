const reviewEP = import.meta.env.VITE_SERVER_API + "/v1/reviews";

// request client secret axios
import { axiosProcessor } from "../../axios/axiosHelper";

export const postReviewAxios = (obj) => {
  return axiosProcessor({
    url: reviewEP,
    method: "post",
    data: obj,
    isPrivate: true,
    isToast: true,
  });
};

export const fetchReviewAxios = () => {
  return axiosProcessor({
    url: reviewEP,
    method: "get",
  });
};
