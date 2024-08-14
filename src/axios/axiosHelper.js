import axios from "axios";
import { toast } from "react-toastify";
import { renewAccessJWTAxios } from "../features/user/userAxios";

const getAccessJwt = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJwt = () => {
  return localStorage.getItem("refreshJWT");
};

// gloabl axios processor
export const axiosProcessor = async ({
  url,
  method,
  data,
  isPrivate,
  isRefresh,
  isToast,
}) => {
  try {
    const headers = {
      Authorization: isPrivate
        ? isRefresh
          ? getRefreshJwt()
          : getAccessJwt()
        : null,
    };

    let response = {};
    const pending = axios({ url, method, data, headers });

    if (isToast) {
      toast.promise(pending, {
        pending: "Please Wait...",
        position: "bottom-right",
      });

      response = await pending;
      toast[response.data.status](response.data.message, {
        position: "bottom-right",
      });
    }

    response = await pending;
    return response.data;
  } catch (error) {
    const { message } = error.response.data;
    if (message === "jwt expired") {
      // renew access and recall the axiosHelper
      const accessJWT = await renewAccessJWTAxios();

      if (accessJWT) {
        return await axiosProcessor({
          url,
          method,
          data,
          isPrivate,
          isToast,
        });
      }
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
    }
    isToast && toast.error(message, { position: "bottom-right" });
    return error?.response?.data;
  }
};
