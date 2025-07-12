import React from 'react';
import { Helmet } from 'react-helmet';
import { useUser } from '../../context/UserContext';

const Modal = ({ isOpen, onClose, children }) => {
  const { user } = useUser();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <Helmet>
        <title>Modal Content - Important Message</title>
        <meta
          name="description"
          content="Important message regarding your account. Please review the information."
        />
      </Helmet>

      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 text-lg font-bold"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="mb-4 text-xl font-semibold">Hello, {user.name}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
