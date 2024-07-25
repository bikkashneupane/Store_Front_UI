import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../redux/slice/ProductSlice";
import { useState } from "react";

const DesktopFilter = ({ filters }) => {
  const dispatch = useDispatch();
  const { products, filteredProducts = [] } = useSelector(
    (state) => state.products
  );

  const handleOnFilterChange = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, value, checked);

    if (checked) {
      const check = filteredProducts?.some((item) => item[name] === value);
      if (!check) {
        const updatedFilterProducts = [
          ...filteredProducts,
          ...products.filter((item) => item[name] === value),
        ];

        dispatch(setFilteredProducts(updatedFilterProducts));
      }
    } else {
      const updatedFilterProducts = filteredProducts?.filter(
        (item) => item[name] !== value
      );
      dispatch(setFilteredProducts(updatedFilterProducts));
    }
  };

  return (
    <form className="hidden lg:block">
      {filters?.map((section) => (
        <Disclosure
          key={section.id}
          as="div"
          className="border-b border-gray-200 py-6"
        >
          <h3 className="-my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{section.name}</span>
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
            <div className="space-y-4">
              {section.options.map((option, index) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    defaultChecked={option.checked}
                    id={`filter-${section.id}-${index}`}
                    name={`${section.id}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    onChange={handleOnFilterChange}
                  />
                  <label
                    htmlFor={`filter-${section.id}-${index}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </form>
  );
};
export default DesktopFilter;
