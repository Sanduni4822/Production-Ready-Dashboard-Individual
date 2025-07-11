import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default Button;
