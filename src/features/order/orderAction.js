import { fetchAllOrders, fetchClientSecretAxios } from "./orderAxios";
import { setMyOrders } from "./orderSlice";

// fetch client secret action
export const fetchClientSecretAction = (obj) => {
  return fetchClientSecretAxios(obj);
};

// fetch all products
export const fetchAllOrdersAction = () => async (dispatch) => {
  const { orders } = await fetchAllOrders();
  dispatch(setMyOrders(orders.length > 0 ? orders : []));
};
