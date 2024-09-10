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
  searchBound: [],
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
    setSearchBound: (state, action) => {
      state.searchBound = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const {
  setProducts,
  setFilteredProducts,
  setFilteredProductsWithSubCat,
  setActiveFilters,
  setSearchBound,
} = actions;
export default reducer;
