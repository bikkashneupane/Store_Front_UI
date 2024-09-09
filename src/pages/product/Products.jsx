import { useState } from "react";
import DesktopFilter from "../../components/product/DesktopFilter";
import { FunnelIcon } from "@heroicons/react/24/outline";
import MobileFilter from "../../components/product/MobileFilter";
import Pagination from "../../components/product/Pagination";
import ProductList from "../../components/product/ProductList";
import SortProduct from "../../components/product/SortProduct";
import usePagination from "../../hooks/usePagination";
import useQueryParams from "../../hooks/useQueryParams";
import useProductFilters from "../../hooks/useProductFilter";
import { useDispatch } from "react-redux";
import {
  setActiveFilters,
  setFilteredProducts,
  setFilteredProductsWithSubCat,
  setProducts,
} from "../../features/product/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { categoryId, brandQuery, materialQuery, genderQuery } =
    useQueryParams();

  const {
    productFound,
    filteredProducts,
    filteredProductsWithSubCat,
    activeFilters,
    products,
  } = useProductFilters(categoryId, brandQuery, materialQuery, genderQuery);

  const {
    currentPage,
    totalPages,
    pageProducts,
    productsPerPage,
    handlePreviousPage,
    handleNextPage,
    handlePageClick,
    startIndex,
    endIndex,
    isFilterBool,
  } = usePagination(
    filteredProductsWithSubCat,
    filteredProducts,
    products,
    activeFilters
  );

  const handleSortProduct = (products) => {
    isFilterBool
      ? dispatch(setFilteredProductsWithSubCat(products))
      : filteredProducts?.length > 0
      ? dispatch(setFilteredProducts(products))
      : dispatch(setProducts(products));
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
      // updatedFilteredProducts = updatedFilteredProducts?.filter(
      //   (product) => product?.categoryId !== value
      // );
      updatedFilteredProducts = [];
      dispatch(setFilteredProductsWithSubCat([]));
    }
    // store in filteredProducts in redux
    dispatch(setFilteredProducts(updatedFilteredProducts));
  };

  // Filter Product with sub-category logic
  const handleSubCatFilter = (e) => {
    const { name, value, checked } = e.target;

    let updatedFilters = { ...activeFilters };

    if (checked) {
      // Add the value to the array if it's not already present
      if (!updatedFilters[name]?.includes(value)) {
        updatedFilters[name] = [...updatedFilters[name], value];
      }
    } else {
      // Remove the value from the array
      updatedFilters[name] = updatedFilters[name].filter(
        (item) => item !== value
      );
    }

    // Apply all active filters
    const updatedProducts = filteredProducts?.filter((product) => {
      return Object.keys(updatedFilters).every((key) => {
        // Check if the product matches any of the values for the key
        return (
          updatedFilters[key]?.length === 0 ||
          updatedFilters[key]?.includes(product[key])
        );
      });
    });

    dispatch(setFilteredProductsWithSubCat(updatedProducts));
    dispatch(setActiveFilters(updatedFilters)); // Update Redux state with active filters
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {!productFound ? (
          <div className="pt-20 flex justify-center font-semibold">
            Store updating soon... Please Come Back Later
          </div>
        ) : (
          <div className="py-6 bg-white dark:bg-gray-900">
            {/* Mobile filter dialog */}
            <MobileFilter
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
              handleOnCategoryFilter={handleOnCategoryFilter}
              handleSubCatFilter={handleSubCatFilter}
            />

            {/* Sort / Filter / Product List / Pagination */}
            <main className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end border-b border-gray-200 dark:border-gray-700 pb-6">
                <div className="flex items-center">
                  <SortProduct
                    products={
                      isFilterBool
                        ? filteredProductsWithSubCat
                        : filteredProducts?.length > 0
                        ? filteredProducts
                        : products
                    }
                    handleSortProduct={handleSortProduct}
                  />
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
                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-5">
                  <DesktopFilter
                    handleOnCategoryFilter={handleOnCategoryFilter}
                    handleSubCatFilter={handleSubCatFilter}
                  />
                  <div className="lg:col-span-4">
                    <ProductList products={pageProducts} />
                  </div>
                </div>
              </section>

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
