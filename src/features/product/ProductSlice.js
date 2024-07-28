import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      _id: "1234",
      price: 1,
    },
    {
      _id: "1234",
      price: 2,
    },
    {
      _id: "1234",
      price: 3,
    },
    {
      _id: "1234",
      price: 4,
    },
    {
      _id: "1234",
      price: 5,
    },
    {
      _id: "1234",
      price: 6,
    },
    {
      _id: "1234",
      price: 7,
    },
    {
      _id: "1234",
      price: 8,
    },
    {
      _id: "1234",
      price: 9,
    },
    {
      _id: "1234",
      price: 10,
    },
    {
      _id: "1234",
      price: 11,
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
    {
      _id: "1234",
    },
  ],
  filteredProducts: [],
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
  },
});

const { reducer, actions } = slice;
export const { setProducts, setFilteredProducts } = actions;
export default reducer;
