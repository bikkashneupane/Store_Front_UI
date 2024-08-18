import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "orders",
  initialState: {
    orderId: null,
  },

  reducers: {
    setOrderIdInStore: (state, action) => {
      state.orderId = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { setOrderIdInStore } = actions;
export default reducer;
