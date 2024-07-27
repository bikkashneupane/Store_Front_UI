import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
          {products?.map((item) => (
            <div
              key={item?._id}
              className="group relative p-2 pb-4 rounded-md shadow-lg"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  group-hover:bg-teal-200 lg:h-80">
                <img
                  alt=""
                  src={item?.thumbnail}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${item?._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item?.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item?.brand}</p>
                </div>
                {item?.sales?.isSales ? (
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-900">
                      ${item?.sales?.salesPrice}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 line-through">
                      ${item?.price}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm font-medium text-gray-900">
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
