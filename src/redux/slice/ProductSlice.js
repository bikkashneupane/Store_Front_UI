import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Seiko 1",
      href: `/product/1234`,
      imageSrc:
        "https://watchdirect.com.au/cdn/shop/products/3502-XS-S90_1500x__30256.1591331942.1280.1280_550x.png?v=1617938256",
      price: "$400",
      salesPrice: "$200",
      category: "watches",
      brand: "seiko",
      gender: "unisex",
    },
    {
      id: 5,
      name: "Seiko 3",
      href: `/product/1234`,
      imageSrc:
        "https://watchdirect.com.au/cdn/shop/products/XB.3749-S90-1080x1080px-_2019_720x__19866.1614562524.1280.1280_700x.png?v=1617950149",
      imageAlt: "Seiko 5 premium",
      price: "$250",
      brand: "apple",
      category: "watches",
      gender: "men",
    },
    {
      id: 7,
      name: "Seiko 3",
      href: `/product/1234`,
      imageSrc:
        "https://watchdirect.com.au/cdn/shop/products/XB.3749-S90-1080x1080px-_2019_720x__19866.1614562524.1280.1280_700x.png?v=1617950149",
      imageAlt: "Seiko 5 premium",
      price: "$250",
      brand: "casio",
      category: "accessories",
      gender: "women",
    },
  ],
  filteredProducts: [],
};

//create slice
const slice = createSlice({
  name: "Products",
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
