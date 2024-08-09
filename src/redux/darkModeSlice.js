import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "dark_mode",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { setDarkMode } = actions;
export default reducer;
