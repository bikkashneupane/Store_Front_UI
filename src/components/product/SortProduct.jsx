import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredProducts,
  setFilteredProductsWithSubCat,
  setProducts,
} from "../../features/product/ProductSlice";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const SortProduct = () => {
  const [currentSort, setCurrentSort] = useState(null);

  const dispatch = useDispatch();
  const { products, filteredProducts, filteredProductsWithSubCat } =
    useSelector((state) => state.products);

  const sortedProducts =
    filteredProductsWithSubCat?.length > 0
      ? filteredProductsWithSubCat
      : filteredProducts?.lenght > 0
      ? filteredProducts
      : products;

  const sortAscending = () => {
    const ascending = [...sortedProducts]?.sort(
      (a, b) => (a?.salesPrice || a?.price) - (b?.salesPrice || b?.price)
    );

    if (filteredProductsWithSubCat?.length > 0) {
      dispatch(setFilteredProductsWithSubCat(ascending));
      return;
    }
    if (filteredProducts?.length > 0) {
      dispatch(setFilteredProducts(ascending));
    } else {
      dispatch(setProducts(ascending));
    }
  };

  const sortDescending = () => {
    const ascending = [...sortedProducts]?.sort(
      (a, b) => (b?.salesPrice || b?.price) - (a?.salesPrice || a?.price)
    );

    if (filteredProductsWithSubCat?.length > 0) {
      dispatch(setFilteredProductsWithSubCat(ascending));
      return;
    }
    if (filteredProducts?.length > 0) {
      dispatch(setFilteredProducts(ascending));
    } else {
      dispatch(setProducts(ascending));
    }
  };

  const sortOptions = [
    // { name: "Most Popular", current: false },
    // { name: "Best Rating", current: false },
    {
      name: "Price: Low to High",
      current: false,
      handleSort: () => sortAscending(),
    },
    {
      name: "Price: High to Low",
      current: false,
      handleSort: () => sortDescending(),
    },
  ];
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            Sort
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400"
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            {sortOptions?.map((option) => (
              <MenuItem key={option.name}>
                <button
                  onClick={() => option?.handleSort()}
                  className={classNames(
                    option.current
                      ? "font-medium text-gray-900 dark:text-gray-100"
                      : "text-gray-500 dark:text-gray-300",
                    "block px-4 py-2 text-sm data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-700 cursor-pointer"
                  )}
                >
                  {option.name}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default SortProduct;
