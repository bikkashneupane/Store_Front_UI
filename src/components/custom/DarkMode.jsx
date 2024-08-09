import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "react-use";
import { setDarkMode } from "../../redux/darkModeSlice";

const DarkMode = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [value, setValue] = useLocalStorage("dark_mode", isDarkMode);

  useEffect(() => {
    if (value) {
      dispatch(setDarkMode(value));
    }
  }, [value, dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      isDarkMode ? root.classList.add("dark") : root.classList.remove("dark");
    }
    setValue(isDarkMode);
    dispatch(setDarkMode(isDarkMode));
  }, [setValue, dispatch, isDarkMode]);

  return (
    <div
      className="dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-200 hover:text-black dark:hover:text-white rounded-full cursor-pointer"
      onClick={() => dispatch(setDarkMode(!isDarkMode))}
    >
      {isDarkMode ? (
        <SunIcon aria-hidden="true" className="h-7 w-7 p-0.5" />
      ) : (
        <MoonIcon aria-hidden="true" className="h-7 w-7 p-0.5" />
      )}
    </div>
  );
};

export default DarkMode;
