import { useState } from "react";

const usePagination = (
  filteredProductsWithSubCat,
  filteredProducts,
  products,
  activeFilters
) => {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;
  const isFilterPresentArr = Object.values(activeFilters).map(
    (filters) => filters.length
  );
  const isFilterBool = isFilterPresentArr.some((item) => item > 0);

  const totalPages = Math.ceil(
    (filteredProductsWithSubCat?.length > 0
      ? filteredProductsWithSubCat
      : filteredProducts?.length > 0
      ? filteredProducts
      : products
    )?.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const pageProducts = (
    isFilterBool
      ? filteredProductsWithSubCat
      : filteredProducts?.length > 0
      ? filteredProducts
      : products
  ).slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return {
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
  };
};

export default usePagination;
