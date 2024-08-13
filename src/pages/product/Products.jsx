import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

import { useDispatch, useSelector } from "react-redux";
import MobileFilter from "../../components/product/MobileFilter";
import DesktopFilter from "../../components/product/DesktopFilter";
import ProductList from "../../components/product/ProductList";
import Pagination from "../../components/product/Pagination";
import {
  setFilteredProducts,
  setFilteredProductsWithSubCat,
} from "../../features/product/ProductSlice";
import { useSearchParams } from "react-router-dom";
import SortProduct from "../../components/product/SortProduct";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [productFound, setProductFound] = useState(true);

  const [query] = useSearchParams();
  const categoryId = query.get("cat_id");
  const category = query.get("category");

  const dispatch = useDispatch();
  const {
    products,
    filteredProducts = [],
    filteredProductsWithSubCat = [],
  } = useSelector((state) => state.products);

  useEffect(() => {
    // category selected from navlink
    if (categoryId) {
      const catProducts = products?.filter(
        (product) => product?.categoryId === categoryId
      );
      if (catProducts?.length > 0) {
        dispatch(setFilteredProducts(catProducts));
        setProductFound(true);
      } else {
        dispatch(setFilteredProducts([]));
        setProductFound(false);
      }
    }
  }, [categoryId, dispatch, products]);

  // total products per page
  const productsPerPage = 9;

  // total pages -> for pagination
  const totalPages = Math.ceil(
    filteredProducts?.length > 0
      ? filteredProducts?.length / productsPerPage
      : products.length / productsPerPage
  );

  // pagination -> product 1 to 100
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // current page products
  const pageProducts =
    filteredProductsWithSubCat?.length > 0
      ? filteredProductsWithSubCat
      : filteredProducts?.length > 0
      ? filteredProducts
      : products?.slice(startIndex, endIndex);

  // move back to previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // move forward to next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // show products of nth page
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // filter product with gender logic
  const handleGenderFilter = (e) => {
    const { value, checked } = e.target;
    let updatedFilteredProducts = [...filteredProducts];

    if (checked) {
      const newProducts = products?.filter(
        (product) => product?.gender === value
      );
      updatedFilteredProducts = newProducts;
    } else {
      updatedFilteredProducts = updatedFilteredProducts?.filter(
        (product) => product?.gender !== value
      );
    }
    dispatch(setFilteredProducts(updatedFilteredProducts));
  };

  // Filter Product with category logic
  const handleOnCategoryFilter = (e) => {
    const { value, checked } = e.target;
    let updatedFilteredProducts = [...filteredProducts];

    if (checked) {
      const newProducts = products?.filter(
        (product) => product?.categoryId === value
      );
      updatedFilteredProducts = [...updatedFilteredProducts, ...newProducts];
    } else {
      updatedFilteredProducts = updatedFilteredProducts?.filter(
        (product) => product?.categoryId !== value
      );
    }
    // store in filteredProducts in redux
    dispatch(setFilteredProducts(updatedFilteredProducts));
  };

  // Filter Product with sub-category logic
  const handleSubCatFilter = (e) => {
    const { name, value, checked } = e.target;

    let updatedFilteredProducts = [...filteredProducts];

    if (checked) {
      // Add the new filter if it doesn't already exist
      const isFilterPresent = updatedFilteredProducts?.some(
        (item) => item[name] === value
      );
      if (!isFilterPresent) {
        // Filter products based on the subcategory
        const filtered = filteredProducts?.filter(
          (product) => product[name] === value
        );
        updatedFilteredProducts = [...updatedFilteredProducts, ...filtered];
      }
    } else {
      // Remove the filter if it exists
      updatedFilteredProducts = updatedFilteredProducts.filter(
        (product) => product[name] !== value
      );
    }
    dispatch(setFilteredProductsWithSubCat(updatedFilteredProducts));
  };

  return (
    <div className="bg-light dark:bg-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!productFound ? (
          <div className="mt-20 flex justify-center font-semibold">
            {category} updating soon... Please Come Back Later
          </div>
        ) : (
          <div className="my-6 bg-white dark:bg-gray-900 shadow-lg rounded-md">
            {/* Mobile filter dialog */}
            <MobileFilter
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
              handleOnCategoryFilter={handleOnCategoryFilter}
              handleSubCatFilter={handleSubCatFilter}
            />

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-700 pb-6 pt-10">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-300">
                  Browse Store
                </h1>

                {/* Sort Products by price / best rated */}
                <div className="flex items-center">
                  <SortProduct />

                  <button
                    type="button"
                    className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 sm:ml-7"
                  >
                    <span className="sr-only">View grid</span>
                    <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 sm:ml-6 lg:hidden"
                  >
                    <span className="sr-only">Filters</span>
                    <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <section className="pb-24 pt-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Filters */}
                  <DesktopFilter
                    handleOnCategoryFilter={handleOnCategoryFilter}
                    handleSubCatFilter={handleSubCatFilter}
                    handleGenderFilter={handleGenderFilter}
                  />

                  {/* Product grid */}
                  <div className="lg:col-span-3">
                    <ProductList
                      products={
                        filteredProducts?.length > 0
                          ? filteredProducts
                          : pageProducts
                      }
                    />
                  </div>
                </div>
              </section>

              {/* Pagination */}
              <Pagination
                productLength={
                  filteredProductsWithSubCat?.length > 0
                    ? filteredProductsWithSubCat?.length
                    : filteredProducts?.length > 0
                    ? filteredProducts?.length
                    : products?.length
                }
                currentPage={currentPage}
                totalPages={totalPages}
                productsPerPage={productsPerPage}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                startIndex={startIndex}
                endIndex={endIndex}
              />
            </main>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
