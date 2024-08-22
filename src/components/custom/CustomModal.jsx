import { useState } from "react";

export const CustomModal = ({ title, setShowImageModal, children }) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black opacity-10"
        onClick={setShowImageModal}
      />

      {/* Modal container */}
      <div className="relative w-full max-w-lg px-6 py-12 mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-black px-1">{title}</h3>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => {
              setShow(false);
              setShowImageModal();
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div>{children}</div>
      </div>
    </div>
  );
};
