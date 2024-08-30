import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductList = ({ products }) => {
  const { brands } = useSelector((state) => state.categories);

  if (products?.length === 0) {
    return (
      <div className="text-center mt-20 h-full text-red-500">
        No Products Found
      </div>
    );
  }
  return (
    <div className="bg-light dark:bg-dark">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 xl:gap-x-8">
          {products?.map((item) => (
            <div
              key={item?._id}
              className="group relative p-2 pb-4 rounded-md shadow-lg dark:bg-gray-900"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md dark:bg-white lg:aspect-none lg:h-80">
                <img
                  alt=""
                  src={item?.thumbnail}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-gray-300">
                    <Link to={`/product/${item?._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item?.name?.slice(0, 20)}
                      {item?.name?.length > 20 && "..."}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {brands?.find((brand) => brand._id === item?.brandId)?.name}
                  </p>
                </div>
                {item?.salesPrice ? (
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      ${item?.salesPrice}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-through">
                      ${item?.price}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    ${item?.price}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
