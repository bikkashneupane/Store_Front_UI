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

const customClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    dispatch(setUser({}));
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");
  };

  const itemCount = 3; // Example item count

  const navigation = [
    { name: "Browse", to: "/products", current: false },
    { name: "About", to: "/about", current: false },
    { name: "Contact", to: "/contact", current: false },
  ];

  return (
    <div className=" w-full z-50 shadow-lg">
      <Disclosure as="nav" className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between min-h-[80px]">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
            <div className="flex flex-1 items-center justify-center sm:justify-start">
              <Link
                to={"/"}
                className="flex items-center gap-1 text-gray-300 font-semibold text-xl"
              >
                <img
                  alt="Vikiasmy"
                  src={watch_logo}
                  className="h-[30px] w-[30px]  text-red-500"
                />
                <h1 className="">Vikiasmy's </h1>
              </Link>

              {/* Navigations */}
              <div className="hidden sm:block sm:flex-1 sm:justify-center">
                <div className="flex ps-2 lg:space-x-4 justify-center">
                  {navigation.map((item) => {
                    const isCurrent = location.pathname === item.to;
                    return (
                      <Link key={item.name} to={item?.to}>
                        <DisclosureButton
                          aria-current={isCurrent ? "page" : undefined}
                          className={customClassNames(
                            isCurrent
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                        >
                          {item.name}
                        </DisclosureButton>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Wish List/ Cart/ Profile */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Cart */}
              <Link
                to={"/cart"}
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-200 hover:text-white "
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View Cart</span>
                <ShoppingBagIcon aria-hidden="true" className="h-6 w-6 p-0.5" />

                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-700 border-2 border-white rounded-full">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Profile dropdown */}
              {user?.email ? (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm ">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {user?.profileImage ? (
                        <img
                          alt=""
                          src={user?.profileImage}
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full border text-gray-200 flex justify-center items-center font-semibold">
                          {user?.firstName?.charAt(0)?.toUpperCase()}
                          {user?.lastName?.charAt(0)?.toUpperCase()}
                        </div>
                      )}
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <Link
                        to={"/profile"}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        My Orders
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
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
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Login</span>
                    <UserCircleIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link key={item.name} to={item?.to}>
                <DisclosureButton
                  aria-current={item.current ? "page" : undefined}
                  className={customClassNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-400 hover:bg-gray-700 hover:text-white",
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
