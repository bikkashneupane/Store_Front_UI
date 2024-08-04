import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../features/product/ProductSlice";

const DesktopFilter = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { products, filteredProducts = [] } = useSelector(
    (state) => state.products
  );

  const handleOnCategoryFilter = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, value, checked);
    let updatedFilteredProducts = [];

    if (checked) {
      console.log(checked);
      const check = filteredProducts?.some(
        (item) => item?.categoryId === value
      );

      updatedFilteredProducts = check
        ? filteredProducts?.filter((item) => item?.categoryId !== value)
        : [
            ...filteredProducts,
            products?.filter((product) => product?.categoryId === value),
          ];
    } else {
      updatedFilteredProducts = filteredProducts?.filter(
        (item) => item?.categoryId !== value
      );
    }

    console.log(updatedFilteredProducts[0]);
    dispatch(setFilteredProducts(updatedFilteredProducts[0]));
  };

  return (
    <form className="hidden lg:block">
      <div className="">
        <Disclosure
          as="div"
          className="border-b border-gray-200 dark:border-gray-700 py-6"
        >
          <h3 className="-my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-gray-300">
                Categories
              </span>
              <span className="ml-6 flex items-center">
                <PlusIcon
                  aria-hidden="true"
                  className="h-5 w-5 group-data-[open]:hidden"
                />
                <MinusIcon
                  aria-hidden="true"
                  className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </DisclosureButton>
          </h3>

          {/* {categories?.map((cat) => ( */}
          <DisclosurePanel className="pt-6">
            <div className="space-y-4">
              {categories?.map((item) => (
                <div key={item._id} className="flex items-center">
                  <input
                    defaultValue={item?._id}
                    defaultChecked={item?.checked}
                    id={item?._id}
                    name={item?.slug}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
                    onChange={handleOnCategoryFilter}
                  />
                  <label
                    htmlFor={item?._id}
                    className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {item?.title}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
          {/* ))} */}
        </Disclosure>
      </div>

      {/* map subcategories depending on category selection */}
    </form>
  );
};

export default DesktopFilter;
