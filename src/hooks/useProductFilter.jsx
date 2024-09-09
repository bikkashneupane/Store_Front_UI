import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveFilters,
  setFilteredProducts,
  setFilteredProductsWithSubCat,
} from "../features/product/ProductSlice";

const useProductFilters = (
  categoryId,
  brandQuery,
  materialQuery,
  genderQuery
) => {
  const dispatch = useDispatch();
  const [productFound, setProductFound] = useState(true);
  const {
    products,
    filteredProducts,
    filteredProductsWithSubCat,
    activeFilters,
  } = useSelector((state) => state.products);

  useEffect(() => {
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

    // reset filter in redux store
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
  }, [categoryId, dispatch, products, brandQuery, materialQuery, genderQuery]);

  return {
    productFound,
    products,
    filteredProducts,
    filteredProductsWithSubCat,
    activeFilters,
  };
};

export default useProductFilters;
