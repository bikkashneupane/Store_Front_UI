import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "orders",
  initialState: {
    orderId: null,
    shippingAddress: {},
    myOrders: [],
  },

  reducers: {
    setOrderIdInStore: (state, action) => {
      state.orderId = action.payload;
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    setMyOrders: (state, action) => {
      state.myOrders = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { setOrderIdInStore, setShippingAddress, setMyOrders } = actions;
export default reducer;
