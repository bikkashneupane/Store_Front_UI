import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import watch_logo from "../../assets/images/watch_logo.png";
import { setUser } from "../../features/user/UserSlice";
import DarkMode from "../custom/DarkMode";

const customClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  const handleOnLogout = () => {
    dispatch(setUser({}));
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");
  };

  const navigation = [
    { name: "Browse", to: "/products", current: false },
    { name: "About", to: "/about", current: false },
    { name: "Contact", to: "/contact", current: false },
    { name: "Cart", to: "/cart", current: false, mobile: true },
    { name: "Profile", to: "/profile", current: false, mobile: true },
  ];

  return (
    <div className="w-full z-50 shadow-lg">
      <Disclosure as="nav" className="bg-light dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between min-h-[120px]">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="mx-auto flex flex-1 items-center justify-center md:justify-start">
              <Link
                to={"/"}
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-semibold text-xl"
              >
                <img
                  alt="Vikiasmy"
                  src={watch_logo}
                  className="h-[30px] w-[30px]"
                />
                <h1>Vikiasmy's</h1>
              </Link>

              {/* Navigations */}
              <div className="hidden md:block sm:flex-1 sm:justify-center">
                <div className="flex ps-2 lg:space-x-4 justify-center">
                  {navigation
                    .filter((item) => !item.mobile)
                    .map((item) => {
                      const isCurrent = location.pathname === item.to;
                      return (
                        <Link key={item.name} to={item?.to}>
                          <DisclosureButton
                            aria-current={isCurrent ? "page" : undefined}
                            className="text-gray-700 dark:text-gray-300 hover:bg-gray-600 hover:text-white block rounded-md px-3 py-2 font-bold"
                          >
                            {item.name}
                          </DisclosureButton>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* Dark Mode/ Wish List/ Cart/ Profile */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-3 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Dark Mode */}
              <DarkMode />

              {/* Cart */}
              <Link
                to={"/cart"}
                type="button"
                className="hidden md:inline relative dark:bg-gray-800 p-1 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white rounded-full cursor-pointer"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View Cart</span>
                <ShoppingBagIcon aria-hidden="true" className="h-7 w-7 p-0.5" />

                {cart?.length > 0 && (
                  <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-700 border-2 border-white rounded-full">
                    {cart?.reduce((acc, curr) => acc + curr.quantity, 0)}
                  </span>
                )}
              </Link>

              {/* Profile dropdown */}
              <div className="hidden md:inline">
                {user?.email ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full text-sm">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        {user?.profileImage ? (
                          <img
                            alt=""
                            src={user?.profileImage}
                            className="h-7 w-7 p-0.5 rounded-full"
                          />
                        ) : (
                          <div className="w-7 h-7 p-0.5 rounded-full border text-gray-200 flex justify-center items-center font-semibold">
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
                    <button
                      type="button"
                      className="relative dark:bg-gray-800 p-1 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white rounded-full cursor-pointer"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Login</span>
                      <UserCircleIcon aria-hidden="true" className="h-7 w-7" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link key={item.name} to={item?.to}>
                <DisclosureButton
                  aria-current={item.current ? "page" : undefined}
                  className={customClassNames(
                    item.current
                      ? "bg-gray-700 text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-600 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default Header;
