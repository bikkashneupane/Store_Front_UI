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
      brand: "Seiko",
      category: "Watches",
    },
    {
      id: 2,
      name: "Seiko 2",
      href: `/product/1234`,
      imageSrc:
        "https://watchdirect.com.au/cdn/shop/products/front_AL-525NS5AQ6_Web_1200x1700_e43b8a36-66d6-4d9c-a97b-db1c860f2f4d_1200x1700.png?v=1626760192",
      imageAlt: "Seiko 5 premium",
      price: "$350",
      brand: "Seiko",
      category: "Watches",
    },
    {
      id: 3,
      name: "Seiko 3",
      href: `/product/1234`,
      imageSrc:
        "https://watchdirect.com.au/cdn/shop/products/XB.3749-S90-1080x1080px-_2019_720x__19866.1614562524.1280.1280_700x.png?v=1617950149",
      imageAlt: "Seiko 5 premium",
      price: "$250",
      brand: "Seiko",
      category: "Watches",
    },
    {
      id: 4,
      name: "Seiko 4",
      href: `/product/1234`,
      imageSrc:
        "https://res.cloudinary.com/dlib8c3px/image/upload/v1721747979/vikiasmy-watches/vgt59azgbg6yne3yregq.png",
      imageAlt: "Seiko 5 premium",
      price: "$500",
      brand: "Seiko",
      salesPrice: "$250",
      category: "Watches",
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
      category: "Watches",
    },
    {
      id: 6,
      name: "Seiko 4",
      href: `/product/1234`,
      imageSrc:
        "https://res.cloudinary.com/dlib8c3px/image/upload/v1721747979/vikiasmy-watches/vgt59azgbg6yne3yregq.png",
      imageAlt: "Seiko 5 premium",
      price: "$500",
      brand: "apple",
      salesPrice: "$250",
      category: "Watches",
    },
    {
      id: 7,
      name: "Seiko 3",
      href: `/product/1234`,
      imageSrc:
        "https://watchdirect.com.au/cdn/shop/products/XB.3749-S90-1080x1080px-_2019_720x__19866.1614562524.1280.1280_700x.png?v=1617950149",
      imageAlt: "Seiko 5 premium",
      price: "$250",
      brand: "apple",
      category: "Accessories",
    },
    {
      id: 8,
      name: "Seiko 4",
      href: `/product/1234`,
      imageSrc:
        "https://res.cloudinary.com/dlib8c3px/image/upload/v1721747979/vikiasmy-watches/vgt59azgbg6yne3yregq.png",
      imageAlt: "Seiko 5 premium",
      price: "$500",
      brand: "Seiko",
      salesPrice: "$250",
      category: "Accessories",
    },
    {
      id: 9,
      name: "Seiko 3",
      href: `/product/1234`,
      imageSrc:
        "https://watchdirect.com.au/cdn/shop/products/XB.3749-S90-1080x1080px-_2019_720x__19866.1614562524.1280.1280_700x.png?v=1617950149",
      imageAlt: "Seiko 5 premium",
      price: "$250",
      salesPrice: "$149",
      brand: "Seiko",
      category: "Accessories",
    },
    {
      id: 10,
      name: "Seiko 4",
      href: `/product/1234`,
      imageSrc:
        "https://res.cloudinary.com/dlib8c3px/image/upload/v1721747979/vikiasmy-watches/vgt59azgbg6yne3yregq.png",
      imageAlt: "Seiko 5 premium",
      price: "$500",
      brand: "Seiko",
      salesPrice: "$250",
      category: "Accessories",
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
