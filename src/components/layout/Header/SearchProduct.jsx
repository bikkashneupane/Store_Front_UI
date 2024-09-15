import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SearchProduct = ({
  showSearchInput,
  searchRef,
  searchProducts,
  handleOnInputChange,
  handleClearSearch,
}) => {
  return (
    <>
      {showSearchInput && (
        <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-black bg-opacity-70 z-10 flex justify-center mx-auto">
          <div
            ref={searchRef}
            className={`bg-gray-100 w-full md:w-2/3 lg:w-1/3 md:left-1/2 mt-4 md:mt-24 rounded overflow-y-scroll mx-4 md:mx-0 ${
              searchProducts?.length > 0 ? "h-[50vh]" : "h-12"
            }`}
          >
            <div className="relative">
              <MagnifyingGlassIcon className="w-7 h-7 absolute translate-y-1/3 left-2" />
              <input
                type="text"
                className="w-full h-12 border-none shadow-lg py-2 px-10 bg-gray-50 text-black focus:ring-1 pt-1 focus:ring-purple-500"
                placeholder="SEARCH..."
                onChange={handleOnInputChange}
              />
              <span
                className="font-bold text-xl absolute translate-y-1/3 right-4 cursor-pointer"
                onClick={handleClearSearch}
              >
                X
              </span>
            </div>
            {searchProducts?.length > 0 && (
              <div className="p-4">
                {searchProducts?.map((item) => (
                  <div
                    key={item?._id}
                    className="p-2 border-b last:border-b-0 mt-4"
                  >
                    <Link
                      to={`/product/${item?._id}`}
                      className="flex items-center gap-4"
                      onClick={handleClearSearch}
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-20"
                      />
                      <div className="text-gray-500 text-sm">
                        <p className="font-semibold">
                          {item?.name?.slice(0, 40)}...
                        </p>
                        <p>{item.sku}</p>
                        <p>
                          ${(item.salesPrice || item.price)?.toLocaleString()}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchProduct;
