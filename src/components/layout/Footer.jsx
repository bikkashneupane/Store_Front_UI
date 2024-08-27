import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-100 dark:bg-gray-900 shadow-inner-top border-t border-gray-300 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[15vh] flex flex-col gap-1 justify-center items-center font-mono sm:tracking-widest font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base">
        <h1>&copy; All rights reserved 2024 | Made by Bikash</h1>
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/bikkashneupane" target="_blank">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://bikash-2024-portfolio.vercel.app/" target="_blank">
            <GlobeAltIcon className="w-8 h-8 text-purple-500" />
          </a>
          <a href="https://www.linkedin.com/in/bikkashneupane" target="_blank">
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
