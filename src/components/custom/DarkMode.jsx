import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "react-use";
import { setDarkMode } from "../../redux/darkModeSlice";

const DarkMode = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [value, setValue] = useLocalStorage("dark_mode", true);

  // Sync Redux state with localStorage
  useEffect(() => {
    dispatch(setDarkMode(value));
  }, [value, dispatch]);

  // Apply dark mode class to the document root
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      isDarkMode ? root.classList.add("dark") : root.classList.remove("dark");
    }
    setValue(isDarkMode); // update localStorage
  }, [setValue, isDarkMode]);
  // }, [isDarkMode]);

  // Handle dark mode toggle
  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    setValue(newDarkMode);
    dispatch(setDarkMode(newDarkMode));
  };

  return (
    <div onClick={handleToggle}>
      {isDarkMode ? (
        <SunIcon aria-hidden="true" className="h-7 w-7 p-0.5" />
      ) : (
        <MoonIcon aria-hidden="true" className="h-7 w-7 p-0.5" />
      )}
    </div>
  );
};

export default DarkMode;
