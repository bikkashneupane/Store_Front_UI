import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredProducts,
  setFilteredProductsWithSubCat,
  setActiveFilters,
} from "../../features/product/ProductSlice";

const useProductFilters = (
  categoryId,
  brandQuery,
  materialQuery,
  genderQuery
) => {
  const dispatch = useDispatch();
  const {
    products,
    filteredProducts,
    filteredProductsWithSubCat,
    activeFilters,
  } = useSelector((state) => state.products);

  const [productFound, setProductFound] = useState(true);

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
  }, [categoryId, dispatch, products, brandQuery, materialQuery, genderQuery]);

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

  return {
    productFound,
    filteredProducts,
    filteredProductsWithSubCat,
    activeFilters,
  };
};

export default useProductFilters;
