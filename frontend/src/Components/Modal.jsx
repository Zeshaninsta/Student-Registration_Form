import React from 'react';

const Modal = ({ isOpen, onClose, message, isSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full h-full bg-black/10 absolute inset-0 backdrop-blur-sm flex justify-center items-center m-auto min-h-screen">
      <div className="w-96 h-64 bg-white flex flex-col justify-between items-center shadow-md rounded-lg p-4">
        <div className="w-full flex justify-end">
          <button
            className="text-gray-600 hover:text-gray-900 font-bold text-xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <h2 className={`text-2xl font-semibold mb-4 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {isSuccess ? "Success" : "Error"}
          </h2>
          <p className="text-gray-700 text-center mb-6">
            {message}
          </p>
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
