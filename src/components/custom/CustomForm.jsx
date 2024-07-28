export const CustomForm = ({ label, inputRef, as, ...rest }) => {
  const InputComponent = as === "textarea" ? "textarea" : "input";

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
          {label}
        </label>
      )}
      <div className="mt-2">
        <InputComponent
          {...rest}
          ref={inputRef}
          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-purple-600 dark:bg-gray-800"
        />
      </div>
    </div>
  );
};
