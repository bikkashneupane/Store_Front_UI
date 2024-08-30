import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { Fragment } from "react";
// components/MobileMenu.js
import { Link } from "react-router-dom";
import watch_logo from "../../../assets/images/watch_logo.png";

const MobileMenu = (props) => {
  const {
    navigation,
    mobileOpen,
    setMobileOpen,
    setCurrentCatId,
    currentCatId,
  } = props;

  return (
    <Transition
      as={Fragment}
      show={mobileOpen}
      enter="transition-opacity ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <DisclosurePanel className="fixed inset-0 z-50  text-white">
        <div
          className="absolute inset-0 bg-black bg-opacity-60"
          onClick={() => setMobileOpen(false)}
        />
        <div className="bg-gray-900 flex flex-col px-8 py-2 w-[350px] h-full relative overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-1 font-semibold text-xl my-4"
            >
              <img
                alt="Vikiasmy"
                src={watch_logo}
                className="h-[30px] w-[30px]"
              />
              <h1>vikiasmy's</h1>
            </Link>

            <DisclosureButton
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white"
            >
              <XMarkIcon className="block h-6 w-6" />
            </DisclosureButton>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {navigation?.map((item) => (
              <Disclosure key={item?._id || item?.name}>
                <DisclosureButton
                  className="group flex w-full items-center justify-between py-3 text-gray-300 hover:text-white"
                  onClick={() => setCurrentCatId(item?._id)}
                >
                  <Link
                    to={item?.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-semibold tracking-widest"
                  >
                    {item.name.toUpperCase()}
                  </Link>
                  {item._id && (
                    <span>
                      <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
                      <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                    </span>
                  )}
                </DisclosureButton>
                {item?._id && (
                  <DisclosurePanel>
                    <Disclosure as="div" className="ps-4 mb-3">
                      <DisclosureButton className="group flex w-full items-center justify-between py-3">
                        <Link
                          to={item?.to}
                          onClick={() => setMobileOpen(false)}
                          className="font-semibold text-[13px] text-gray-400 hover:text-gray-200"
                        >
                          SHOP BY BRAND
                        </Link>

                        <span>
                          <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>

                      <DisclosurePanel>
                        <div className="ms-4 ps-6 flex flex-col gap-4 pt-3 border-l text-gray-400">
                          {item?.catBrands?.map((brand) => (
                            <Link
                              to={`/products?category=${currentCatId}&brand=${brand?._id}`}
                              key={brand?._id}
                              className="text-sm hover:text-gray-200"
                              onClick={() => setMobileOpen(false)}
                            >
                              {brand?.name}
                            </Link>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>

                    <Disclosure as="div" className="ps-4 mb-3">
                      <DisclosureButton className="group flex w-full items-center justify-between py-3 text-gray-300">
                        <Link
                          to={item?.to}
                          onClick={() => setMobileOpen(false)}
                          className="font-semibold text-[13px] text-gray-400 hover:text-gray-200"
                        >
                          SHOP BY MATERIAL
                        </Link>

                        <span>
                          <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>

                      <DisclosurePanel>
                        <div className="ms-4 ps-6 flex flex-col gap-4 pt-3 border-l text-gray-400">
                          {item?.catMaterials?.map((material) => (
                            <Link
                              to={`/products?category=${currentCatId}&material=${material?._id}`}
                              key={material?._id}
                              className="text-sm hover:text-gray-200"
                              onClick={() => setMobileOpen(false)}
                            >
                              {material?.name}
                            </Link>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>

                    <DisclosureButton className="ps-4 mb-3 flex w-full items-center justify-between py-3 text-gray-300 hover:text-white">
                      <Link
                        to={`/products?category=${currentCatId}&gender=men`}
                        onClick={() => setMobileOpen(false)}
                        className="font-semibold text-[13px] text-gray-400 hover:text-gray-200"
                      >
                        MENS
                      </Link>
                    </DisclosureButton>

                    <DisclosureButton className="ps-4 mb-3 flex w-full items-center justify-between py-3 text-gray-300 hover:text-white">
                      <Link
                        to={`/products?category=${currentCatId}&gender=women`}
                        onClick={() => setMobileOpen(false)}
                        className="font-semibold text-[13px] text-gray-400 hover:text-gray-200"
                      >
                        WOMENS
                      </Link>
                    </DisclosureButton>
                  </DisclosurePanel>
                )}
                <hr className="border-gray-500" />
              </Disclosure>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Transition>
  );
};

export default MobileMenu;
