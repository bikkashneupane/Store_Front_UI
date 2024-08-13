import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  brands: [],
  materials: [],
};

//create slice
const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setMaterials: (state, action) => {
      state.materials = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { setCategories, setBrands, setMaterials } = actions;
export default reducer;
