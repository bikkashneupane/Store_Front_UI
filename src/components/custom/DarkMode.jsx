import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

const DarkMode = () => {
  const [dark, setDark] = useState(false);
  const [value, setValue] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    value && setDark(value);
  }, [value]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      dark ? root.classList.add("dark") : root.classList.remove("dark");
    }
    setValue(dark);
  }, [dark, setValue]);

  return (
    <div
      className="dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-200 hover:text-black dark:hover:text-white rounded-full cursor-pointer"
      onClick={() => setDark(!dark)}
    >
      {dark ? (
        <SunIcon aria-hidden="true" className="h-7 w-7 p-0.5" />
      ) : (
        <MoonIcon aria-hidden="true" className="h-7 w-7 p-0.5" />
      )}
    </div>
  );
};

export default DarkMode;
