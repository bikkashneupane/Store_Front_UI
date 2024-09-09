import {
  editProfileDetailAxios,
  fetchUserAxios,
  loginUserAxios,
  renewAccessJWTAxios,
  signupUserAxios,
  verifyAccountAxios,
} from "./userAxios";
import { setUser } from "./UserSlice";

// fetch user
export const fetchUserAction = () => async (dispatch) => {
  const { status, user } = await fetchUserAxios();
  if (status === "success") {
    dispatch(setUser(user));
  }
};

// signup user
export const signupUserAction = async (obj) => {
  const { status } = await signupUserAxios(obj);
  return status;
};

// verify account
export const verifyAccountAction = (obj) => {
  return verifyAccountAxios(obj);
};

// login
export const loginUserAction = (obj) => async (dispatch) => {
  const { status, tokens } = await loginUserAxios(obj);

  if (status === "success") {
    localStorage.setItem("refreshJWT", tokens.refreshJWT);
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    dispatch(fetchUserAction());
  }
};

// update profile
export const editProfileDetail = (obj, name) => async (dispatch) => {
  const { status } = await editProfileDetailAxios(obj, name);
  if (status === "success") {
    dispatch(fetchUserAction());
  }
};

// auto login
export const autoLoginAction = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    dispatch(fetchUserAction());
  }

  const refreshJWT = localStorage.getItem("refreshJWT");

  if (refreshJWT) {
    const accessJWT = await renewAccessJWTAxios();
    accessJWT
      ? dispatch(fetchUserAction())
      : localStorage.removeItem("refreshJWT");
  }
};
