import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const DesktopFilter = ({
  handleOnCategoryFilter,
  handleSubCatFilter,
  handleGenderFilter,
}) => {
  const { categories, subCategories } = useSelector(
    (state) => state.categories
  );
  const { filteredProducts = [] } = useSelector((state) => state.products);

  return (
    <div className="hidden lg:block">
      {/* Map Categories */}
      <Disclosure
        as="div"
        className="border-b border-gray-200 dark:border-gray-700 py-6"
        defaultOpen
      >
        <h3 className="-my-3 flow-root">
          <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-gray-300">
              Categories
            </span>
            <span className="ml-6 flex items-center">
              <PlusIcon
                aria-hidden="false"
                className="h-5 w-5 group-data-[open]:hidden"
              />
              <MinusIcon
                aria-hidden="true"
                className="h-5 w-5 [.group:not([data-open])_&]:hidden"
              />
            </span>
          </DisclosureButton>
        </h3>

        {/* Categories Options */}
        <DisclosurePanel className="pt-6">
          <div className="space-y-4">
            {categories?.map((item) => (
              <div
                key={item._id}
                className={
                  filteredProducts?.length > 0
                    ? filteredProducts[0]?.categoryId === item?._id
                      ? "flex items-center"
                      : "hidden"
                    : "flex items-center"
                }
              >
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

      {/* Map subCategories depending on category selection */}
      {filteredProducts?.length > 0 && (
        <>
          {/* Brand */}
          <Disclosure
            as="div"
            className="border-b border-gray-200 dark:border-gray-700 py-6"
            defaultOpen
          >
            <h3 className="-my-3 flow-root">
              <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-gray-300">
                  Brand
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

            {/* Brand Options */}
            <DisclosurePanel className="pt-6">
              <div className="space-y-4">
                {subCategories
                  ?.find(
                    (subCat) =>
                      subCat?.parentCategoryId ===
                      filteredProducts[0]?.categoryId
                  )
                  ?.brand?.map((item) => (
                    <div key={item._id} className="flex items-center">
                      <input
                        defaultValue={item?._id}
                        defaultChecked={item?.checked}
                        id={item?._id}
                        name="brandId"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
                        onChange={handleSubCatFilter}
                      />
                      <label
                        htmlFor={item?._id}
                        className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                      >
                        {item?.name}
                      </label>
                    </div>
                  ))}
              </div>
            </DisclosurePanel>
          </Disclosure>

          {/* Material */}
          <Disclosure
            as="div"
            className="border-b border-gray-200 dark:border-gray-700 py-6"
            defaultOpen
          >
            <h3 className="-my-3 flow-root">
              <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-gray-300">
                  Material Type
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

            {/* Material Options */}
            <DisclosurePanel className="pt-6">
              <div className="space-y-4">
                {subCategories
                  ?.find(
                    (subCat) =>
                      subCat?.parentCategoryId ===
                      filteredProducts[0]?.categoryId
                  )
                  ?.material?.map((item) => (
                    <div key={item._id} className="flex items-center">
                      <input
                        defaultValue={item?._id}
                        defaultChecked={item?.checked}
                        id={item?._id}
                        name="materialId"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
                        onChange={handleSubCatFilter}
                      />
                      <label
                        htmlFor={item?._id}
                        className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                      >
                        {item?.name}
                      </label>
                    </div>
                  ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        </>
      )}

      {/* Maps Gender */}
      <Disclosure as={"div"} defaultOpen className="pt-6">
        <h3 className="-my-3 flow-root">
          <DisclosureButton className="group flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
            {" "}
            <span className="font-medium text-gray-900 dark:text-gray-300">
              Gender
            </span>
            <span>
              <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
              <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
            </span>
          </DisclosureButton>
        </h3>
        <DisclosurePanel className="pt-6">
          <div className="space-y-2">
            <div className="">
              <input
                name="gender"
                type="checkbox"
                value="men"
                onChange={handleGenderFilter}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
              />
              <label className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                Men
              </label>
            </div>
            <div className="">
              <input
                name="gender"
                type="checkbox"
                value="women"
                onChange={handleGenderFilter}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
              />
              <label className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                Women
              </label>
            </div>
            <div className="">
              <input
                name="gender"
                type="checkbox"
                value="unisex"
                onChange={handleGenderFilter}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
              />
              <label className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                Unisex
              </label>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default DesktopFilter;
