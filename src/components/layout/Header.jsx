import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import watch_logo from "../../assets/images/watch_logo.png";
import { setUser } from "../../features/user/UserSlice";
import DarkMode from "../custom/DarkMode";
import { Fragment, useEffect, useState } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [currentBrand, setCurrentBrand] = useState([]);
  const [currentMaterial, setCurrentMaterial] = useState([]);
  const [currentCatId, setCurrentCatId] = useState("");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.carts);
  const { categories, brands, materials } = useSelector(
    (state) => state.categories
  );

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnLogout = () => {
    dispatch(setUser({}));
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");
  };

  const navigation = [
    ...(categories || []).map((cat) => ({
      _id: cat?._id,
      name: cat?.title,
      to: `/products?category=${cat?._id}`,
      catBrands: (brands || []).filter((item) =>
        cat.brand?.includes(item?._id)
      ),
      catMaterials: (materials || []).filter((item) =>
        cat.material?.includes(item?._id)
      ),
    })),
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Cart", to: "/cart", mobile: true },
    { name: "Profile", to: "/profile", mobile: true },
  ];

  return (
    <div className="w-full shadow-lg sticky top-0 z-50">
      <Disclosure
        as="nav"
        className={`${
          scrollY > 0 && "bg-gray-900 text-white"
        } transition-colors duration-300 dark:bg-gray-900 dark:border-b dark:border-b-gray-700`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative flex items-center justify-between py-6">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <DisclosureButton
                onClick={() => setMobileOpen(true)}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
              </DisclosureButton>
            </div>
            <div className="mx-auto flex flex-1 items-center justify-center md:justify-start">
              <Link
                to={"/"}
                className="flex items-center gap-1 text-gray-700 dark:text-gray-200 font-semibold text-xl"
              >
                <img
                  alt="Vikiasmy"
                  src={watch_logo}
                  className="h-[30px] w-[30px]"
                />
                <h1 className={scrollY > 0 ? "text-gray-200" : ""}>
                  vikiasmy's
                </h1>
              </Link>

              {/* Navigations */}
              <div className="hidden md:block sm:flex-1 sm:justify-center">
                <div className="flex ps-2 lg:space-x-4 justify-center">
                  {navigation
                    .filter((item) => !item.mobile)
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
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden md:inline">
                {user?._id ? (
                  <Menu as="div" className="relative ml-3 z-40">
                    <div>
                      <MenuButton
                        className={`${
                          scrollY > 0 ? "bg-gray-800" : "bg-white"
                        } relative flex p-1 rounded-full border dark:border-gray-600 text-sm dark:bg-gray-800 hover:border-purple-600 cursor-pointer shadow-xl`}
                      >
                        {user?.profileImage ? (
                          <img
                            alt=""
                            src={user?.profileImage}
                            className="h-7 w-7 p-0.5"
                          />
                        ) : (
                          <div
                            className={`${
                              scrollY > 0 ? "text-gray-200" : ""
                            } w-7 h-7 p-0.5 rounded-full dark:text-gray-200 flex justify-center items-center font-semibold`}
                          >
                            {user?.firstName?.charAt(0)?.toUpperCase()}
                            {user?.lastName?.charAt(0)?.toUpperCase()}
                          </div>
                        )}
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <MenuItem>
                        <Link
                          to={"/profile"}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-700"
                        >
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to={"/my-orders"}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-700"
                        >
                          My Orders
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <div
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-700 cursor-pointer"
                          onClick={handleOnLogout}
                        >
                          Logout
                        </div>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                ) : (
                  <Link to={"/login"}>
                    <div
                      className={`dark:text-gray-300 rounded-full shadow border dark:bg-gray-800 dark:border-gray-600 ${
                        scrollY > 0
                          ? "bg-gray-800 text-gray-300 border-gray-600"
                          : "bg-white text-gray-800 border-gray-300"
                      }`}
                    >
                      <UserCircleIcon className="h-6 w-6" />
                    </div>
                  </Link>
                )}
              </div>

              <DarkMode />

              <Link to={"/cart"}>
                <div className="relative flex">
                  <ShoppingBagIcon
                    className={`${
                      scrollY > 0 ? "text-gray-200" : "text-gray-800"
                    } dark:text-gray-300 w-6 h-6`}
                  />
                  <span className="absolute -top-2 left-4 bg-red-500 text-white rounded-full text-xs font-semibold px-[7px]">
                    {cart?.reduce((acc, curr) => acc + curr?.quantity, 0)}
                  </span>
                </div>
              </Link>
            </div>
          </div>

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
            <DisclosurePanel className="fixed inset-0 z-40 overflow-y-auto text-white min-h-full">
              <div className="bg-black w-full h-full bg-opacity-40 absolute"></div>
              <div className="bg-gray-900 flex flex-col px-8 py-2 w-[350px] h-full relative">
                <div className="flex items-center justify-between">
                  <Link
                    to="/"
                    className="flex items-baseline gap-1 font-semibold text-xl my-4"
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
                  {navigation.map((item) => (
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
        </div>

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
      </Disclosure>
    </div>
  );
};

export default Header;
