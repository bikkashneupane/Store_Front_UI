import { Link } from "react-router-dom";

const CategoriesDropDown = ({
  showCat,
  setShowCat,
  currentBrand,
  currentCatId,
  currentMaterial,
}) => {
  return (
    <>
      {showCat && (
        <div
          className={`${
            scrollY > 0 ? "bg-gray-900 border-y-gray-500" : "bg-gray-100"
          } dark:bg-gray-900 border-y dark:border-y-gray-600 absolute z-30 w-full min-h-[320px]`}
          onMouseOver={() => setShowCat(true)}
          onMouseOut={() => setShowCat(false)}
        >
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-4 flex justify-around">
            <div>
              <h1 className="font-bold mb-3">Shop By Brand</h1>
              <div className="flex flex-col gap-2 font-semibold text-sm">
                {currentBrand?.map((item) => (
                  <Link
                    to={`/products?category=${currentCatId}&brand=${item?._id}`}
                    onClick={() => setShowCat(false)}
                    key={item?._id}
                    className={`${
                      scrollY > 0 ? "text-gray-200" : ""
                    } hover:text-gray-500`}
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-bold mb-3">Shop By Material</h1>
              <div className="flex flex-col gap-2 font-semibold text-sm">
                {currentMaterial?.map((item) => (
                  <Link
                    to={`/products?category=${currentCatId}&material=${item?._id}`}
                    key={item?._id}
                    className={`${
                      scrollY > 0 ? "text-gray-200" : ""
                    } hover:text-gray-500`}
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-bold mb-3">Shop By Gender</h1>
              <div className="flex flex-col gap-2 font-semibold text-sm">
                {[
                  {
                    name: "Men",
                    value: "men",
                  },
                  {
                    name: "Women",
                    value: "women",
                  },
                ].map((item) => (
                  <Link
                    to={`/products?category=${currentCatId}&gender=${item?.value}`}
                    key={`${Date.now()}-${item?.value}`}
                    className={`${
                      scrollY > 0 ? "text-gray-200" : ""
                    } hover:text-gray-500`}
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoriesDropDown;
