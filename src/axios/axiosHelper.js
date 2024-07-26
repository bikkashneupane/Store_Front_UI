import axios from "axios";

const getAccessJwt = () => {
  return sessionStorage.getItem("accessJwt");
};

const getRefreshJwt = () => {
  return localStorage.getItem("refreshJwt");
};

// gloabl axios processor
export const axiosProcessor = async ({
  url,
  method,
  data,
  isPrivate,
  isRefresh,
}) => {
  try {
    const headers = {
      Authorization: isPrivate
        ? isRefresh
          ? getRefreshJwt()
          : getAccessJwt()
        : null,
    };
    const response = await axios({ url, method, data, headers });
    return response?.data;
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};
