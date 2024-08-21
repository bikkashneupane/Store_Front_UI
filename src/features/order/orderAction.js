import { fetchAllOrders, fetchClientSecretAxios } from "./orderAxios";
import { setMyOrders } from "./orderSlice";

// fetch client secret action
export const fetchClientSecretAction = (obj) => {
  return fetchClientSecretAxios(obj);
};

// fetch all products
export const fetchAllOrdersAction = () => async (dispatch) => {
  const { status, orders } = await fetchAllOrders();
  dispatch(setMyOrders(orders ?? []));
};
