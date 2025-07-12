import React from 'react';
import { Helmet } from 'react-helmet';
import { useUser } from '../../context/UserContext';

const Card = ({ title, content }) => {
  const { user } = useUser();

  // Only use user data if needed for logic, no forced UI change
  // Example: show special badge if user is admin (hypothetical)
  const isAdmin = user?.role === 'admin';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <Helmet>
        <title>{title} - Card Component</title>
        <meta name="description" content={content} />
        <meta name="keywords" content={`card, ${title}`} />
      </Helmet>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-2xl font-semibold text-blue-600 mt-2">{content}</p>
      {isAdmin && <span className="text-red-600 font-bold mt-4 block">Admin Badge</span>}
    </div>
  );
};

export default Card;
