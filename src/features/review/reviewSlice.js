import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
  },
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { setReviews } = actions;
export default reducer;
