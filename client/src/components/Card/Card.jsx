import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-2xl font-semibold text-blue-600 mt-2">{content}</p>
    </div>
  );
};

export default Card;
