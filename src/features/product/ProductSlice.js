import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  filteredProductsWithSubCat: [],
  filteredBrand: [],
  filteredMaterial: [],
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
    setFilteredBrand: (state, action) => {
      state.filteredBrand.push(action.payload);
    },
    removeFilteredBrand: (state, action) => {
      state.filteredBrand = state.filteredBrand.filter(
        (item) => item !== action.payload
      );
    },
    setFilteredMaterial: (state, action) => {
      state.filteredMaterial.push(action.payload);
    },
    removeFilteredMaterial: (state, action) => {
      state.filteredMaterial = state.filteredMaterial.filter(
        (item) => item !== action.payload
      );
    },
  },
});

const { reducer, actions } = slice;
export const {
  setProducts,
  setFilteredProducts,
  setFilteredProductsWithSubCat,
  setFilteredBrand,
  removeFilteredBrand,
  setFilteredMaterial,
  removeFilteredMaterial,
} = actions;
export default reducer;
