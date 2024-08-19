import { axiosProcessor } from "../../axios/axiosHelper";

const USER_EP = import.meta.env.VITE_SERVER_API + "/v1/users";

// signup post
export const signupUserAxios = (obj) => {
  return axiosProcessor({
    url: USER_EP + "/signup",
    method: "POST",
    data: obj,
    isToast: true,
  });
};

// verify account axios
export const verifyAccountAxios = (obj) => {
  return axiosProcessor({
    url: USER_EP + "/verify-account",
    method: "POST",
    data: obj,
    isToast: true,
  });
};

// login post
export const loginUserAxios = (obj) => {
  return axiosProcessor({
    url: USER_EP + "/login",
    method: "POST",
    data: obj,
    isToast: true,
  });
};

// fetch user profile get
export const fetchUserAxios = () => {
  return axiosProcessor({
    url: USER_EP + "/profile",
    method: "GET",
    isPrivate: true,
  });
};

// update profile update
export const editProfileDetailAxios = (obj, name) => {
  return axiosProcessor({
    url:
      name === "details"
        ? USER_EP + `/update-profile`
        : name === "email"
        ? USER_EP + "/update-email"
        : USER_EP + "/update-password",
    method: "PUT",
    data: obj,
    isPrivate: true,
    isToast: true,
  });
};

// renew access axios
export const renewAccessJWTAxios = async () => {
  const axiosObj = {
    url: USER_EP + "/renew-access",
    method: "GET",
    isPrivate: true,
    isRefresh: true,
  };

  const { accessJWT } = await axiosProcessor(axiosObj);
  accessJWT && sessionStorage.setItem("accessJWT", accessJWT);

  return accessJWT;
};
