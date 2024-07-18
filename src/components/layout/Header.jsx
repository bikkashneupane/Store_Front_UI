import React, { useState } from "react";
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
  HeartIcon,
  MoonIcon,
  ShoppingCartIcon,
  SunIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setUser } from "../../redux/slice/UserSlice";
import { shipping_truck } from "../../assets/constants/constants";
import watch_logo from "../../assets/images/watch_logo.png";

const customClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const [current,setCurrent] = useState()
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    dispatch(setUser({}));
  };

  const itemCount = 1; // Example item count

  const navigation = [
    { name: "Home", to: "/", current: false },
    { name: "Categories", to: "/categories", current: false },
    { name: "About", to: "/about", current: false },
    { name: "Contact", to: "/contact", current: false },
  ];

  return (
    <div className="fixed top-0 w-full z-50">
      {/* <div className="bg-gray-300 sm:block hidden">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-8 flex justify-between items-center min-h-[50px]">
          <span>Quality Guaranteed</span>
          <div className="flex gap-2 items-center">
            <span className="w-4">{shipping_truck}</span>
            <span> Free Shipping within Australia</span>
          </div>
          <span>After Pay Available</span>
        </div>
      </div> */}

      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between min-h-[100px]">
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
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white "
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View Cart</span>
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />

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

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { setUser } from "../../redux/slice/UserSlice";
// import {
//   BellIcon,
//   HeartIcon,
//   ShoppingCartIcon,
//   UserCircleIcon,
// } from "@heroicons/react/24/outline";
// import watch_logo from "../../assets/images/watch_logo.png";

// const Header = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.user);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleOnLogout = () => {
//     dispatch(setUser({}));
//   };

//   const itemCount = 1; // Example item count

//   const navigation = [
//     { name: "Home", to: "/", current: false },
//     { name: "Categories", to: "/categories", current: false },
//     { name: "About", to: "/about", current: false },
//     { name: "Contact", to: "/contact", current: false },
//   ];

//   const handleUserMenuToggle = () => {
//     setIsUserMenuOpen(!isUserMenuOpen);
//   };

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMenus = () => {
//     setIsUserMenuOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <div className="bg-gray-800">
//       <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between min-h-[100px]">
//           {/* Mobile Menu Button */}
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               onClick={handleMobileMenuToggle}
//               className="text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md p-2"
//               aria-label="Open main menu"
//             >
//               <svg
//                 className="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           {/* Logo and Site Title */}
//           <div className="flex items-center justify-between w-full sm:w-auto">
//             <Link
//               to="/"
//               className="flex items-center gap-1 text-gray-300 font-semibold text-xl"
//             >
//               <img
//                 alt="Vikiasmy"
//                 src={watch_logo}
//                 className="h-[30px] w-[30px]"
//               />
//               <h1 className="">Vikiasmy's </h1>
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex md:justify-center flex-1">
//             <div className="flex space-x-4">
//               {navigation.map((item) => (
//                 <Link key={item.name} to={item.to}>
//                   <div
//                     className={`${
//                       location.pathname === item.to
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                     } block rounded-md px-3 py-2 text-base font-medium`}
//                   >
//                     {item.name}
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Icons (Notifications, Cart, User Dropdown) */}
//           <div className="flex items-center gap-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             {/* Notifications */}
//             <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//               <HeartIcon className="h-6 w-6" aria-hidden="true" />
//             </button>

//             {/* Cart */}
//             <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//               <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
//               {itemCount > 0 && (
//                 <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-700 border-2 border-white rounded-full">
//                   {itemCount}
//                 </span>
//               )}
//             </button>

//             {/* User Dropdown */}
//             <div className="relative ml-3">
//               <button
//                 onClick={handleUserMenuToggle}
//                 className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none"
//               >
//                 <img
//                   alt=""
//                   src="https://media.licdn.com/dms/image/D5603AQHqt_A9Xl1K9A/profile-displayphoto-shrink_800_800/0/1719015240386?e=1726099200&v=beta&t=o26enXIeOf2keAOUIPOAfdb80iJqK2HfLJZnqWr11jA"
//                   className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
//                 />
//               </button>
//               {/* User Dropdown Items */}
//               {isUserMenuOpen && (
//                 <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
//                   <div className="py-1">
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Your Profile
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Settings
//                     </a>
//                     <div
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                       onClick={handleOnLogout}
//                     >
//                       Logout
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Panel */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden">
//           <div className="space-y-1 px-2 pb-3 pt-2">
//             {navigation.map((item) => (
//               <Link key={item.name} to={item.to}>
//                 <div
//                   onClick={closeMenus}
//                   className={`${
//                     location.pathname === item.to
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-400 hover:bg-gray-700 hover:text-white"
//                   } block rounded-md px-3 py-2 text-base font-medium`}
//                 >
//                   {item.name}
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;
