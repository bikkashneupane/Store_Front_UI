export const shipping_truck = (
  <svg
    className="svg-inline--fa fa-truck fa-w-20 fa-5x"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="truck"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    data-fa-i2svg=""
  >
    <path
      fill="currentColor"
      d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
    ></path>
  </svg>
);

export const sortOptions = [
  { name: "Most Popular", href: `/product/1234`, current: true },
  { name: "Best Rating", href: `/product/1234`, current: false },
  { name: "Newest", href: `/product/1234`, current: false },
  { name: "Price: Low to High", href: `/product/1234`, current: false },
  { name: "Price: High to Low", href: `/product/1234`, current: false },
];

export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "newArrivals", label: "New Arrivals", checked: false },
      { value: "salesPrice", label: "Sale", checked: false },
      { value: "premium", label: "Premium", checked: true },
      { value: "smartWatch", label: "Smart Watch", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "seiko", label: "Seiko", checked: false },
      { value: "apple", label: "Apple", checked: false },
      { value: "swiss", label: "Swiss", checked: false },
      { value: "casio", label: "Casio", checked: false },
    ],
  },
];
