import React from 'react';
import { Helmet } from 'react-helmet';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <Helmet>
        <title>{title} - Card Component</title>
        <meta name="description" content={content} />
        <meta name="keywords" content={`card, ${title}`} />
      </Helmet>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-2xl font-semibold text-blue-600 mt-2">{content}</p>
    </div>
  );
};

export default Card;
