import { axiosProcessor } from "../../axios/axiosHelper";

const USERS_EP = import.meta.env.VITE_SERVER_API + "/users";

// signup post
export const signupUserAxios = (obj) => {
  return axiosProcessor({
    url: USERS_EP + "/signup",
    method: "POST",
    data: obj,
    isToast: true,
  });
};

// verify account axios
export const verifyAccountAxios = (obj) => {
  return axiosProcessor({
    url: USERS_EP + "/verify-account",
    method: "POST",
    data: obj,
    isToast: true,
  });
};

// login post
export const loginUserAxios = (obj) => {
  return axiosProcessor({
    url: USERS_EP + "/login",
    method: "POST",
    data: obj,
    isToast: true,
  });
};

// fetch user profile get
export const fetchUserAxios = () => {
  return axiosProcessor({
    url: USERS_EP + "/profile",
    method: "GET",
    isPrivate: true,
  });
};
