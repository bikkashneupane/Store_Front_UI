import { axiosProcessor } from "../../axios/axiosHelper";

const USERS_EP = import.meta.env.VITE_SERVER_API + "/users";

// signup post
export const signupUserAxios = (obj) => {
  return axiosProcessor({
    url: USERS_EP + "/signup",
    method: "POST",
    data: obj,
  });
};

// fetch user profile post
export const verifyEmailAxios = (obj) => {
  return axiosProcessor({
    url: USERS_EP + "/verify-email",
    method: "POST",
    data: obj,
  });
};

// login post
export const loginUserAxios = (obj) => {
  return axiosProcessor({
    url: USERS_EP + "/login",
    method: "POST",
    data: obj,
  });
};

// fetch user profile get
export const fetchUserProfileAxios = () => {
  return axiosProcessor({
    url: USERS_EP + "/profile",
    method: "GET",
    isPrivate: true,
  });
};
