import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  filteredProductsWithSubCat: [],
  activeFilters: {
    brandId: [],
    materialId: [],
    gender: [],
  },
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
    setActiveFilters: (state, action) => {
      state.activeFilters = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const {
  setProducts,
  setFilteredProducts,
  setFilteredProductsWithSubCat,
  setActiveFilters,
} = actions;
export default reducer;
