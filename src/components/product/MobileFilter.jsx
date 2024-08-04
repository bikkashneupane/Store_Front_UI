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
  const { categories, subCategories } = useSelector(
    (state) => state.categories
  );
  const { filteredProducts = [] } = useSelector((state) => state.products);

  return (
    <Dialog
      open={mobileFiltersOpen} // Ensure this is a boolean
      onClose={() => setMobileFiltersOpen(false)}
      className="relative z-40 lg:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-gray-800 py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
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

          <form className="mt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Categories */}
            <Disclosure
              as="div"
              className="border-t border-gray-200 dark:border-gray-700 px-4 py-6"
            >
              <h3 className="-mx-2 -my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 px-2 py-3 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
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
              <DisclosurePanel className="pt-6">
                <div className="space-y-6">
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
                        defaultValue={item._id}
                        id={item._id}
                        name={item.slug}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 dark:bg-gray-800 dark:focus:ring-teal-400"
                        onChange={handleOnCategoryFilter}
                      />
                      <label
                        htmlFor={item._id}
                        className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                      >
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>

            {/* Brands */}
            {filteredProducts?.length > 0 && (
              <Disclosure
                as="div"
                className="border-t border-gray-200 dark:border-gray-700 px-4 py-6"
              >
                <h3 className="-mx-2 -my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 px-2 py-3 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
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
                <DisclosurePanel className="pt-6">
                  <div className="space-y-6">
                    {subCategories
                      ?.find(
                        (subCat) =>
                          subCat.parentCategoryId ===
                          filteredProducts[0]?.categoryId
                      )
                      ?.brand?.map((item) => (
                        <div key={item._id} className="flex items-center">
                          <input
                            defaultValue={item._id}
                            id={item._id}
                            name="brandId"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 dark:bg-gray-800 dark:focus:ring-teal-400"
                            onChange={handleSubCatFilter}
                          />
                          <label
                            htmlFor={item._id}
                            className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            )}

            {/* Material */}
            {filteredProducts?.length > 0 && (
              <Disclosure
                as="div"
                className="border-t border-gray-200 dark:border-gray-700 px-4 py-6"
              >
                <h3 className="-mx-2 -my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 px-2 py-3 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
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
                <DisclosurePanel className="pt-6">
                  <div className="space-y-6">
                    {subCategories
                      ?.find(
                        (subCat) =>
                          subCat.parentCategoryId ===
                          filteredProducts[0]?.categoryId
                      )
                      ?.material?.map((item) => (
                        <div key={item._id} className="flex items-center">
                          <input
                            defaultValue={item._id}
                            id={item._id}
                            name="materialId"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 dark:bg-gray-800 dark:focus:ring-teal-400"
                            onChange={handleSubCatFilter}
                          />
                          <label
                            htmlFor={item._id}
                            className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            )}

            {/* Gender */}
            {filteredProducts?.length > 0 && (
              <Disclosure
                as="div"
                className="border-t border-gray-200 dark:border-gray-700 px-4 py-6"
              >
                <h3 className="-mx-2 -my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 px-2 py-3 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      Gender
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
                <DisclosurePanel className="pt-6">
                  <div className="space-y-6">
                    {subCategories
                      ?.find(
                        (subCat) =>
                          subCat.parentCategoryId ===
                          filteredProducts[0]?.categoryId
                      )
                      ?.gender?.map((item) => (
                        <div key={item} className="flex items-center">
                          <input
                            defaultValue={item}
                            id={item}
                            name="gender"
                            value={item}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 dark:bg-gray-800 dark:focus:ring-teal-400"
                            onChange={handleSubCatFilter}
                          />
                          <label
                            htmlFor={item}
                            className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            )}
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileFilter;
