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
  BellIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setUser } from "../../../redux/slice/UserSlice";

const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Categories", to: "/categories", current: false },
  { name: "About", to: "/about", current: false },
  { name: "Contact", to: "/contact", current: false },
];

const customClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    dispatch(setUser({}));
  };

  const itemCount = 1; // Example item count

  return (
    <Disclosure as="nav" className="bg-purple-800 dark:bg-gray-800">
      <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between min-h-[100px]">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
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
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link
              to={"/"}
              className="flex flex-shrink-0 items-center text-white font-semibold text-xl"
            >
              {/* <img
                alt="Your Company"
                src="https://banner2.cleanpng.com/20180802/tlv/kisspng-logo-emblem-festina-brand-watch-festina-logo-svg-vector-amp-png-transparent-ve-5b63418829d864.0411573315332314961714.jpg"
                className="h-8 w-auto"
              /> */}
              Company Logo
            </Link>
            <div className="hidden sm:block sm:flex-1 sm:justify-center">
              <div className="flex space-x-4 justify-center">
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View Cart</span>
              <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />

              {itemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 border-2 border-white rounded-full">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Profile dropdown */}
            {user?.email ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://media.licdn.com/dms/image/D5603AQHqt_A9Xl1K9A/profile-displayphoto-shrink_800_800/0/1719015240386?e=1726099200&v=beta&t=o26enXIeOf2keAOUIPOAfdb80iJqK2HfLJZnqWr11jA"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
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
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
  );
};

export default Header;
