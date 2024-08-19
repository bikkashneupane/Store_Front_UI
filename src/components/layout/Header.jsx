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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const { categories } = useSelector((state) => state.categories);

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
    { name: "Browse", to: "/products" },
    {
      name: "Categories",
      to: "/categories",
      options: categories?.map((cat) => ({
        name: cat?.title,
        to: `/products?category=${cat?.title}&cat_id=${cat?._id}`,
      })),
    },
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

              <div className="hidden md:block sm:flex-1 sm:justify-center">
                <div className="flex ps-2 lg:space-x-4 justify-center">
                  {navigation
                    .filter((item) => !item.mobile)
                    .map((item) => {
                      return item?.options ? (
                        <Menu as="div" key={item?.name} className="relative">
                          <MenuButton
                            className={`${
                              scrollY > 0 ? "text-gray-200" : "text-gray-700"
                            } dark:text-gray-300 hover:bg-gray-600 hover:text-white block rounded-md px-3 py-2 font-bold cursor-pointer`}
                          >
                            {item?.name}
                          </MenuButton>

                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {item?.options?.map((opt, i) => (
                              <MenuItem key={`${opt?.name}-${i}`}>
                                <Link
                                  to={opt?.to}
                                  className="block px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-200 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-700"
                                >
                                  {opt?.name}
                                </Link>
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                      ) : (
                        <Link key={item?.name} to={item?.to}>
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
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton
                        className={`${
                          scrollY > 0 ? "bg-gray-800" : "bg-white"
                        } relative flex p-1 rounded-full border dark:border-gray-600 text-sm dark:bg-gray-800 hover:border-purple-600 cursor-pointer shadow-xl`}
                      >
                        {user?.profileImage !== "" ? (
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
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-700"
                        >
                          My Orders
                        </a>
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
                    <div className="bg-white rounded-full shadow p-1 border border-gray-300 dark:bg-gray-800 dark:border-gray-600">
                      <UserCircleIcon className="h-6 w-6 text-gray-800 dark:text-gray-300" />
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
        </div>

        {/* Mobile Menu */}
        <Transition
          show={mobileOpen}
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="-translate-x-full opacity-0"
        >
          <div className="fixed inset-0 z-40 flex lg:hidden">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={() => setMobileOpen(false)}
            ></div>

            {/* Mobile Menu */}
            <div className="relative  w-full max-w-xs bg-white dark:bg-gray-900 p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-gray-900 dark:text-gray-100 ps-2">
                  vikiasmy's
                </h2>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 dark:text-gray-300"
                >
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              <DisclosurePanel static>
                <div className="flex flex-col gap-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="block rounded-md px-3 py-2 text-base font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </DisclosurePanel>
            </div>
          </div>
        </Transition>
      </Disclosure>
    </div>
  );
};

export default Header;
