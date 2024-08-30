import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const PorfileMenu = ({ handleOnLogout }) => {
  const { user } = useSelector((state) => state.user);

  return (
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
  );
};

export default PorfileMenu;
