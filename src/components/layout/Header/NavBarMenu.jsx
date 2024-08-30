import { DisclosureButton } from "@headlessui/react";
import { Link } from "react-router-dom";

const NavbarMenu = ({
  navigation,
  setCurrentCatId,
  setCurrentBrand,
  setCurrentMaterial,
  setShowCat,
}) => (
  <div className="hidden md:block sm:flex-1 sm:justify-center">
    <div className="flex ps-2 lg:space-x-4 justify-center">
      {navigation
        ?.filter((item) => !item.mobile)
        .map((item) => {
          return item?.catBrands ? (
            <Link
              key={item?._id}
              to={item?.to}
              onMouseOver={() => {
                setCurrentCatId(item?._id);
                setCurrentBrand(item?.catBrands);
                setCurrentMaterial(item?.catMaterials);
                setShowCat(true);
              }}
            >
              <button
                className={`${
                  scrollY > 0 ? "text-gray-200" : "text-gray-700"
                } dark:text-gray-300 hover:bg-gray-600 hover:text-white block rounded-md px-3 py-2 font-bold`}
              >
                {item?.name}
              </button>
            </Link>
          ) : (
            <Link
              key={item?.name}
              to={item?.to}
              onMouseOver={() => setShowCat(false)}
            >
              <DisclosureButton
                className={`${
                  scrollY > 0 ? "text-gray-200" : "text-gray-700"
                } dark:text-gray-300 hover:bg-gray-600 hover:text-white block rounded-md px-3 py-2 font-bold`}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          );
        })}
    </div>
  </div>
);

export default NavbarMenu;
