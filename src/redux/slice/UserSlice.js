import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    // name: "Bikash",
    // email: "thisisbikkash@gmail.com",
  },
};
//create slice
const slice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { setUser } = actions;
export default reducer;
