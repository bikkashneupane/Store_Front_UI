import React from "react";

export const CustomForm = ({ label, inputRef, as, ...rest }) => {
  const InputComponent = as === "textarea" ? "textarea" : "input";

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-400">
          {label}
        </label>
      )}
      <div className="mt-2">
        <InputComponent
          {...rest}
          ref={inputRef}
          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
