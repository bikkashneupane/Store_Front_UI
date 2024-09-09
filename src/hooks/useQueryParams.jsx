import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [query] = useSearchParams();
  const categoryId = query.get("category");
  const brandQuery = query.get("brand");
  const materialQuery = query.get("material");
  const genderQuery = query.get("gender");

  return { categoryId, brandQuery, materialQuery, genderQuery };
};

export default useQueryParams;
