import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  filteredProductsWithSubCat: [],
};

//create slice
const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setFilteredProductsWithSubCat: (state, action) => {
      state.filteredProductsWithSubCat = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const {
  setProducts,
  setFilteredProducts,
  setFilteredProductsWithSubCat,
} = actions;
export default reducer;
