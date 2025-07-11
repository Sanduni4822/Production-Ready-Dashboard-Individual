import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-700">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
