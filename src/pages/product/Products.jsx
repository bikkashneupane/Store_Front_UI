import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileFilter from "../../components/product/MobileFilter";
import DesktopFilter from "../../components/product/DesktopFilter";
import ProductList from "../../components/product/ProductList";
import Pagination from "../../components/product/Pagination";
import {
  setFilteredProducts,
  setFilteredProductsWithSubCat,
  setActiveFilters,
  setProducts,
} from "../../features/product/ProductSlice";
import { useSearchParams } from "react-router-dom";
import SortProduct from "../../components/product/SortProduct";
import { FunnelIcon } from "@heroicons/react/24/outline";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [productFound, setProductFound] = useState(true);

  const dispatch = useDispatch();
  const {
    products,
    filteredProducts,
    filteredProductsWithSubCat,
    activeFilters,
  } = useSelector((state) => state.products);

  const [query] = useSearchParams();
  const categoryId = query.get("category");
  const brandQuery = query.get("brand");
  const materialQuery = query.get("material");
  const genderQuery = query.get("gender");

  useEffect(() => {
    // category selected from navlink
    if (categoryId) {
      const catProducts = products?.filter(
        (product) => product?.categoryId === categoryId
      );

      if (catProducts?.length === 0) {
        setProductFound(false);
        return;
      }

      dispatch(setFilteredProducts(catProducts));
      setProductFound(true);

      const updatedFilters = {
        brandId: brandQuery ? [brandQuery] : [],
        materialId: materialQuery ? [materialQuery] : [],
        gender: genderQuery ? [genderQuery] : [],
      };

      dispatch(setActiveFilters(updatedFilters));

      const filterConditions = [
        { query: genderQuery, field: "gender" },
        { query: brandQuery, field: "brandId" },
        { query: materialQuery, field: "materialId" },
      ];

      const subCatProducts = filterConditions
        .filter(({ query }) => query)
        .reduce((filtered, { field, query }) => {
          return filtered.filter((item) => item[field] === query);
        }, catProducts);

      dispatch(setFilteredProductsWithSubCat(subCatProducts));
    }
  }, [categoryId, dispatch, products, brandQuery, materialQuery, genderQuery]);

  //reset redux filters products
  useEffect(() => {
    return () => {
      dispatch(setFilteredProducts([]));
      dispatch(setFilteredProductsWithSubCat([]));
      dispatch(
        setActiveFilters({
          brandId: [],
          materialId: [],
          gender: [],
        })
      );
    };
  }, [dispatch]);

  // total products per page
  const productsPerPage = 6;

  // total pages -> for pagination
  const totalPages = Math.ceil(
    (filteredProductsWithSubCat?.length > 0
      ? filteredProductsWithSubCat
      : filteredProducts?.length > 0
      ? filteredProducts
      : products
    )?.length / productsPerPage
  );
  // pagination -> product 1 to 100
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // if selecedFilter is not empty, and  filteredwithSubCat === 0, setpageProduct to [] else send
  let isFilterPresentArr = [];
  for (let key in activeFilters) {
    isFilterPresentArr.push(activeFilters[key]?.length);
  }

  const isFilterBool = isFilterPresentArr?.some((item) => item > 0);

  // current page products
  const pageProducts = (
    isFilterBool
      ? filteredProductsWithSubCat
      : filteredProducts?.length > 0
      ? filteredProducts
      : products
  ).slice(startIndex, endIndex);

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

  // handle sort products
  const handleSortProduct = (products) => {
    isFilterBool
      ? dispatch(setFilteredProductsWithSubCat(products))
      : filteredProducts?.length > 0
      ? dispatch(setFilteredProducts(products))
      : dispatch(setProducts(products));
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
              <div className="flex justify-end border-b border-gray-200 dark:border-gray-700 pb-6 ">
                {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-300">
                  Browse Store
                </h1> */}

                <div className="flex items-center">
                  {/* Sort Products by price / best rated */}
                  {}
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
                  {/* Filters */}
                  <DesktopFilter
                    handleOnCategoryFilter={handleOnCategoryFilter}
                    handleSubCatFilter={handleSubCatFilter}
                  />

                  {/* Product grid */}
                  <div className="lg:col-span-4">
                    <ProductList products={pageProducts} />
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
