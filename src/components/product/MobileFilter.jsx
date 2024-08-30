import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";

const MobileFilter = ({
  mobileFiltersOpen = false, // Ensure default boolean value
  setMobileFiltersOpen,
  handleOnCategoryFilter,
  handleSubCatFilter,
}) => {
  const { categories, brands, materials } = useSelector(
    (state) => state.categories
  );
  const { filteredProducts, activeFilters } = useSelector(
    (state) => state.products
  );

  return (
    <Dialog
      open={mobileFiltersOpen} // Ensure this is a boolean
      onClose={() => setMobileFiltersOpen(false)}
      className="relative z-50 lg:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="px-4 relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-gray-900 py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-900 dark:text-gray-100">
              Filters
            </h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 dark:text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

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
                      filteredProducts?.length
                        ? filteredProducts?.find(
                            (product) => product?.categoryId === item._id
                          )
                          ? "flex items-center"
                          : "hidden "
                        : "flex items-center"
                    }
                  >
                    <input
                      defaultValue={item?._id}
                      checked={
                        item?.checked ||
                        filteredProducts?.find(
                          (prod) => prod?.categoryId === item?._id
                        )
                          ? true
                          : false
                      }
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
                    {brands
                      ?.filter((brand) => {
                        const filteredCat = categories?.find(
                          (cat) => cat?._id === filteredProducts[0]?.categoryId
                        );
                        return filteredCat?.brand?.includes(brand?._id);
                      })
                      ?.map((item) => (
                        <div key={item._id} className="flex items-center">
                          <input
                            defaultValue={item?._id}
                            checked={
                              item?.checked ||
                              activeFilters["brandId"]?.find(
                                (itm) => itm === item?._id
                              )
                                ? true
                                : false
                            }
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
                    {materials
                      ?.filter((material) => {
                        const filteredCat = categories?.find(
                          (cat) => cat?._id === filteredProducts[0]?.categoryId
                        );
                        return filteredCat?.material?.includes(material?._id);
                      })
                      ?.map((item) => (
                        <div key={item._id} className="flex items-center">
                          <input
                            defaultValue={item?._id}
                            checked={
                              item?.checked ||
                              activeFilters["materialId"]?.find(
                                (itm) => itm === item?._id
                              )
                                ? true
                                : false
                            }
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

              {/* Maps Gender */}
              <Disclosure as={"div"} className="pt-6" defaultOpen>
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
                        defaultChecked={activeFilters?.gender?.includes("men")}
                        onChange={handleSubCatFilter}
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
                        onChange={handleSubCatFilter}
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
                        onChange={handleSubCatFilter}
                        className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-teal-400"
                      />
                      <label className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                        Unisex
                      </label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileFilter;
