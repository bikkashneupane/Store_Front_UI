import { signupUserAxios } from "./userAxios";

// signup user
export const signupUserAction = async (obj) => {
  const { status, message } = await signupUserAxios(obj);
  return status;
};
